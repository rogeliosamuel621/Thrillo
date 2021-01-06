import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from "./routes"

const SwitchRouter = ({routes}) => (
    <Switch>
        {
            routes.map((route, index) => (
                <Route
                    key={index}
                    exact
                    path={route.path}
                    component={route.component} />
            ))
        }
        < Redirect to="/" />
    </Switch>
)

const ContainerRouter = ({ children }) => (
    <BrowserRouter>
        {children}
        <SwitchRouter routes={routes} />
    </BrowserRouter>
)


export default ContainerRouter
