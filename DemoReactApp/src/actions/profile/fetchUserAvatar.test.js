import { fetchUserAvatar } from './fetchUserAvatar';
import {
    startFetchingProfileAvatar,
    updateProfileaAvatar
} from './actionCreators';

test('dispatches actions in correct order', () => {
    const dispatch = jest.fn();
    const getState = () => ({
        shared: {
            token: 'pretty please'
        }
    });

    const dispatchable = fetchUserAvatar(3);
    dispatchable(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(startFetchingProfileAvatar());
    expect(dispatch).toHaveBeenLastCalledWith(updateProfileaAvatar('http://blob/avatar.png'));
});