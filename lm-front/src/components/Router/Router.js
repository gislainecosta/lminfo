import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import {
    Screen,
    ContainerRouter,
    Body
} from './styles';

import Header from '../Header';
import Navigation from '../Navigation'

import EmployeesList from '../../pages/EmployeesList';
import AddEmployee from '../../pages/AddEmployee';
import AddOffice from '../../pages/AddOffice';
import OfficeList from '../../pages/OfficeList';
import Login from '../../pages/Login';

const routes = [
    {
        path: '/',
        page: <Login />
    },
    {
        path: '/funcionarios',
        page: <EmployeesList />
    },
    {
        path: '/funcionarios/adicionar',
        page: <AddEmployee />
    },
    {
        path: '/cargos',
        page: <OfficeList />
    },
    {
        path: '/cargos/adicionar',
        page: <AddOffice />
    }
];

const Routes = () => {
    return <ContainerRouter>
        <BrowserRouter>
            <Switch>
                {
                    routes.map(
                        (route) => {
                            return <Route key={route.page} exact path={route.path}>
                                {
                                    route.path === '/'?
                                    route.page:
                                        <section>
                                            <Header />
                                            <Body>
                                                <Navigation />
                                                {route.page}
                                            </Body>
                                        </section>
                                }
                            </Route>;
                        }
                    )
                }
            </Switch>
        </BrowserRouter>
    </ContainerRouter>;
};

export default Routes;