import {
    savingFinished,
    savingStarted
} from './actionCreators';
import { saveItems } from './saveItems';

test('dispatches actions in the correct order', () => {
    const dispatch = jest.fn();
    const getState = () => ({
        todoApp: {
            items: {
                allIds: {
                    toJS: jest.fn()
                },
                byId: {
                    toJS: jest.fn()
                }
            }
        }
    });

    const dispatchable = saveItems();
    dispatchable(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(savingStarted());
    expect(dispatch).toHaveBeenLastCalledWith(savingFinished());
});