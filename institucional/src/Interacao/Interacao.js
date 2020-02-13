import React from 'react';
import './interacao.css';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Row';


import Mestre from './Imagens/mestre.png';
import Perso1 from './Imagens/personagem.jpg';
import Perso2 from './Imagens/personagem1.jpg';
import Perso3 from './Imagens/personagem4.jpg';
import Perso4 from './Imagens/personagem3.jpg';
import TeladeFundo from './Imagens/teladeFundo.svg';
import FichaMestre from './Imagens/fichaMestre.svg';
import Dados from './Imagens/dadoInteracao.svg';

import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Image from 'react-bootstrap/Image';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { ProgressBar } from 'primereact/progressbar';

import { Dropdown } from 'primereact/dropdown';


import { Growl } from 'primereact/growl';
import { Dialog } from 'primereact/dialog';
import { Link } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import uuid from 'uuid/v4';
import Chat from './Chat';
import { Sidebar } from 'primereact/sidebar';

export default class Interacao extends React.Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            idPessoal: uuid(),
            value: 'Observações: ',
            value2: 'Chat',
            informationRecieved: 'Você clicou no botão',
            serverURL: 'http://localhost:4000',

            magoPV: 10,
            magoPM: 5,
            arquePV: 10,
            arquePM: 5,
            vampiPV: 10,
            vampiPM: 5,
            anaoPV: 10,
            anaoPM: 5,

            magoForca: 0,
            magoHabilidade: 0,
            magoResistencia: 0,
            magoArmadura: 0,
            magoPdf: 0,

            arqueForca: 0,
            arqueHabilidade: 0,
            arqueResistencia: 0,
            arqueArmadura: 0,
            arquePdf: 0,

            vampiForca: 0,
            vampiHabilidade: 0,
            vampiResistencia: 0,
            vampiArmadura: 0,
            vampiPdf: 0,

            anaoForca: 0,
            anaoHabilidade: 0,
            anaoResistencia: 0,
            anaoArmadura: 0,
            anaoPdf: 0,
            
            magoHistoria: '',
            arqueHistoria: '',
            vampiHistoria: '',
            anaoHistoria: '',

            magoVantagem: null,
            magoDesvantagem: null,
            arqueVantagem: null,
            arqueDesvantagem: null,
            vampiVantagem: null,
            vampiDesvantagem: null,
            anaoVantagem: null,
            anaoDesvantagem: null,

            
                visibleInfo: false,
                visibleFullScreen: false,
                visibleSair: false,
                visible: false
            

        }

        this.showSticky = this.showSticky.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
        this.onClickInfo = this.onClickInfo.bind(this);
        this.onHideInfo = this.onHideInfo.bind(this);
        var armazenar = [];
        //this.setState({id: [this.state.idPessoal]});

        const socket = socketIOClient(this.state.serverURL);
        socket.on('infoEvent', info => {

            armazenar.push(info.idPessoal);
            this.setState(info);
            console.log(info.idPessoal)
            // this.setState(info => {
            //     const id = info.id.concat(info.idPessoal);
            //     console.log(id)
            //     return {
            //         id,
            //         idPessoal: '',
            //     };
            // });
            console.log("State id "+this.state.id)

            // if (armazenar.length > 5) {
            //     var ultimo = armazenar[armazenar.length - 1];
            //     if (ultimo === info.idPessoal) {
            //         this.setState({ visibleFullScreen: true });
            //         console.log("Antes do pop " + armazenar)
            //         armazenar.pop();
            //         window.close();
            //         console.log("Depois do POP " + armazenar)

            //         alert("Tese" + info.idPessoal);
            //     }
            // }
        });


        console.log(armazenar);
        console.log(this.state);
        socket.emit('infoEvent', this.state)

        //alert(myId
    }
    showInfo() {
        this.growl.show({ severity: 'info', summary: 'Informação', detail: 'Digite um valor de 1 a 100' });
    }

    showSticky(e) {
        this.growl.show({ severity: 'info', summary: 'Valor do dado', detail: 'Número do dado: ' + e, sticky: true });
    }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    onClick() {
        this.setState({ visible: true });
    }
    onClickInfo() {
        this.setState({ visibleInfo: true });
    }
    onClickSair() {

        this.setState({visibleSair: true});
    }
    // onClickInfo() {

    //     this.setState({visibleInfo: true});
    // }
    onHide() {
        this.setState({ visible: false });
    }
    onHideSair() {
        window.close();
        this.setState({ visibleSair: false });
    }
    onHideInfo() {
        this.setState({ visibleInfo: false });
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
        const socket = socketIOClient(this.state.serverURL)
        socket.emit('infoEvent', state);

    }
    handleChangeHistori(e) {
        this.setState({ magoHistoria: e.target.value });
    }

    render() {

        const vantagens = [
            { name: 'Aceleração (1 pto)', code: 'Aceleração' },
            { name: 'Adaptador (1 pto)', code: 'Adaptador' },
            { name: 'Aliado (1 pto)', code: 'Aliado' },
            { name: 'Alma Pura (0 pto)', code: 'Alma Pura' },
            { name: 'Alvos Múltiplos (2 pto)', code: 'Alvos Múltiplos' },
            { name: 'Ambidestro (0 pto)', code: 'Ambidestro' },
            { name: 'Anão (2 pto)', code: 'Anão' },
            { name: 'Aparencia Inofensiva (1 pto)', code: 'Aparencia Inofensiva' },
            { name: 'Arcano (4 pto)', code: 'Arcano' },
            { name: 'Area de Batalha (2 pto)', code: 'Area de Batalha' },
            { name: 'Arena (1 pto)', code: 'Arena' },
            { name: 'Arma Especial (1 pto)', code: 'Arma Especial' },
            { name: 'Armadura Extra poder de fogo (4 pto)', code: 'Armadura Extra poder de fogo' },
            { name: 'Armadura Extra força (3 pto)', code: 'Armadura Extra força' },
            { name: 'Armadura Extra magia (3 pto)', code: 'Armadura Extra magia' },
            { name: 'Armadura Extra corte (2 pto)', code: 'Armadura Extra corte' },
            { name: 'Armadura Extra perfuração (2 pto)', code: 'Armadura Extra perfuração' },
            { name: 'Armadura Extra contusão (2 pto)', code: 'Armadura Extra contusão' },
            { name: 'Armadura Extra explosão (2 pto)', code: 'Armadura Extra explosão' },
            { name: 'Armadura Extra calor/fogo (2 pto)', code: 'Armadura Extra calor/fogo' },
            { name: 'Armadura Extra frio/gelo (2 pto)', code: 'Armadura Extra frio/gelo' },
            { name: 'Armadura Extra eletrecidade (2 pto)', code: 'Armadura Extra eletrecidade' },
            { name: 'Armadura Extra Veneno (2 pto)', code: 'Armadura Extra Veneno' },
            { name: 'Armadura Extra vento/som (2 pto)', code: 'Armadura Extra vento/som' },
            { name: 'Armadura Extra quimicos (2 pto)', code: 'Armadura Extra quimicos' },
            { name: 'Armadura Extra acido (2 pto)', code: 'Armadura Extra acido' },
            { name: 'Armadura Extra agua (2 pto)', code: 'Armadura Extra agua' },
            { name: 'Armadura Extra liquidos (4 pto)', code: 'Armadura Extra liquidos' },
            { name: 'Artifice de vida (4 pto)', code: 'Artifice de vida' },
            { name: 'Ataque Especial (AE) (1 pto)', code: 'Ataque Especial' },
            { name: 'Ataque Especial area (AE +3 pto)', code: 'Ataque Especial area' },
            { name: 'Ataque Especial paralisante (AE +1 pto)', code: 'Ataque Especial paralisante' },
            { name: 'Ataque Especial preciso (AE +1 pto)', code: 'Ataque Especial preciso' },
            { name: 'Ataque Especial teleguiado (AE +1 pto)', code: 'Ataque Especial teleguiado' },
            { name: 'Ataque Especial lento (AE -1 pto)', code: 'Ataque Especial lento' },
            { name: 'Ataque Especial perto de morte (AE -2 pto)', code: 'Ataque Especial perto de morte' },
            { name: 'Ataque multiplo (1 pto)', code: 'Ataque multiplo' },
            { name: 'Ataque multiplo a distância (2 pto)', code: 'Ataque multiplo a distância' },
            { name: 'Bárbaro* (2 pto)', code: 'Bárbaro*' },
            { name: 'Bardo* (2 pto)', code: 'Bardo*' },
            { name: 'Boa fama (1 pto)', code: 'Boa fama' },
            { name: 'Bomba Relógio (0 pto)', code: 'Bomba Relógio' },
            { name: 'Bom Senso (1 pto)', code: 'Bom Senso' },
            { name: 'Caçador de Dragões* (4 pto)', code: 'Caçador de Dragões*' },
            { name: 'Canto do Canário (2-4 pto)', code: 'Canto do Canário' },
            { name: 'Captação (1 pto)', code: 'Captação' },
            { name: 'Carisma (1 pto)', code: 'Carisma' },
            { name: 'Cavaleiro* (3 pto)', code: 'Cavaleiro' },
            { name: 'Centauro* (2 pto)', code: 'Centauro*' },
            { name: 'Ceratop* (1 pto)', code: 'Ceratop*' },
            { name: 'Centauro élfico* (4 pto)', code: 'Centauro élfico' },
            { name: 'Clericato (2 pto)', code: 'Clericato' },
            { name: 'Comida, Sono e Ar Anulados (1 pto)', code: 'Comida, Sono e Ar Anulados' },
            { name: 'Controlar Máquinas (2 pto)', code: 'Controlar Máquinas' },
            { name: 'Construtor (0 pto)', code: 'Construtor' },
            { name: 'Coragem (0 pto)', code: 'Coragem' },
            { name: 'Corpo Corrosivo (2 pto)', code: 'Corpo Corrosivo' },
            { name: 'Corpo Arenoso (2 pto)', code: 'Corpo Arenoso' },
            { name: 'Corpo Flamejante ou Lava (3 pto)', code: 'Corpo Flamejante ou Lava' },
            { name: 'Corpo Gasoso (2 pto)', code: 'Corpo Gasoso' },
            { name: 'Corpo Líquido (3 pto)', code: 'Corpo Líquido' },
            { name: 'Corpo Metálico / Rochoso (5 pto)', code: 'Corpo Metálico / Rochoso' },
            { name: 'Dano Gigante (3 pto)', code: 'Dano Gigante' },
            { name: 'Deflexão (1 pto)', code: 'Deflexão' },
            { name: 'Domador de Feras (3 pto)', code: 'Domador de Feras' },
            { name: 'Dragoas Caçadoras* (1 pto)', code: 'Dragoas Caçadoras' },
            { name: 'Duro de Matar (0 pto)', code: 'Duro de Matar' },
            { name: 'Energia Extra (2 pto)', code: 'Energia Extra' },
            { name: 'Elfo* (2 pto)', code: 'Elfo*' },
            { name: 'Energia extra perto da morte (1 pto)', code: 'Energia extra perto da morte' },
            { name: 'Energia Vital (2 pto)', code: 'Energia Vital' },
            { name: 'Entender Tecnologia (1 pto)', code: 'Entender Tecnologia' },
            { name: 'Etherismo (1 pto)', code: 'Etherismo' },
            { name: 'Fada* (4 pto)', code: 'Fada*' },
            { name: 'Familiar (1 pto)', code: 'Familiar' },
            { name: 'Fantasma* (4 pto)', code: 'Fantasma*' },
            { name: 'Ferramentas (1 pto)', code: 'Ferramentas' },
            { name: 'Flecha Arcana (1 pto)', code: 'Flecha Arcana' },
            { name: 'Foco em Arma (0 pto)', code: 'Foco em Arma' },
            { name: 'Foco em Magia (0-1 pto)', code: 'Foco em Magia' },
            { name: 'Foco em Pericia (0 pto)', code: 'Foco em Pericia' },
            { name: 'Forma Alternativa (2-4 pto)', code: 'Forma Alternativa' },
            { name: 'Genialidade (-1 pto)', code: 'Genialidade' },
            { name: 'Gladiador* (1 pto)', code: 'Gladiador*' },
            { name: 'Gnomo* (1 pto)', code: 'Gnomo*' },
            { name: 'Golpe Furioso (2 pto)', code: 'Golpe Furioso' },
            { name: 'Halfling* (1 pto)', code: 'Halfling*' },
            { name: 'Hobgoblin* (1 pto)', code: 'Hobgoblin*' },
            { name: 'Homúnculo* (1 pto)', code: 'Homúnculo*' },
            { name: 'Idade Imutável (0 pto)', code: 'Idade Imutável' },
            { name: 'Imortal* (1 pto)', code: 'Imortal*' },
            { name: 'Implantes (variável)', code: 'Implantes' },
            { name: 'Imunidade (1 pto)', code: 'Imunidade' },
            { name: 'Iniciativa Aprimorada (1 pto)', code: 'Iniciativa Aprimorada' },
            { name: 'Inimigo Favorito (1 pto)', code: 'Inimigo Favorito' },
            { name: 'Intangível (4 pto)', code: 'Intangível' },
            { name: 'Invisibilidade (2 pto)', code: 'Invisibilidade' },
            { name: 'Lança-Arpão (0 pto)', code: 'Lança-Arpão' },
            { name: 'Levitação (2 pto)', code: 'Levitação' },
            { name: 'Licantropo* (0 pto)', code: 'Licantropo*' },
            { name: 'Lich* (especial)', code: 'Lich*' },
            { name: 'Ligação Natural (1 pto)', code: 'Ligação Natural' },
            { name: 'Lince (1-2 pto)', code: 'Lince' },
            { name: 'Longevidade (0 pto)', code: 'Longevidade' },
            { name: 'Maquina (2 pto)', code: 'Maquina' },
            { name: 'Magia Silenciosa (1 pto)', code: 'Magia Silenciosa' },
            { name: 'Mago Especialista* (0 pto)', code: 'ana' },
            { name: 'Marujo* (0 pto)', code: 'Marujo*' },
            { name: 'Mascote (0 pto)', code: 'Mascote' },
            { name: 'Meio Dragão* (12 pto)', code: 'Meio Dragão*' },
            { name: 'Meio Elfo* (1 pto)', code: 'Meio Elfo *' },
            { name: 'Meio Metaliano* (2 pto)', code: 'Meio Metaliano*' },
            { name: 'Membro Coletor (0 pto)', code: 'Membro Coletor' },
            { name: 'Membros Elásticos (1 pto)', code: 'Membros Elásticos' },
            { name: 'Membros extras (3 pto)', code: 'Membros extras' },
            { name: 'Memoria Expandida (2 pto)', code: 'Memoria Expandida' },
            { name: 'Mente Repartilhada (2 pto)', code: 'Mente Repartilhada' },
            { name: 'Mestre (1 pto)', code: 'Mestre' },
            { name: 'Necromante* (1 pto)', code: 'Necromante*' },
            { name: 'Ninja* (3 pto)', code: 'Ninja*' },
            { name: 'Modelagem (2 pto)', code: 'Modelagem' },
            { name: 'Mutilação (0-1 pto)', code: 'Mutilação' },
            { name: 'Ocultismo (2 pto)', code: 'Ocultismo' },
            { name: 'Oráculo (1 pto)', code: 'Oráculo' },
            { name: 'Orda (0 pto)', code: 'Orda' },
            { name: 'Paralisia (1 pto)', code: 'Paralisia' },
            { name: 'Parceiro (1-2 pto)', code: 'Parceiro' },
            { name: 'Patrono (2 pto)', code: 'Patrono' },
            { name: 'Patrulheiro Selvagem (3 pto)', code: 'Patrulheiro Selvagem' },
            { name: 'Perito (1 pto)', code: 'Perito' },
            { name: 'Piratas (0-4 pto)', code: 'Piratas' },
            { name: 'Poder Oculto (1-5 pto)', code: 'Poder Oculto' },
            { name: 'Pontos de Magia Extra (1 pto)', code: 'Pontos de Magia Extra' },
            { name: 'Pontos de Vida Extra (1 pto)', code: 'Pontos de Vida Extra' },
            { name: 'Possessão (2 pto)', code: 'Possessão' },
            { name: 'Pulso Eletromagnético (1 pto)', code: 'Pulso Eletromagnético' },
            { name: 'Predestinado (1 pto)', code: 'Predestinado' },
            { name: 'Ptero* (0 pto)', code: 'Ptero*' },
            { name: 'Redenção (1 pto)', code: 'Redenção' },
            { name: 'Reflexão (2 pto)', code: 'Reflexão' },
            { name: 'Regeneração (3 pto)', code: 'Regeneração' },
            { name: 'Resistência a magia (1 pto)', code: 'Resistência a magia' },
            { name: 'Riqueza (3 pto)', code: 'Riqueza' },
            { name: 'Salto (1 pto)', code: 'Salto' },
            { name: 'Samurai (4 pto)', code: 'Samurai' },
            { name: 'Secundar (2 pto)', code: 'Secundar' },
            { name: 'Sem Armas (0 pto)', code: 'Sem Armas' },
            { name: 'Sentido especial: Audição aguçada (1 pto)', code: 'Sentido especial: Audição aguçada' },
            { name: 'Sentido especial: Faro Aguçado (1 pto)', code: 'Sentido especial: Faro Aguçado' },
            { name: 'Sentido especial: Infravisão (1 pto)', code: 'Sentido especial: Infravisão' },
            { name: 'Sentido especial: Radar (1 pto)', code: 'Sentido especial: Radar' },
            { name: 'Sentido especial: Ver o invisel (1 pto)', code: 'Sentido especial: Ver o invisel' },
            { name: 'Sentido especial: Visão aguçada (1 pto)', code: 'Sentido especial: Visão aguçada' },
            { name: 'Sentido especial: Visão de raio X (1 pto)', code: 'Sentido especial: Visão de raio x' },
            { name: 'Sentidos especiais: Todos (2 pto)', code: 'Sentidos especiais: Todos' },
            { name: 'Separação (clones) (2 pto)', code: 'Separação (clones)' },
            { name: 'Sexto Sentido (1-2 pto)', code: 'Sexto Sentido' },
            { name: 'Sorte Exagerada (1 pto)', code: 'Sorte Exagerada' },
            { name: 'Status (0-1 pto)', code: 'Status' },
            { name: 'Superpoder (focus)', code: 'Superpoder' },
            { name: 'Super Escudo (1 pto)', code: 'Super Escudo' },
            { name: 'Super Força (1 pto)', code: 'Super Força' },
            { name: 'Tauro (0 pto)', code: 'Tauro' },
            { name: 'Telecinese (2 pto)', code: 'Telecinese' },
            { name: 'Telepatia (2 pto)', code: 'Telepatia' },
            { name: 'Teleporte (2 pto)', code: 'Teleporte' },
            { name: 'Terreno (1 pto)', code: 'Terreno' },
            { name: 'Tiro Contínuo (0 pto)', code: 'Tiro Contínuo' },
            { name: 'Tiro Carregavel (2 pto)', code: 'Tiro Carregavel' },
            { name: 'Tiro Multiplo (2 pto)', code: 'Tiro Multiplo' },
            { name: 'Toque de energia (1 pto)', code: 'Toque de energia' },
            { name: 'Torcida (1 pto)', code: 'Torcida' },
            { name: 'Transfigurar (2-3 pto)', code: 'Transfigurar' },
            { name: 'Transporte (0 pto)', code: 'Transporte' },
            { name: 'Troglodita* (3 pto)', code: 'Troglodita*' },
            { name: 'Vácuo (0 pto)', code: 'Vácuo' },
            { name: 'Velocis* (0 pto)', code: 'Velocis*' },
            { name: 'Wu Jen* (0 pto)', code: 'Wu Jen*' }
        ];
        const desvantagens = [
            { name: 'Alergia (-1 pto)', code: 'Alergia' },
            { name: 'Acromatopsia (-1 pto)', code: 'Acromatopsia' },
            { name: 'Alimentação Bizarra (-1 pto)', code: 'Alimentação Bizarra' },
            { name: 'Ambiente Especial (-1 pto)', code: 'Ambiente Especial' },
            { name: 'Armadura Extra dor (-2 pto)', code: 'Armadura Extra dor' },
            { name: 'Assombrado (-2 pto)', code: 'Assombrado' },
            { name: 'Assustar Animais (-0 pto)', code: 'Assustar Animais' },
            { name: 'Aura Má (-0 pto)', code: 'Aura Má' },
            { name: 'Bateria (-1 pto)', code: 'Bateria' },
            { name: 'Beijo (-2 pto)', code: 'Beijo' },
            { name: 'Carniçal (+1 pto)', code: 'Carniçal' },
            { name: 'Cegueira (-3 pto)', code: 'Cegueira' },
            { name: 'Código de Honra: Area (-1 pto)', code: 'Código de Honra: Area' },
            { name: 'Código de Honra: Assimov (-1 pto)', code: 'Código de Honra: Assimov' },
            { name: 'Código de Honra: Caçador (-1 pto)', code: 'Código de Honra: Caçador' },
            { name: 'Código de Honra: Cavaleiros (-1 pto)', code: 'Código de Honra: Cavaleiros' },
            { name: 'Código de Honra: Combate (-1 pto)', code: 'Código de Honra: Combate' },
            { name: 'Código de Honra: Criador (-1 pto)', code: 'Código de Honra: Criador	' },
            { name: 'Código de Honra: Ecologia (-1 pto)', code: 'Código de Honra: Ecologia' },
            { name: 'Código de Honra: Derrota (-1 pto)', code: 'Código de Honra: Derrota' },
            { name: 'Código de Honra: Guardião (-1 pto)', code: 'Código de Honra: Guardião' },
            { name: 'Código de Honra: Heróis (-1 pto)', code: 'Código de Honra: Heróis' },
            { name: 'Código de Honra: Honestidade (-1 pto)', code: 'Código de Honra: Honestidade' },
            { name: 'Código de Honra: Pacifismo (-1 pto)', code: 'Código de Honra: Pacifismo' },
            { name: 'Código de Honra: Piratas (-1 pto)', code: 'Código de Honra: Piratas' },
            { name: 'Código de Honra: Retribuição (-1 pto)', code: 'Código de Honra: Retribuição' },
            { name: 'Código de Honra: Sacerdote (-1 pto)', code: 'Código de Honra: Sacerdote' },
            { name: 'Código de Honra: Todos (-4 pto)', code: 'Código de Honra: Todos' },
            { name: 'Convite (-1 pto)', code: 'Convite' },
            { name: 'Criança (-2 pto)', code: 'Criança' },
            { name: 'Curto Circuito (-2 pto)', code: 'Curto Circuito' },
            { name: 'Densidade Ampliada (-1 pto)', code: 'Densidade Ampliada' },
            { name: 'Dependência (-2 pto)', code: 'Dependência' },
            { name: 'Descontrole (-2 pto)', code: 'Descontrole' },
            { name: 'Devoção (-2 pto)', code: 'Devoção' },
            { name: 'Efeito Colateral (-1 pto)', code: 'Efeito Colateral' },
            { name: 'Esqueleto* (-2 pto)', code: 'Esqueleto*' },
            { name: 'Fetiche (-1 pto)', code: 'Fetiche' },
            { name: 'Fraqueza (-2 ou -3 pto)', code: 'Anão' },
            { name: 'Furia (-1 pto)', code: 'Furia' },
            { name: 'Goblin* (-2 pto)', code: 'Goblin*' },
            { name: 'Grilhão (-1 pto)', code: 'Grilhão' },
            { name: 'Guia (-1 pto)', code: 'Guia' },
            { name: 'Inculto (-1 pto)', code: 'Inculto' },
            { name: 'Inimigo (-1 ou -2 pto)', code: 'Inimigo' },
            { name: 'Insano: Cléptomaniaco (-1 pto)', code: 'Insano: Cléptomaniaco' },
            { name: 'Insano: Compulsivo (-1 pto)', code: 'Insano: Compulsivo' },
            { name: 'Insano: Covardia (-2 pto)', code: 'Insano: Covardia' },
            { name: 'Insano: Demente (-1 pto)', code: 'Insano: Demente' },
            { name: 'Insano: Depressivo (-2 pto)', code: 'Insano: Depressivo' },
            { name: 'Insano: Dupla Personalidade (0 pto)', code: 'Insano: Dupla Personalidade' },
            { name: 'Insano: Distraido (0 pto)', code: 'Insano: Distraido' },
            { name: 'Insano: Fantasia (-1 pto)', code: 'Insano: Fantasia' },
            { name: 'Insano: Fobia (-1 a -3 pto)', code: 'Insano: Fobia' },
            { name: 'Insano: Furioso (-1 pto)', code: 'Insano: Furioso' },
            { name: 'Insano: Ganância (-1 pto)', code: 'Insano: Ganância' },
            { name: 'Insano: Histérico (-2 pto)', code: 'Insano: Histérico' },
            { name: 'Insano: Homicida (-2 pto)', code: 'Insano: Homicida' },
            { name: 'Insano: Luxuria (-1 pto)', code: 'Insano: Luxuria' },
            { name: 'Insano: Megalomaniaco (-1 pto)', code: 'Insano: Megalomaniaco' },
            { name: 'Insano: Mentiroso (-1 pto)', code: 'Insano: Mentiroso' },
            { name: 'Insano: Obsessivo(-2 pto)', code: 'Insano: Obsessivo' },
            { name: 'Insano: Paranóico (-1 pto)', code: 'Insano: Paranóico' },
            { name: 'Insano: Sonambulo (-1 pto)', code: 'Insano: Sonambulo' },
            { name: 'Insano: Suicida (0 pto)', code: 'Insano: Suicida' },
            { name: 'Insano: Vaidade (-1 pto)', code: 'Insano: Vaidade' },
            { name: 'Interferência (-1 pto)', code: 'Interferência' },
            { name: 'Má Fama (-1 pto)', code: 'Má Fama' },
            { name: 'Mácula do Apodrecimento (-1 pto)', code: 'Mácula do Apodrecimento' },
            { name: 'Maldição: suave	 (-1 pto)', code: 'Maldição: suave' },
            { name: 'Maldição: grave (-2 pto)', code: 'Maldição: grave' },
            { name: 'Manutenção (-1 pto)', code: 'Manutenção' },
            { name: 'Meio - orc* (-1 pto)', code: 'Meio - orc*' },
            { name: 'Modelo Especial (-1 pto)', code: 'Modelo Especial' },
            { name: 'Monstruoso (-1 pto)', code: 'Monstruoso' },
            { name: 'Mudo (-2 pto)', code: 'Mudo' },
            { name: 'Morto - vivo* (-2 pto)', code: 'Morto - vivo*' },
            { name: 'Munição Limitada (-1 pto)', code: 'Munição Limitada' },
            { name: 'Ponto Fraco (-1 pto)', code: 'Ponto Fraco' },
            { name: 'Pontos de Morte (-1 pto)', code: 'Pontos de Morte' },
            { name: 'Prata ou Ferro Frio(-1 pto)', code: 'Prata ou Ferro Frio' },
            { name: 'Premonição (-1 ou -3 pto)', code: 'Anão' },
            { name: 'Procurado (-1 pto)', code: 'Procurado' },
            { name: 'Protegido Indefeso (-1 pto)', code: 'Protegido Indefeso' },
            { name: 'Psicopatia (-5 pto)', code: 'Psicopatia' },
            { name: 'Recarga (-1 ou -2 pto)', code: 'Recarga' },
            { name: 'Reflexo Sombrio (-1 pto)', code: 'Reflexo Sombrio' },
            { name: 'Restrição a magia: Incomum (-1 pto)', code: 'Restrição a magia: Incomum' },
            { name: 'Restrição a magia: Comum (-2 pto)', code: 'Restrição a magia: Comum' },
            { name: 'Restrição a magia: Muito Comum (-3 pto)', code: 'Restrição a magia: Muito Comum' },
            { name: 'Restrição a superpoder: Incomum (-1 pto)', code: 'Restrição a superpoder: Incomum' },
            { name: 'Restrição a superpoder: Comum (-2 pto)', code: 'Restrição a superpoder: Comum' },
            { name: 'Restrição a superpoder: Muito Comum (-3 pto)', code: 'Restrição a superpoder: Muito Comum' },
            { name: 'Segredo (-1 pto)', code: 'Segredo' },
            { name: 'Sem Iniciativa (-1 pto)', code: 'Sem Iniciativa' },
            { name: 'Sem Reflexo (-1 pto)', code: 'Sem Reflexo' },
            { name: 'Sensibilidade à Luz (-1 pto)', code: 'Sensibilidade à Luz' },
            { name: 'Sensibilidade ao Sol (-1 pto)', code: 'Sensibilidade ao Sol' },
            { name: 'Símbolos Sagrados (-2 pto)', code: 'Símbolos Sagrados' },
            { name: 'Sinal (-1 pto)', code: 'Sinal' },
            { name: 'Sucetivel a Hipnose (-1 pto)', code: 'Sucetivel a Hipnose' },
            { name: 'Sucetivel a Venenos (-2 pto)', code: 'Sucetivel a Venenos' },
            { name: 'Surdo (-3 pto)', code: 'Surdo' },
            { name: 'Terremoto Desfavoravel (-1 pto)', code: 'Terremoto Desfavoravel' },
            { name: 'Torpor (-1 ou -2 pto)', code: 'Torpor' },
            { name: 'Traição (-1 pto)', code: 'Traição' },
            { name: 'Transformação Descontrolada (-1 pto)', code: 'Transformação Descontrolada' },
            { name: 'Tumba (-1 pto)', code: 'Tumba' },
            { name: 'Vinculo (-1 pto)', code: 'Vinculo' },
            { name: 'Visão deficiente (0 ou -1 pto)', code: 'Visão deficiente' },
            { name: 'Vampiro* (-2 pto)', code: 'Vampiro*' },
            { name: 'Vulnerabilidade poder de fogo (-3 pto)', code: 'Vulnerabilidade poder de fogo' },
            { name: 'Vulnerabilidade força (-2 pto)', code: 'Vulnerabilidade força' },
            { name: 'Vulnerabilidade magia (-2 pto)', code: 'Vulnerabilidade magia' },
            { name: 'Vulnerabilidade corte (-1 pto)', code: 'Vulnerabilidade corte' },
            { name: 'Vulnerabilidade perfuração (-1 pto)', code: 'Vulnerabilidade perfuração' },
            { name: 'Vulnerabilidade contusão (-1 pto)', code: 'Vulnerabilidade contusão' },
            { name: 'Vulnerabilidade explosão (-1 pto)', code: 'Vulnerabilidade explosão' },
            { name: 'Vulnerabilidade calor/fogo (-1 pto)', code: 'Vulnerabilidade calor/fogo' },
            { name: 'Vulnerabilidade frio/gelo (-1 pto)', code: 'Vulnerabilidade frio/gelo' },
            { name: 'Vulnerabilidade luz (-1 pto)', code: 'Vulnerabilidade luz' },
            { name: 'Vulnerabilidade eletricidade (-1 pto)', code: 'Vulnerabilidade eletricidade' },
            { name: 'Vulnerabilidade vento/som (-1 pto)', code: 'AnãVulnerabilidade vento/som' },
            { name: 'Vulnerabilidade quimico (-1 pto)', code: 'Vulnerabilidade quimico' },
            { name: 'Vulnerabilidade agua (-1 pto)', code: 'Vulnerabilidade agua' },
            { name: 'Vulnerabilidade acido (-1 pto)', code: 'Vulnerabilidade acido' },
            { name: 'Vulnerabilidade venenos (-1 pto)', code: 'Vulnerabilidade venenos' },
            { name: 'Zumbi* (-2 pto)', code: 'Zumbi*' }

        ];

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
        const footerSairSala = (
            <div>
                <Link to="/acesso"> <Button label="Sim" icon="pi pi-check"  /></Link>
                <Button label="Não" icon="pi pi-times" onClick={(e) => this.setState({ visibleSair: false })} className="p-button-secondary" />
            </div>
        );
        const footerHistoria = (
            <div>
                
                <Button label="Voltar" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary" />
            </div>
        );
        const footerInfo = (
            <div>
               
                <Button label="No" icon="pi pi-times" onClick={this.onHideInfo} className="p-button-secondary" />
            </div>
        );

        return (


            <Container className="container" style={{ backgroundImage: `url(${TeladeFundo})`, marginLeft: '10px' }}>
                
                <Sidebar visible={this.state.visibleFullScreen} closeOnEscape={false} fullScreen={true} baseZIndex={1000000} onHide={(e) => this.setState({ visibleFullScreen: false })}>
                    <h1>Olá infelizmente, o numero de usuario foi excedido, aguarde um usuario desconectar ou saia da sala </h1>
                    <Link to="/acesso"> <Button type="button" label="Sair da sala" className="p-button-secondary" /></Link>
                </Sidebar>

                <Row md={12} style={{ backgroundImage: `url(${FichaMestre})` }}>
                    <div className="content-section implementation"  >
                        <Dialog header="Sair da sala" visible={this.state.visibleSair} style={{ width: '50vw' }} footer={footerSairSala} onHide={this.onHide} maximizable>
                            <p>Voce tem certeza que deseja sair da sala de Interação?</p>
                        </Dialog>

                        <Button icon="pi pi-fw pi-power-off" tooltip="Sair da sala" style={{ height: '142px', left: '1201px', backgroundColor: 'black' }}  onClick={(e) => this.setState({ visibleSair: true })} />
                    </div>
                    <div style={{ marginLeft: '-32px', width: '700px', height: '100px' }}>
                        <Chat />
                    </div>

                    <div style={{ marginLeft: '-20px' }}>
                        <Growl ref={(el) => this.growl = el} />
                        <Button label="Ataque" tooltip="Rode o dado de ataque" onClick={geraNumeroAleatorio} className="p-button-raised p-button-secondary" style={{ marginLeft: '200px', height: '30px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                        {dado}
                        <br />
                        <Button label="Defesa" tooltip="Rode o dado de defesa" onClick={geraNumeroAleatorio} className="p-button-raised p-button-secondary" style={{ marginLeft: '50px', height: '30px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                        {dado}
                    </div>
                    <div id="vouTestar" style={{marginLeft: '-9px', marginTop: '110px'}}>
                    <Dialog header="Descrição de vantagens e desvantagens" visible={this.state.visibleInfo} footer={footerInfo} style={{width: '50vw'}}  onHide={this.onHideInfo} maximizable>

                        <a href="http://www.geocities.ws/jogue3dt/12.html#bar" target="_blank">Descrição vantagens</a>
                        <hr />
                        <a href="http://www.geocities.ws/jogue3dt/14.html" target="_blank">Descrição desvantagens</a>

                    </Dialog>
                        <Button icon="pi pi-info" tooltip="Descrição vantagens e desvantagens" onClick={this.onClickInfo}/>
                        </div>
                    <div className="content-section implementation" >
                        <Card header={mestreImagem} style={{ width: '115px', marginLeft: '1090px', marginTop: '-138px' }}>
                        </Card>
                    </div>

                </Row>

                <Row md={10} style={{ backgroundColor: 'rgba(118, 118, 118, 1)', marginTop: '10px' }} >
                    <div className="content-section implementation" >
                        <Card header={personagem1} style={{ width: '90px', height: '110px' }}>
                        </Card>
                    </div>
                    <div id="progress-bar-mago">
                        <br />
                        <InputText type="number" style={{ width: '57px', height: '26px' }} value={this.state.magoPV > 100 || this.state.magoPV < 0 ? 100 + this.showInfo() : this.state.magoPV} id="magoPV" tooltip="Digite o ponto de vida" placeholder="PV" onChange={(event) => this.handleInputChange(event)} />
                        <div style={{ width: '200px', marginTop: '-26px', marginLeft: '59px' }}>
                            <ProgressBar value={this.state.magoPV > 100 || this.state.magoPV < 0 ? 0 : this.state.magoPV} displayValueTemplate={this.props.displayValueTemplate}></ProgressBar>
                        </div>
                        <br />
                        <InputText type="number" style={{ width: '57px', height: '26px' }} value={this.state.magoPM > 100 || this.state.magoPM < 0 ? 100 + this.showInfo() : this.state.magoPM} id="magoPM" tooltip="Digite o ponto de mana" placeholder="PM" onChange={(event) => this.handleInputChange(event)} />
                        <div style={{ width: '200px', marginTop: '-26px', marginLeft: '59px' }}>
                            <ProgressBar value={this.state.magoPM > 100 || this.state.magoPM < 0 ? 0 : this.state.magoPM} displayValueTemplate={this.props.displayValueTemplate}></ProgressBar>
                        </div>
                    </div>
                       
                    <div style={{ marginLeft: '150px' }}>
                        <InputText tooltip="Força" type="number" placeholder="F" onChange={(event) => this.handleInputChange(event)}
                            id="magoForca" value={this.state.magoForca} style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Habilidade" type="number" placeholder="H" onChange={(event) => this.handleInputChange(event)}
                            value={this.state.magoHabilidade} id="magoHabilidade"  style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Resistência" type="number" placeholder="R" onChange={(event) => this.handleInputChange(event)}
                            id="magoResistencia" value={this.state.magoResistencia}  style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Armadura" type="number" placeholder="A" onChange={(event) => this.handleInputChange(event)}
                            id="magoArmadura" value={this.state.magoArmadura}  style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Poder de fogo" type="number" placeholder="PF" onChange={(event) => this.handleInputChange(event)}
                            id="magoPdf" value={this.state.magoPdf}  style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div id="historiaMago" style={{ marginLeft: '70px' }}>

                        <Dialog header="Você quer uma história?" visible={this.state.visible} footer={footerHistoria}
                            style={{ width: '50vw' }} onHide={this.onHide} maximizable>
                            <InputText style={{ width: '600px', height: '-70px' }} onChange={(event) => this.handleInputChange(event)}
                                placeholder="Digite a hitória do seu personagem"
                                value={this.state.magoHistoria, console.log("Mago " + this.state.magoHistoria)} id="magoHistoria" rows={5} cols={30} />

                        </Dialog>

                        <Button label="Mostrar sua história"  id="mago" icon="pi pi-external-link" onClick={this.onClick} style={{ backgroundColor: 'rgba(196, 196, 196, 1)', color: 'black' }} />
                        <div id="dropdown1">
                            <Dropdown value={this.state.magoVantagem} id="magoVantagem" options={vantagens} onChange={(event) => this.handleInputChange(event)} placeholder="Vantagens" optionLabel="name" filter={true} />
                            <br />
                            <Dropdown value={this.state.magoDesvantagem} id="magoDesvantagem" options={desvantagens} onChange={(event) => this.handleInputChange(event)} placeholder="Desvantagens" optionLabel="name" filter={true} />
                        </div>


                    </div>

                </Row>

                <Row md={10} style={{ backgroundColor: 'rgba(118, 118, 118, 1)', marginTop: '10px' }}>
                    <div className="content-section implementation" >
                        <Card header={personagem2} style={{ width: '90px', height: '110px' }}>
                        </Card>
                    </div>

                    <div id="progress-bar-arque">
                        <br />
                        <InputText type="number" style={{ width: '57px', height: '26px' }} value={this.state.arquePV > 100 || this.state.arquePV < 0 ? 100 + this.showInfo() : this.state.arquePV} id="arquePV" tooltip="Digite o ponto de vida" placeholder="PV" onChange={(event) => this.handleInputChange(event)} />
                        <div style={{ width: '200px', marginTop: '-26px', marginLeft: '59px' }}>
                            <ProgressBar value={this.state.arquePV > 100 || this.state.arquePV < 0 ? 0 : this.state.arquePV} displayValueTemplate={this.props.displayValueTemplate}></ProgressBar>
                        </div>
                        <br />
                        <InputText type="number" style={{ width: '57px', height: '26px' }} value={this.state.arquePM > 100 || this.state.arquePM < 0 ? 100 + this.showInfo() : this.state.arquePM} id="arquePM" tooltip="Digite o ponto de mana" placeholder="PM" onChange={(event) => this.handleInputChange(event)} />
                        <div style={{ width: '200px', marginTop: '-26px', marginLeft: '59px' }}>
                            <ProgressBar value={this.state.arquePM > 100 || this.state.arquePM < 0 ? 0 : this.state.arquePM} displayValueTemplate={this.props.displayValueTemplate}></ProgressBar>
                        </div>
                    </div>

                    <div style={{ marginLeft: '150px' }}>
                        <InputText tooltip="Força" type="number" placeholder="F" onChange={(event) => this.handleInputChange(event)}
                            id="arqueForca" value={this.state.arqueForca} style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Habilidade" type="number" placeholder="H" onChange={(event) => this.handleInputChange(event)}
                            value={this.state.arqueHabilidade} id="arqueHabilidade" style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Resistência" type="number" placeholder="R" onChange={(event) => this.handleInputChange(event)}
                            id="arqueResistencia" value={this.state.arqueResistencia} style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Armadura" type="number" placeholder="A" onChange={(event) => this.handleInputChange(event)}
                            id="arqueArmadura" value={this.state.arqueArmadura} style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Poder de fogo" type="number" placeholder="PF" onChange={(event) => this.handleInputChange(event)}
                            id="arquePdf" value={this.state.arquePdf} style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div id="historiaArque" style={{ marginLeft: '70px' }}>
                        <Dialog header="Você quer uma história?"  visible={this.state.visible} footer={footerHistoria}
                            style={{ width: '50vw' }} onHide={this.onHide} maximizable>
                            <InputText style={{ width: '600px', height: '-70px' }} id="arqueHistoria" onChange={(event) => this.handleInputChange(event)}
                                placeholder="Digite a hitória do seu personagem"
                                value={this.state.arqueHistoria,console.log("Arque " + this.state.arqueHistoria)} rows={5} cols={30} />

                        </Dialog>
                        <Button label="Mostrar sua história" id="arque" icon="pi pi-external-link" onClick={this.onClick} style={{ backgroundColor: 'rgba(196, 196, 196, 1)', color: 'black' }} />
                        <div id="dropdown2">
                            <Dropdown value={this.state.arqueVantagem} id="arqueVantagem" options={vantagens} onChange={(event) => this.handleInputChange(event)} placeholder="Vantagens" optionLabel="name" filter={true} />
                            <br />
                            <Dropdown value={this.state.arqueDesvantagem} id="arqueDesvantagem" options={desvantagens} onChange={(event) => this.handleInputChange(event)} placeholder="Desvantagens" optionLabel="name" filter={true} />

                        </div>
                    </div>

                </Row>

                <Row md={10} style={{ backgroundColor: 'rgba(118, 118, 118, 1)', marginTop: '10px' }}>
                    <div className="content-section implementation" >
                        <Card header={personagem3} style={{ width: '90px', height: '110px' }}>
                        </Card>
                    </div>
                    <div id="progress-bar-vampi">
                        <br />
                        <InputText type="number" style={{ width: '57px', height: '26px' }} value={this.state.vampiPV > 100 || this.state.vampiPV < 0 ? 100 + this.showInfo() : this.state.vampiPV} id="vampiPV" tooltip="Digite o ponto de vida" placeholder="PV" onChange={(event) => this.handleInputChange(event)} />
                        <div style={{ width: '200px', marginTop: '-26px', marginLeft: '59px' }}>
                            <ProgressBar value={this.state.vampiPV > 100 || this.state.vampiPV < 0 ? 0 : this.state.vampiPV} displayValueTemplate={this.props.displayValueTemplate}></ProgressBar>
                        </div>
                        <br />
                        <InputText type="number" style={{ width: '57px', height: '26px' }} value={this.state.vampiPM > 100 || this.state.vampiPM < 0 ? 100 + this.showInfo() : this.state.vampiPM} id="vampiPM" tooltip="Digite o ponto de mana" placeholder="PM" onChange={(event) => this.handleInputChange(event)} />
                        <div style={{ width: '200px', marginTop: '-26px', marginLeft: '59px' }}>
                            <ProgressBar value={this.state.vampiPM > 100 || this.state.vampiPM < 0 ? 0 : this.state.vampiPM} displayValueTemplate={this.props.displayValueTemplate}></ProgressBar>
                        </div>
                    </div>

                    <div style={{ marginLeft: '150px' }}>
                        <InputText tooltip="Força" type="number" placeholder="F" onChange={(event) => this.handleInputChange(event)}
                            id="vampiForca" value={this.state.vampiForca} style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Habilidade" type="number" placeholder="H" onChange={(event) => this.handleInputChange(event)}
                            value={this.state.vampiHabilidade} id="vampiHabilidade" style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Resistência" type="number" placeholder="R" onChange={(event) => this.handleInputChange(event)}
                            id="vampiResistencia" value={this.state.vampiResistencia} style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Armadura" type="number" placeholder="A" onChange={(event) => this.handleInputChange(event)}
                            id="vampiArmadura" value={this.state.vampiArmadura} style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Poder de fogo" type="number" placeholder="PF" onChange={(event) => this.handleInputChange(event)}
                            id="vampiPdf" value={this.state.vampiPdf} style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div id="historiaVampi" style={{ marginLeft: '70px' }}>

                        <Dialog header="Você quer uma história?" id="vampiHistoria" visible={this.state.visible}
                            footer={footerHistoria} style={{ width: '50vw' }} onHide={this.onHide} maximizable>
                            <InputTextarea style={{ width: '600px', height: '-70px' }} onChange={(e) => this.setState({ vampiHistoria: e.target.value })}
                                placeholder="Digite a hitória do seu personagem"
                                value={this.state.vampiHistoria} id="vampiHistoria" rows={5} cols={30} />

                        </Dialog>

                        <Button label="Mostrar sua história" id="vampi" icon="pi pi-external-link" onClick={this.onClick} style={{ backgroundColor: 'rgba(196, 196, 196, 1)', color: 'black' }} />

                        <div id="dropdown3">
                            <Dropdown value={this.state.vampiVantagem} id="vampiVantagem" options={vantagens} onChange={(event) => this.handleInputChange(event)} placeholder="Vantagens" optionLabel="name" filter={true} />
                            <br />
                            <Dropdown value={this.state.vampiDesvantagem} id="vampiDesvantagem" options={desvantagens} onChange={(event) => this.handleInputChange(event)} placeholder="Desvantagens" optionLabel="name" filter={true} />

                        </div>
                    </div>

                </Row>

                <Row md={10} style={{ backgroundColor: 'rgba(118, 118, 118, 1)', marginTop: '10px' }}>
                    <div className="content-section implementation" >
                        <Card header={personagem4} style={{ width: '90px', height: '110px' }}>
                        </Card>
                    </div>
                    <div id="progress-bar-anao">
                        <br />
                        <InputText type="number" style={{ width: '57px', height: '26px' }} value={this.state.anaoPV > 100 || this.state.anaoPV < 0 ? 100 + this.showInfo() : this.state.anaoPV} id="anaoPV" tooltip="Digite o ponto de vida" placeholder="PV" onChange={(event) => this.handleInputChange(event)} />
                        <div style={{ width: '200px', marginTop: '-26px', marginLeft: '59px' }}>
                            <ProgressBar value={this.state.anaoPV > 100 || this.state.anaoPV < 0 ? 0 : this.state.anaoPV} displayValueTemplate={this.props.displayValueTemplate}></ProgressBar>
                        </div>
                        <br />
                        <InputText type="number" style={{ width: '57px', height: '26px' }} value={this.state.anaoPM > 100 || this.state.anaoPM < 0 ? 100 + this.showInfo() : this.state.anaoPM} id="anaoPM" tooltip="Digite o ponto de mana" placeholder="PM" onChange={(event) => this.handleInputChange(event)} />
                        <div style={{ width: '200px', marginTop: '-26px', marginLeft: '59px' }}>
                            <ProgressBar value={this.state.anaoPM > 100 || this.state.anaoPM < 0 ? 0 : this.state.anaoPM} displayValueTemplate={this.props.displayValueTemplate}></ProgressBar>
                        </div>
                    </div>

                    <div style={{ marginLeft: '150px' }}>
                        <InputText tooltip="Força" type="number" placeholder="F" onChange={(event) => this.handleInputChange(event)}
                            id="anaoForca" value={this.state.anaoForca} style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Habilidade" type="number" placeholder="H" onChange={(event) => this.handleInputChange(event)}
                            value={this.state.anaoHabilidade} id="anaoHabilidade" style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Resistência" type="number" placeholder="R" onChange={(event) => this.handleInputChange(event)}
                            id="anaoResistencia" value={this.state.anaoResistencia} style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Armadura" type="number" placeholder="A" onChange={(event) => this.handleInputChange(event)}
                            id="anaoArmadura" value={this.state.anaoArmadura} style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>

                    <div style={{ marginLeft: '10px' }}>
                        <InputText tooltip="Poder de fogo" type="number" placeholder="PF" onChange={(event) => this.handleInputChange(event)}
                            id="anaoPdf" value={this.state.anaoPdf} style={{ width: '50px', backgroundColor: 'rgba(196, 196, 196, 1)' }} />
                    </div>
                    <div id="hitoriaAnao" style={{ marginLeft: '70px' }}>

                        <Dialog header="Você quer uma história?" id="anaoHistoria" visible={this.state.visible}
                            footer={footerHistoria} style={{ width: '50vw' }} onHide={this.onHide} maximizable>
                            <InputTextarea style={{ width: '600px', height: '-70px' }} onChange={(e) => this.setState({ anaoHistoria: e.target.value })}
                                placeholder="Digite a hitória do seu personagem"
                                value={this.state.anaoHistoria} id="anaoHistoria" rows={5} cols={30} />

                        </Dialog>

                        <Button label="Mostrar sua história" id="anao" icon="pi pi-external-link" onClick={this.onClick} style={{ backgroundColor: 'rgba(196, 196, 196, 1)', color: 'black' }} />

                        <div id="dropdown4">
                            <Dropdown value={this.state.anaoVantagem} id="anaoVantagem" options={vantagens} onChange={(event) => this.handleInputChange(event)} placeholder="Vantagens" optionLabel="name" filter={true} />
                            <br />
                            <Dropdown value={this.state.anaoDesvantagem} id="anaoDesvantagem" options={desvantagens} onChange={(event) => this.handleInputChange(event)} placeholder="Desvantagens" optionLabel="name" filter={true} />

                        </div>
                    </div>

                </Row>
                <Row md={2}>
                    <InputTextarea style={{ marginLeft: '1050px', marginTop: '-480px', height: '480px', width: '220px' }} value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} rows={5} cols={30}></InputTextarea>
                </Row>

            </Container>
        );
    }
}


