import React, { Component } from 'react';


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Mestre from './Imagens/mestre.png';
import Perso1 from './Imagens/personagem.png';
import Perso2 from './Imagens/personagem1.png';
import Perso3 from './Imagens/personagem4.png';
import Perso4 from './Imagens/personagem3.png';
import TeladeFundo from './Imagens/teladeFundo.svg';
import FichaMestre from './Imagens/fichaMestre.svg';
import Dados from './Imagens/dadoInteracao.svg'

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Image from 'react-bootstrap/Image';
import { InputTextarea } from 'primereact/inputtextarea';
import InputClass from './ComponentPrime/Input';

import DropdownClass from './ComponentPrime/Dropdown';
import DialogMensagem from './ComponentPrime/DialogMensagem.js';
import ProgressBar2 from './ComponentPrime/ProgressBar2.js';
import {Growl} from 'primereact/growl';
export default class Interacao extends Component {

    constructor() {
        super();
        this.state = {
            value: 'Dicas ou regras para o jogo',
            value2: 'Chat'
        };
        this.showSticky = this.showSticky.bind(this);
        
    }
    showSticky(e) {
        this.growl.show({severity: 'info', summary: 'Valor do dado', detail:'Número do dado: '+ e, sticky: true});
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }



    render() {

        const mestreImagem = <Image src={Mestre} />;
        const personagem1 = <Image src={Perso1} />;
        const personagem2 = <Image src={Perso2} />;
        const personagem3 = <Image src={Perso3} />;
        const personagem4 = <Image src={Perso4} />;
        const dado = <Image src={Dados} style={{ width: '110px' }} />

        const geraNumeroAleatorio = () => {
            let numero_aleatorio;
            do {
                numero_aleatorio = Math.random();
                numero_aleatorio = Math.floor(numero_aleatorio * 10);
            } while (numero_aleatorio > 6 || numero_aleatorio <= 0);
            this.showSticky(numero_aleatorio);

        }


        return (

            <Container style={{ backgroundImage: `url(${TeladeFundo})` }}>

                <Row md={12} style={{ backgroundImage: `url(${FichaMestre})` }}>
                    <InputTextarea style={{ width: '700px', height: '-80px' }} value={this.state.value2} onChange={(e) => this.setState({ value2: e.target.value })} rows={5} cols={30}></InputTextarea>
                    <div style={{ left: '-260px' }}>
                    <Growl ref={(el) => this.growl = el} />
                        <Button label="Ataque" tooltip="Rode o dado de ataque" onClick={geraNumeroAleatorio} className="p-button-raised p-button-secondary" style={{ marginLeft: '200px', height: '30px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                        {dado}
                        <br />
                        <Button label="Defesa" tooltip="Rode o dado de defesa" onClick={geraNumeroAleatorio} className="p-button-raised p-button-secondary" style={{ marginLeft: '50px', height: '30px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                        {dado}
                    </div>
                    <div className="content-section implementation" >
                        <Card header={mestreImagem} style={{ width: '115px', marginLeft: '1114px', marginTop: '-138px' }}>
                        </Card>
                    </div>
                </Row>

                <Row md={10} style={{ backgroundColor: 'rgba(118, 118, 118, 1)', marginTop: '10px' }} >
                    <div className="content-section implementation" >
                        <Card header={personagem1} style={{ width: '90px', height: '110px' }}>
                        </Card>
                    </div>
                    <ProgressBar2 />

                    <div style={{ marginLeft: '200px' }}><InputClass toolTiip="Força" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Habilidade" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Resistencia" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Armadura" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Poder de fogo" /></div>

                    <div style={{ marginLeft: '20px' }}>
                        <DialogMensagem />
                        <DropdownClass />
                    </div>

                </Row>

                <Row md={10} style={{ backgroundColor: 'rgba(118, 118, 118, 1)', marginTop: '10px' }}>
                    <div className="content-section implementation" >
                        <Card header={personagem2} style={{ width: '90px', height: '110px' }}>
                        </Card>
                    </div>


                    <ProgressBar2 />

                    <div style={{ marginLeft: '200px' }}><InputClass toolTiip="Força" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Habilidade" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Resistencia" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Armadura" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Poder de fogo" /></div>

                    <div style={{ marginLeft: '20px' }}>
                        <DialogMensagem />
                        <DropdownClass />
                    </div>

                </Row>

                <Row md={10} style={{ backgroundColor: 'rgba(118, 118, 118, 1)', marginTop: '10px' }}>
                    <div className="content-section implementation" >
                        <Card header={personagem3} style={{ width: '90px', height: '110px' }}>
                        </Card>
                    </div>
                    <ProgressBar2 />

                    <div style={{ marginLeft: '200px' }}><InputClass toolTiip="Força" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Habilidade" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Resistencia" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Armadura" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Poder de fogo" /></div>

                    <div style={{ marginLeft: '20px' }}>
                        <DialogMensagem />
                        <DropdownClass />
                    </div>

                </Row>

                <Row md={10} style={{ backgroundColor: 'rgba(118, 118, 118, 1)', marginTop: '10px' }}>
                    <div className="content-section implementation" >
                        <Card header={personagem4} style={{ width: '90px', height: '110px' }}>
                        </Card>
                    </div>
                    <ProgressBar2 />

                    <div style={{ marginLeft: '200px' }}><InputClass toolTiip="Força" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Habilidade" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Resistencia" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Armadura" /></div>
                    <div style={{ marginLeft: '10px' }}><InputClass toolTiip="Poder de fogo" /></div>

                    <div style={{ marginLeft: '20px' }}>
                        <DialogMensagem />
                        <DropdownClass />
                    </div>

                </Row>
                <Row md={2}>
                    <InputTextarea style={{ marginLeft: '1050px', marginTop: '-480px', height: '480px', width: '220px' }} value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} rows={5} cols={30}></InputTextarea>
                </Row>

            </Container>
        );
    }
} 
