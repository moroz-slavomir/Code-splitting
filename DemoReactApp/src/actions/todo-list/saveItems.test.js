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

    jest.useFakeTimers();
    global.localStorage = {
        setItem: jest.fn()
    };

    dispatchable(dispatch, getState);

    jest.runTimersToTime(1000); // Skip 1 second ahead

    expect(dispatch).toHaveBeenCalledWith(savingStarted());
    expect(dispatch).toHaveBeenLastCalledWith(savingFinished());
});