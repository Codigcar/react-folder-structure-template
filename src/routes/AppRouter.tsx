import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom"
import { HomeView } from '../views/HomeView';
import { LoginView } from '../views/LoginView';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={LoginView} />
                    <Route path="/home" component={HomeView} />
                </Switch>
            </div>
        </Router>
    )
}
