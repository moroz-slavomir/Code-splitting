import { editedItemId } from './editedItemId';
import { TODO_LIST_ITEM_START_EDITING } from '../../constants/actionTypes';

test('stores id of the edited item', () => {
    const expectedId = 5;
    const newState = editedItemId(null, {
        type: TODO_LIST_ITEM_START_EDITING,
        payload: {
            id: expectedId
        }
    });
    expect(newState).toBe(expectedId);
});