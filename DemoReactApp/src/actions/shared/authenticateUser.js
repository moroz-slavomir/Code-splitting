import { push } from 'connected-react-router';
import { receiveValidToken } from './actionCreators';
import {
    failAuthentication,
    startAuthentication
} from './actionCreators';
import * as keys from '../../constants/localStorageKeys';
import { fetchAuthToken } from '../../utils/api/fetchAuthToken';
import { USER_EMAIL } from '../../constants/api';
import { FAILED_AUTHENTICATION_MESSAGE } from '../../constants/uiConstants';

export const authenticateUser = (destinationLocation) =>
    (dispatch) => {
        dispatch(startAuthentication());

        return fetchAuthToken(USER_EMAIL)
            .then((token) => {
                dispatch(receiveValidToken(token));
                dispatch(push(destinationLocation));

                localStorage.setItem(keys.SHARED_TOKEN, JSON.stringify(token));
                localStorage.setItem(keys.SHARED_TOKEN_TIMESTAMP, JSON.stringify(new Date().getTime()));
            })
            .catch(error => dispatch(failAuthentication(FAILED_AUTHENTICATION_MESSAGE, error)));
    };
