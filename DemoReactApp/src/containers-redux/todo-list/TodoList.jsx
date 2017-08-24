import { connect } from 'react-redux';
import { TodoList } from '../../containers/todo-list/TodoList.jsx';
import {
    cancelEditingItem,
    closeCreateNewForm,
    createNewItem,
    deleteItem,
    moveItem,
    openCreateNewForm,
    startEditingItem,
    updateItem,
    startDragging,
    stopDragging
} from '../../actions/todo-list/actionCreators';

const mapStateToProps = (state) => ({
    list: state.todoApp.itemsList,
    editedItemId: state.todoApp.editedItemId,
    isCreateNewFormOpen: state.todoApp.isCreateNewFormOpen,
    isDragging: state.todoApp.isDragging,
});

const mapDispatchToProps = (dispatch) => ({
    onCreateNew: (item) => dispatch(createNewItem(item)),
    onUpdate: (item) => dispatch(updateItem(item)),
    onDelete: (id) => dispatch(deleteItem(id)),
    onMove: (moveItemId, destinationItemId) => dispatch(moveItem(moveItemId, destinationItemId)),
    onStartEditing: (id) => dispatch(startEditingItem(id)),
    onCancelEditing: () => dispatch(cancelEditingItem()),
    onCreateNewClick: () => dispatch(openCreateNewForm()),
    onCreateNewCancel: () => dispatch(closeCreateNewForm()),
    onDragStarted: () => dispatch(startDragging()),
    onDragEnded: () => dispatch(stopDragging())
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(TodoList);

export { connectedComponent as TodoListRedux };
