import React, { Component } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Growl } from 'primereact/growl';
import { InputText } from 'primereact/inputtext';

export default class ProgressBar2 extends Component {

    constructor() {
        super();
        this.state = {
            value1: 10,
            value2: 5
        };
        this.showInfo = this.showInfo.bind(this);
        this.displayValueTemplate = this.displayValueTemplate.bind(this);
    }
    showInfo() {
        this.growl.show({ severity: 'info', summary: 'Informação', detail: 'Digite um valor de 1 a 100' });
    }
    toggle() {
        this.setState({ disabled: !this.state.disabled });
    }
    displayValueTemplate(value) {
        return <React.Fragment> {value}/100</React.Fragment>
    }

    render() {
        return (
            <div>
                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el}></Growl>
                    <br />
                    <InputText type="number" style={{ width: '57px', height: '26px' }} value={this.state.value1 > 100|| this.state.value1 < 0 ? 100 + this.showInfo() : this.state.value1} tooltip="Digite o ponto de vida" placeholder="PV" maxlength="3" onChange={(e) => this.setState({ value1: e.target.value })} />
                    <div style={{ width: '200px', marginTop: '-26px', marginLeft: '59px' }}>
                        <ProgressBar value={this.state.value1 > 100 || this.state.value1 < 0 ? 0 : this.state.value1} displayValueTemplate={this.props.displayValueTemplate}></ProgressBar>
                    </div>
                    <br />
                    <InputText type="number" style={{ width: '57px', height: '26px' }} value={this.state.value2 > 100|| this.state.value1 < 0 ? 100 + this.showInfo() : this.state.value2} tooltip="Digite o ponto de mana" placeholder="PM" maxlength="3" onChange={(e) => this.setState({ value2: e.target.value })} />
                    <div style={{ width: '200px', marginTop: '-26px', marginLeft: '59px' }}>
                        <ProgressBar value={this.state.value2 > 100 || this.state.value1 < 0 ? 0 : this.state.value2} displayValueTemplate={this.props.displayValueTemplate}></ProgressBar>
                    </div>
                </div>
            </div>
        );
    }
}