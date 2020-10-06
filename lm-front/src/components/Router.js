import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import EmployeesList from '../pages/EmployeesList';
import AddEmployee from '../pages/AddEmployee';
import Home from '../pages/Home';

const routes = [
    {
        path: '/',
        page: <Home />
    },
    {
        path: '/lista-de-funcionarios',
        page: <EmployeesList />
    },
    {
        path: '/adicionar-funcionario',
        page: <AddEmployee />
    }
];

const Routes = () => {
    return <BrowserRouter>
        <Switch>
            {
                routes.map(
                    (route) => {
                        return <Route key={route.page} exact path={route.path}>
                            {route.page}
                        </Route>;
                    }
                )
            }
        </Switch>
    </BrowserRouter>;
};

export default Routes;