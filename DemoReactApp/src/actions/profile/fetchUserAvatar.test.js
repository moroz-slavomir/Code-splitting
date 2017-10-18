import { fetchUserAvatar } from './fetchUserAvatar';
import {
    startFetchingProfileAvatar,
    updateProfileaAvatar
} from './actionCreators';

test('dispatches actions in correct order', async done => {
    const dispatch = jest.fn();
    const getState = () => ({
        shared: {
            token: 'pretty please'
        }
    });

    const dispatchable = fetchUserAvatar(3);

    const expectedUri = 'http://blob/avatar.png';
    global.fetch = () => Promise.resolve({ status: 200, json: () => Promise.resolve(expectedUri) });

    await dispatchable(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith(startFetchingProfileAvatar());
    expect(dispatch).toHaveBeenLastCalledWith(updateProfileaAvatar(expectedUri));
    done();
});