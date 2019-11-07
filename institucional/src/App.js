import React, {Component} from 'react';
import Site from './Site';
import {Interacao} from './Interacao/Interacao.js';

import Login from './login/app/App'

import './meu-template/style.css';
import './meu-template/css/bootstrap.min.css';
import './meu-template/css/versions.css';
import './meu-template/css/responsive.css';
import './meu-template/css/custom.css';

import './meu-template/css/animate.css';
import './meu-template/css/flaticon.css';
import './meu-template/css/bootstrap-select.min.css';
import './meu-template/css/prettyPhoto.css';
import './meu-template/css/owl.carousel.css';
import './meu-template/css/font-awesome.min.css';
import './meu-template/css/font-awesome.css';
import './meu-template/css/owl.carousel.css';
import './meu-template/fonts/flaticon.css';


import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class App extends Component {

    render() {

      return <Login />

  }
}
