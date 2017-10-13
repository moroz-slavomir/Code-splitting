import {
    updateProfileDetails,
    failFetchingProfileDetails,
    startFetchingProfileDetails
} from './actionCreators';
import {
    USER_EMAIL,
    createApiUserUri
} from '../../constants/api';
import { invalidateToken } from '../shared/actionCreators';
import { fetchReceive } from '../../utils/api/fetchReceive';

const convertDetails = (serverDetails) => ({
    ...JSON.parse(serverDetails.customData || '{}'),
    email: serverDetails.email,
});

export const fetchUserDetails = () =>
    (dispatch, getState) => {
        dispatch(startFetchingProfileDetails());

        const authToken = getState().shared.token;
        const requestUri = createApiUserUri(USER_EMAIL);

        return fetchReceive(requestUri, authToken)
            .then((serverDetails) => dispatch(updateProfileDetails(convertDetails(serverDetails))))
            .catch((error) => error.statusCode === 401
                ? dispatch(invalidateToken())
                : Promise.reject(error))
            .catch((error) => dispatch(failFetchingProfileDetails(error.message)));
    };
