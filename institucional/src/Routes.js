import React, {Component} from 'react';
import {BrowserRouter, Switch, Route}  from 'react-router-dom';

import Site from './Site';
import {Interacao} from './Interacao/Interacao.js';
import IndexLogin from './Login/indexLogin.js';
export default class Routes extends Component {
    
    render() {
        return(
            
            <BrowserRouter>
         
            <Switch>
            <Route exact path="/" component={Site}/>
            <Route path="/login" component={IndexLogin} />
            <Route path="/interacao" component={Interacao}/>
            </Switch>
    
            </BrowserRouter>
    
        );
    }
    
}