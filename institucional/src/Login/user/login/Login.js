import React, { Component } from 'react';
import './Login.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import Alert from 'react-s-alert';
import { urlPadrao } from "../../services/api";

// class Login extends Component {
//     componentDidMount() {
//         // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
//         // Here we display the error and then remove the error query parameter from the location.
//         if (this.props.location.state && this.props.location.state.error) {
//             setTimeout(() => {
//                 Alert.error(this.props.location.state.error, {
//                     timeout: 5000
//                 });
//                 this.props.history.replace({
//                     pathname: this.props.location.pathname,
//                     state: {}
//                 });
//             }, 100);
//         }
//     }

//     render() {
//         if (this.props.authenticated) {
//             return <Redirect
//                 to={{
//                     pathname: "/",
//                     state: { from: this.props.location }
//                 }} />;
//         }

//         return (
//             <div className="login-container">
//                 <div className="login-content">
//                     <h1 className="login-title">Login com redes sociais</h1>
//                     <SocialLogin />
//                     <div className="or-separator">
//                         <span className="or-text">ou</span>
//                     </div>
//                     <LoginForm {...this.props} />
//                     <span className="signup-link">novo usuario? <Link to="/signup">Registrar!</Link></span>
//                 </div>
//             </div>
//         );
//     }
// }

// class SocialLogin extends Component {
//     render() {
//         return (
//             <div className="social-login">
//                 <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
//                     <img src={googleLogo} alt="Google" /> Logue-se com o google</a>
//                 <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
//                     <img src={fbLogo} alt="Facebook" /> Logue-se com o facebook </a>
//                 <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
//                     <img src={githubLogo} alt="Github" /> Logue-se com o git hub</a>
//             </div>
//         );
//     }
// }


export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };
    }
    logar = () => {
        let email = this.state.email
        let senha = this.state.senha


        urlPadrao.post(
            "login", { email, senha }).then(res => {
                if (res.status == 200) {
                    alert("sucesso")
                }

            }
            ).catch(err => console.error(err))
    }



    handleInputChange = (event) => {
        const state = Object.assign({}, this.state);
        let field = event.target.id;
        state[field] = event.target.value;
        this.setState(state);

    }

    // handleSubmit(event) {
    //     event.preventDefault();

    //     const loginRequest = Object.assign({}, this.state);

    //     login(loginRequest)
    //         .then(response => {
    //             localStorage.setItem(ACCESS_TOKEN, response.accessToken);
    //             Alert.success("You're successfully logged in!");
    //             this.props.history.push("/");
    //         }).catch(error => {
    //             Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
    //         });
    // }

    render() {
        return (
            <form >
                <div className="form-item">
                    <input type="email" id="email" name="email"
                        className="form-control" placeholder="Email"
                        onChange={this.handleInputChange} required />
                </div>
                <div className="form-item">
                    <input type="password" id="senha" name="senha"
                        className="form-control" placeholder="Password"
                        onChange={this.handleInputChange} required />
                </div>
                <div className="form-item">
                    <button onClick={this.logar} type="button" className="btn btn-block btn-primary">Login</button>
                </div>
            </form>
        );
    }
}
//onClick={this.logar}
