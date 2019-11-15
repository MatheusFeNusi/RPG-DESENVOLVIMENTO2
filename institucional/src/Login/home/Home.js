import React, { Component } from 'react';
import './Home.css';
import Navbar from '../common/AppHeader';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col';
import ImagemLateral from '../img/homeAcesso.jpg'
class Home extends Component {
    render() {
        return (
            <div style={{backgroundImage: `url(${ImagemLateral})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', height: '615px'}}>
                <Navbar />
                

                    <Col md={4} style={{left: '410px', top: '100px'}}>
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

                    <Col md={4} style={{left: '410px', top: '220px'}}>
                        <input type="link" id="link" name="link"
                            className="form-control" placeholder="Inserir Link"
                            onChange={this.handleInputChange} required />
                        <br />
                        <br />
                        <div className="form-item">
                            <button onClick={this.logar} type="button" className="btn btn-block btn-primary">Usar Link</button>
                        </div>
                        <div className="form-item">
                            <button onClick={this.logar} type="button" className="btn btn-block btn-primary">Criar sala</button>
                        </div>
                    </Col>
                    <br />
            </div>
        )
    }
}

export default Home;