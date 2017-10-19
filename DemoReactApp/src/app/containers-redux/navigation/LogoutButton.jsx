import { connect } from 'react-redux';
import { LogoutButton } from '../../components/navigation/LogoutButton.jsx';
import { logoutUser } from '../../actions/logoutUser';

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(logoutUser())
});

const enhancer = connect(undefined, mapDispatchToProps);
const connectedComponent = enhancer(LogoutButton);

export { connectedComponent as LogoutButton };
