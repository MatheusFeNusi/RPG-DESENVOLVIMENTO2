import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <form >

                <div className="form-item">
                <h1 className="home-title">                   3D%TERMINATION  </h1>
                        <h1 className="home-title">              </h1>
                        <h1 className="home-title">              </h1>

                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>

                            <h1 className="home-title">              </h1>
                            <h1 className="home-title">              </h1>
                            <h1 className="home-title">              </h1>
                            <h1 className="home-title">              </h1>
 
                    <input type="link" id="link" name="link"
                        className="form-control" placeholder="Inserir Link"
                        onChange={this.handleInputChange} required />
                </div>
                <div className="form-item">
                    <button onClick={this.logar} type="button"  className="btn btn-block btn-primary">Usar Link</button>
                </div>
                <div className="form-item">
                    <button onClick={this.logar} type="button"  className="btn btn-block btn-primary">Criar sala</button>
                </div>
            </form>
        )
    }
}

export default Home;