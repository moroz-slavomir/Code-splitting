import { connect } from 'react-redux';
import { LayoutSelector } from '../../components/navigation/LayoutSelector.jsx';

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.shared.token,
    location: state.router.location,
});

const enhancer = connect(mapStateToProps);
const connectedComponent = enhancer(LayoutSelector);

export { connectedComponent as LayoutSelector };
