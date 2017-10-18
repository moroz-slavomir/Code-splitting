import Immutable from 'immutable';
import { allIds } from './allIds';
import { createNewItemFactory } from '../../../actions/todo-list/actionCreators';

describe('allIds reducer', () => {
    test('adds id of a created item to the collection', () => {
        const expectedId = 4;
        const createNewItem = createNewItemFactory(() => expectedId);
        const newState = allIds(Immutable.List(), createNewItem({ title: 'test thoroughly' }));
        expect(newState).toContain(expectedId);
    });
});