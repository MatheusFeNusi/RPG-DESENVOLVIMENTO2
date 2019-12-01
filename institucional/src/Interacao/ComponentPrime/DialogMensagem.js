import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';

export default class DialogMensagem extends Component {
        
    constructor() {
        super();
        this.state = {visible: false};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        const footerHistoria = (
            <div>
                <Button label="Salvar" icon="pi pi-check" onClick={this.onHide, this.setState()} />
                <Button label="Sair" icon="pi pi-times" onClick={this.onHide} className="p-button-secondary" />
            </div>
        );

        return (
            <div>
                <div className="content-section implementation">
                    <Dialog header="Você quer uma história?" visible={this.state.visible} footer={footerHistoria} style={{width: '50vw'}} onHide={this.onHide} maximizable>
                    <InputTextarea style={{ width: '600px', height: '-70px' }} placeholder="Digite a hitória do seu personagem"
                value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} rows={5} cols={30}></InputTextarea>
                    </Dialog>

                    <Button label="Mostrar sua história" icon="pi pi-external-link" onClick={this.onClick} style={{ backgroundColor: 'rgba(196, 196, 196, 1)', color: 'black'}}/>
                </div>
            </div>
        )
    }
}