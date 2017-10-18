import * as keys from '../../constants/localStorageKeys';
import {
    savingFinished,
    savingStarted
} from './actionCreators';

export const saveItemsFactory = (setItemToStorage) => () =>
    (dispatch, getState) => {
        dispatch(savingStarted());
        setTimeout(() => {
            setItemToStorage(keys.ITEMS_ALL_IDS, JSON.stringify(getState().todoApp.items.allIds.toJS()));
            setItemToStorage(keys.ITEMS_BY_ID, JSON.stringify(getState().todoApp.items.byId.toJS()));

            dispatch(savingFinished());
        }, 1000);
    };
