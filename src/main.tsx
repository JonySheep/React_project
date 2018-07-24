import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HelloComponent} from "./hello";
import {App} from "./app";
import {HashRouter,Switch,Route} from 'react-router-dom';
import {PageB} from "./pages/b";
import {LoginPageContainer} from "./pages/login/loginPageContainer";

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact={true} path={"/login"} component={LoginPageContainer} />
            <Route path={"/pageB"} component={PageB} />
        </Switch>
    </HashRouter>,
    document.getElementById('root'),
);