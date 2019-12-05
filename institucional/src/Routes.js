import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Site from './Site';
import Interacao from './Interacao/Interacao.js';
//import IndexLogin from './Login/indexLogin.js';
import Login from './Login/appLogin/AppLogin';
import Acesso from './Login/home/Home';
import Cadastro from './Login/user/signup/Signup.js'
import Login2 from './Login/user/login/Login'
//import Chat from './Interacao/Chat.js'

// <Route path="/chat" component={Chat} />
// const PrivateRoute = ({ component: Component, ...rest }) => {
//     <Route
//         {...rest}
//         render={props =>
//             isAuthenticated() ? (
//                 <Component {...props} />
//             ) : <Redirect to={{ pathname: "/", state: { from: props.location } }} />

//         } />
// }


export default class Routes extends Component {
render(){ 
    return(
    <BrowserRouter>

        <Switch>
            <Route exact path="/" component={Site} />
            <Route path="/login" component={Login} />
            <Route path="/interacao" component={Interacao} />
            <Route path="/acesso" component={Acesso} />
            <Route path="/cadastro" component={Cadastro} />

        </Switch>

    </BrowserRouter>
    )
}
}
;