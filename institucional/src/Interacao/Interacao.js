import React from 'react';
import { InputTextDemo } from './ComponentPrime/Input.js';
import ImagemUsuario from '../meu-template/images/Ficha.png';
import { ProgressBar2 } from './ComponentPrime/ProgressBar2';
import { DropdownDemo } from './ComponentPrime/Dropdown';


import { InputTextareaDemo } from './ComponentPrime/InputArea';
import imgPart2 from '../meu-template/images/imagemInr.png'
import Personagem2 from '../meu-template/images/Personagem2.png';
import Personagem3 from '../meu-template/images/Personagem3.png';
import Personagem4 from '../meu-template/images/Personagem4.png';

import Ataque from '../meu-template/images/ataque.png';
import Defesa from '../meu-template/images/defesa.png';
import Inimigo from '../meu-template/images/inimigo.png';
import telaInteracao from '../meu-template/images/telaInteracao.svg'


export const Interacao = () => {
    return (
        <div style={{ backgroundImage: `url(${telaInteracao})` }}>
            <main>
                <header>
                </header>
                <section>
                    <img src={ImagemUsuario} style={{ width: '180px' }} />

                    <div style={{ marginTop: '-240px', minWidth: '100px' }}>
                        <div style={{ marginTop: '-100px', marginLeft: '200px', position: 'static', height: '-10px' }}><InputTextDemo name="F:" /></div>
                        <div style={{ marginLeft: '410px', marginTop: '-35px', position: 'static' }}><InputTextDemo name="H:" /></div>
                        <div style={{ marginLeft: '615px', marginTop: '-35px', position: 'static' }}><InputTextDemo name="R:" /></div>
                        <div style={{ marginLeft: '820px', marginTop: '-35px', position: 'static' }}><InputTextDemo name="A:" /></div>
                        <div style={{ marginLeft: '1020px', marginTop: '-35px', position: 'static' }}><InputTextDemo name="PdF:" /></div>
                        <hr />
                    </div>
                    <div id="progressbar" style={{ marginLeft: '200px' }}>
                        <ProgressBar2 name="PV:" />
                        <ProgressBar2 name="PM:" />

                    </div>
                    <div style={{ marginLeft: '1080px', marginTop: '-100px' }}>
                        < DropdownDemo holder="Vantagens" />
                        <br />
                        < DropdownDemo holder="Desvantagens" />
                    </div>
                    <hr />
                    <aside>
                        <InputTextareaDemo />
                        <div style={{ marginLeft: '900px', marginTop: '-120px' }}>
                            <img src={imgPart2} style={{ width: '180px', }} />
                        </div>
                        <hr />
                    </aside>
                    <form >
                        <div style={{ marginTop: '-290px' }}>
                            <img src={Personagem2} style={{ width: '180px' }} />
                            <img src={Personagem3} style={{ width: '180px', marginTop: '292px', marginLeft: '-174px' }} />
                            <img src={Personagem4} style={{ width: '180px', marginTop: '600px', marginLeft: '-174px' }} />
                        </div>
                        <div style={{ marginTop: '-430px', marginLeft: '200px' }}>
                            < ProgressBar2 />
                            < ProgressBar2 />
                        </div>
                        <div style={{ marginTop: '90px', marginLeft: '200px' }}>
                            < ProgressBar2 />
                            < ProgressBar2 />
                        </div>
                        <div style={{ marginTop: '50px', marginLeft: '200px' }}>
                            < ProgressBar2 />
                            < ProgressBar2 />
                        </div>
                        <div style={{ marginLeft: '530px' }}>
                            <img src={Ataque} style={{ marginTop: '-700px' }} />
                            <img src={Defesa} style={{ marginLeft: '-120px', marginTop: '-430px' }} />
                            <img src={Inimigo} style={{ width: '400px', marginLeft: '200px', marginTop: '-430px' }} />

                        </div>
                        <hr />
                    </form>
                </section>
            </main>
        </div>
    );
} 
