import { editedItemId } from './editedItemId';
import {
    cancelEditingItem,
    startEditingItem
} from '../../actions/todo-list/actionCreators';

describe('editedItemId reducer', () => {
    test('stores id of the edited item', () => {
        const expectedId = 5;
        const newState = editedItemId(null, startEditingItem(expectedId));
        expect(newState).toBe(expectedId);
    });

    test('clears the edited item id', () => {
        const newState = editedItemId(5, cancelEditingItem());
        expect(newState).toBeNull();
    });
});