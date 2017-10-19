import { connect } from 'react-redux';
import {uuid} from '../../shared/utils/uuidGenerator';
import { TodoListEditedItem } from '../containers/TodoListEditedItem.jsx';
import {
    createNewItem,
    closeCreateNewForm,
} from '../actions/actionCreators';

const mapStateToProps = () => ({
    submitButtonText: 'Create',
    item: {
        id: uuid(),
        title: '',
        description: ''
    }
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (item) => dispatch(createNewItem(item)),
    onCancel: () => dispatch(closeCreateNewForm()),
});

const enhancer = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = enhancer(TodoListEditedItem);

export { connectedComponent as TodoListNewItem };
