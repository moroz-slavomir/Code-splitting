import * as React from 'react';
import { Route } from 'react-router-dom';
import * as routes from '../../../shared/constants/routes';
import { TodoListRedux } from '../../../todo-list/containers-redux/TodoList.jsx';
import { Profile } from '../../../user-profile/containers-redux/Profile.jsx';

const Content = () => [
    <Route exact path={routes.ROOT} component={TodoListRedux} key="default" />,
    <Route path={routes.PROFILE} component={Profile} key="profile" />,
];

export { Content };