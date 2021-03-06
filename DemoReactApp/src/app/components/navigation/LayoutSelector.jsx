import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
    Route,
    Switch
} from 'react-router-dom';
import { ContentLayout } from './ContentLayout.jsx';
import { LoginLayout } from '../login/LoginLayout.jsx';
import { AuthenticatedRoute } from './AuthenticatedRoute.jsx';
import * as routes from '../../../shared/constants/routes';

const LayoutSelector = ({ isAuthenticated }) => (
    <Switch>
        <Route path={routes.LOGIN} component={LoginLayout} />
        <AuthenticatedRoute path={routes.ROOT} component={ContentLayout} isAuthenticated={isAuthenticated} />
    </Switch>
);

LayoutSelector.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export { LayoutSelector };