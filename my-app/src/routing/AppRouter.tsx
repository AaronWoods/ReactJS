import React from 'react'

import { HashRouter, Switch, Route } from "react-router-dom";
import { HeaderApp } from "../components/presentational/HeaderApp";
import { FooterApp } from "../components/presentational/FooterApp";
import { AppContainer } from "../components/container/AppContainer";
import { EditTodoContainer } from '../components/container/EditTodoContainer';

export const AppRouter:React.FC<{}> = () => {

    return (
        <HashRouter>
            <div>
                <HeaderApp  />

                    <Switch>
                        <Route exact path="/" component={AppContainer} />
                        <Route exact path="/about" component={AppContainer} />
                        <Route exact path="/members" component={AppContainer} />
                        <Route exact path="/todos" component={AppContainer} />
                        <Route exact path="/edit/:id" component={EditTodoContainer} />
                        /edit
                    </Switch>

                <FooterApp />

            </div>


        </HashRouter>
    )
}