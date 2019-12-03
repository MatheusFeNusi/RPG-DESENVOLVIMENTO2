import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppHeader from '../common/AppHeader';
//import Ho from '../home/Home';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './AppLogin.css';
//import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Logo from '../../meu-template/images/logos/logo.svg'
import ImagemLogin from '../../meu-template/images/ImagemLogin.svg'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false
        });
      }).catch(error => {
        this.setState({
          loading: false
        });
      });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("Você está desconectado com segurança!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if (this.state.loading) {
      return <LoadingIndicator />
    }

    return (
      <div style={{ backgroundImage: `url(${ImagemLogin})`, backgroundSize: 'cover' }}>
          <div className="app">
            <div className="app-top-box">
              <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
            </div>
            <br />
            <br />
            <br />
            <Col md={4} style={{ left: '400px', marginTop: '-10px', backgroundColor: 'rgba(0, 0, 0, 0.48)', borderColor: 'black', borderStyle: 'solid' }}>
              <div className="app-body">
              <div><img src={Logo}  /><strong style={{color: 'rgba(250, 255, 0, 1)', fontFamily: 'Rubik', fontSize: '22px'}}>3D&T Termination</strong></div>

                <Switch>

                  <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser}
                    component={Profile}></PrivateRoute>
                  <Route path="/login"
                    render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
                  <Route path="/cadastro"
                    render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}></Route>
                  <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
                  <Route component={NotFound}></Route>
                </Switch>

                <Alert stack={{ limit: 3 }}
                  timeout={3000}
                  position='top-right' effect='slide' offset={65} />
              </div>
              <br />
            </Col>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
      </div>
    );
  }
}

export default App;
