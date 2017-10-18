import { saveItemsFactory } from './saveItems';
import { createNewItemFactory } from './actionCreators';
import { uuid } from '../../utils/uuidGenerator';

export const createNewItem = createNewItemFactory(uuid());

export const saveItems = saveItemsFactory(localStorage.setItem);