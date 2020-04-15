import React, { Component } from 'react';
import './Home.css';
import Navbar from '../common/AppHeader';
import Col from 'react-bootstrap/Col';
import ImagemLateral from '../img/homeAcesso.jpg';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor() {
        super();
        this.state = {

            personagem: ''
        }
        this.handleClick = this.onClickNome.bind(this)
    }
    handleInputChange = (event) => {


        console.log(event.target.value);

        const state = Object.assign({}, this.state);
        let field = event.target.id;

        console.log("state", state);

        // vai no state e procura a variavel que esta vindo
        state[field] = event.target.value;
        // pega o que foi feito e joga no status

        this.setState(state)

    }

    onClickNome = (e) => {
        console.log(e);
        console.log(this.state.personagem)


    }
    onClickSair = () => {
        window.close();
        console.log("Saiu ^^")
    }



    render() {
        console.log(this.state.personagem);


        return (
            <div style={{ backgroundImage: `url(${ImagemLateral})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '710px' }}>
                <Navbar />
                <div className="item" >
                    <h1 >Seja bem vindo!!!</h1> <br />

                </div>

                <div className="items">
                    <h2>Para acessar a sala de interação, por favor clique no botão abaixo</h2>
                </div>


                <Col md={4} style={{ left: '410px', top: '100px' }}>
                    <div className="form-item">
                        <h1 className="home-title"></h1>
                        <h1 className="home-title">              </h1>
                        <h1 className="home-title">              </h1>
                        <div style={{ height: '40px' }}>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                        </div>

                        <h1 className="home-title">              </h1>
                        <h1 className="home-title">              </h1>
                        <h1 className="home-title">              </h1>
                        <h1 className="home-title">              </h1>



                    </div>
                </Col>

                <Col md={4} style={{ left: '410px', top: '220px' }}>
                    {/*  <input type="link" id="personagem" name="link"
                            className="form-control" placeholder="Nome do personagem"
                            onChange={this.handleInputChange} required />
                        <br />
                        <br />
                        <div className="form-item">
                            <button onClick={this.onClickNome} type="button" className="btn btn-block btn-primary">Salvar nome personagem</button>
                        </div>*/}
                    <div className="form-item">


                        <Link to="/interacao"> <button type="button" className="btn btn-block btn-primary">Entrar sala</button></Link>
                        <br/>
                        <Link to="/"> <button type="button"  className="btn btn-block btn-primary">Voltar para o site</button></Link>
                    </div>

                </Col>
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default Home;