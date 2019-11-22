import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';



import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Chat from './Interacao/Chat.js'
import Routes from './Routes.js';
export default class App extends Component {

    render() {

      return <Routes />

  }
}
