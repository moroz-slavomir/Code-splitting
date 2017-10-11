import * as React from 'react';
import { Route } from 'react-router-dom';
import { ROOT } from '../constants/routes';
import { Tabs } from './Tabs.jsx';
import { Content } from './Content.jsx';
import { SavingStatusLayout} from './app/SavingStatusLayout.jsx';

const Layout = () => (
    <div className="container">
        <div className="row form-group">
            <div className="col-xs-12">
                <h1>TODO List</h1>
            </div>
            <div className="col-xs-7 col-md-4">
                <Tabs />
            </div>
            <Route
                exact
                path={ROOT}
                component={SavingStatusLayout}
            />
        </div>
        <div className="row form-group">
            <Content />
        </div>
        <div className="row">
            <div className="col-xs-12 h5">
                PV247
                &nbsp;
                <small>2017</small>
            </div>
        </div>
    </div>
);

export { Layout };