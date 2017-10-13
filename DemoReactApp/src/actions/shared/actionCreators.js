import { uuid } from '../../utils/uuidGenerator';
import * as actionTypes from '../../constants/actionTypes';

export const receiveValidToken = (token) => ({
    type: actionTypes.SHARED_RECEIVE_TOKEN,
    payload: {
        token,
    }
});

export const invalidateToken = () => ({
    type: actionTypes.SHARED_INVALIDATE_TOKEN,
});

export const startAuthentication = () => ({
    type: actionTypes.SHARED_AUTHENTICATION_STARTED,
});

export const failAuthentication = (errorMessage, error) => ({
    type: actionTypes.SHARED_AUTHENTICATION_FAILED,
    payload: {
        error: {
            id: uuid(),
            message: errorMessage,
            statusText: error.message,
            statusCode: error.statusCode,
        },
    }
});
