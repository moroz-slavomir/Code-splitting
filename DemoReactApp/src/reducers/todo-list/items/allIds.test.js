import Immutable from 'immutable';
import { createNewItem } from '../../../actions/todo-list/actionCreators';
import { allIds } from './allIds';

describe('allIds reducer', () => {
    test('adds id of a created item to the collection', () => {
        const newState = allIds(Immutable.List(), createNewItem({ title: 'test thoroughly' }));
        expect(newState).toContain(4);
    });
});