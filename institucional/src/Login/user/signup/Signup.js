import React, { Component } from 'react';
import './Signup.css';
import { Link, Redirect } from 'react-router-dom'
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL } from '../../constants';
import { signup } from '../../util/APIUtils';
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import githubLogo from '../../img/github-logo.png';
import Alert from 'react-s-alert';
import { urlPadrao } from "../../services/api";
import AppHeader from '../../common/AppHeader'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Col';
import Logo from '../../../meu-template/images/logos/logo.svg'


import ImagemCadastro from '../../img/imagemCadastro.jpg'
export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            idade: '',
            email: '',
            senha: ''
        }
    };

    cadastrar = () => {
        // let email = this.state.email
        // let senha = this.state.senha
        let nome = this.state.nome
        let idade = this.state.idade
        let email = this.state.email
        let senha = this.state.senha

        // let senha = this.state.credenciais.senha

        urlPadrao.post(
            "usuarios", { email, senha, nome, idade }).then(res => {
                console.log(res.data)
                if (res.status == 200) {
                    Redirect("/login")
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
        console.log(this.state);
        
        return (

            < div style={{backgroundImage: `url(${ImagemCadastro})`, width:'1290px',backgroundSize: 'cover', backgroundRepeat:'no-repeat', height: '700px', top: '-100px'}}>
            <div className="app">
        <div className="app-top-box">
          <AppHeader  />
        </div>
        </div>
        

        <Col md={5} style={{ top: '05px', backgroundColor: 'rgba(0, 0, 0, 0.20)', borderColor: 'black', borderStyle: 'solid'}}>
        <div><img  src={Logo} style={{backgroundSize: 'cover'}}/> <strong style={{color: 'rgba(250, 255, 0, 1)', fontFamily: 'Rubik', fontSize: '22px'}}>Olá jogador!! Cadastre e divirta</strong></div>
        <div className="app-body"></div>
                <div className="form-item">
                    <input type="email" id="email" name="email"
                        className="form-control" placeholder="email"
                        onChange={this.handleInputChange} required />
                </div>
                <div className="form-item">
                    <input type="password" id="senha" name="senha"
                        className="form-control" placeholder="senha"
                        onChange={this.handleInputChange} required />
                </div>
                <div className="form-item">
                    <input type="text" id="nome" name="nome"
                        className="form-control" placeholder="nome"
                        onChange={this.handleInputChange} required />
                </div>
                <div className="form-item">
                    <input type="text" id="idade" name="idade"
                        className="form-control" placeholder="idade"
                        onChange={this.handleInputChange} required />
                </div>

                <div className="form-item">
                    <button onClick={this.cadastrar} type="button" className="btn btn-block btn-primary">Cadastrar-se</button>
                </div>
                <br />  
                </Col>
                
            </div >
        );
    }
}

// class Signup extends Component {
//     render() {
//         if(this.props.authenticated) {
//             return <Redirect
//                 to={{
//                 pathname: "/",
//                 state: { from: this.props.location }
//             }}/>;            
//         }

//         return (
//             <div className="signup-container">
//                 <div className="signup-content">
//                     <h1 className="signup-title">Cadastre-se com redes sociais</h1>
//                     <SocialSignup />
//                     <div className="or-separator">
//                         <span className="or-text">OU</span>
//                     </div>
//                     <SignupForm {...this.props} />
//                     <span className="login-link">Possui conta? <Link to="/login">Login!</Link></span>
//                 </div>
//             </div>
//         );
//     }
// }


// class SocialSignup extends Component {
//     render() {
//         return (
//             <div className="social-signup">
//                 <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
//                     <img src={googleLogo} alt="Google" /> Logue-se com o facebook</a>
//                 <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
//                     <img src={fbLogo} alt="Facebook" /> logue-se com o facebook</a>
//                 <a className="btn btn-block social-btn github" href={GITHUB_AUTH_URL}>
//                     <img src={githubLogo} alt="Github" /> Logue-se com o git hub </a>
//             </div>
//         );
//     }
// }

// class SignupForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//             email: '',
//             password: ''
//         }
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleInputChange(event) {
//         const target = event.target;
//         const inputName = target.name;        
//         const inputValue = target.value;

//         this.setState({
//             [inputName] : inputValue
//         });        
//     }

//     handleSubmit(event) {
//         event.preventDefault();   

//         const signUpRequest = Object.assign({}, this.state);

//         signup(signUpRequest)
//         .then(response => {
//             Alert.success("You're successfully registered. Please login to continue!");
//             this.props.history.push("/login");
//         }).catch(error => {
//             Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');            
//         });
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div className="form-item">
//                     <input type="text" name="name" 
//                         className="form-control" placeholder="Name"
//                         value={this.state.name} onChange={this.handleInputChange} required/>
//                 </div>
//                 <div className="form-item">
//                     <input type="email" name="email" 
//                         className="form-control" placeholder="Email"
//                         value={this.state.email} onChange={this.handleInputChange} required/>
//                 </div>
//                 <div className="form-item">
//                     <input type="password" name="password" 
//                         className="form-control" placeholder="Password"
//                         value={this.state.password} onChange={this.handleInputChange} required/>
//                 </div>
//                 <div className="form-item">
//                     <button type="submit" className="btn btn-block btn-primary" >Inscreva-se</button>
//                 </div>
//             </form>                    

//         );
//     }
// }

// export default Signup