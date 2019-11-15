import React, {Component} from 'react';
import {Dropdown} from 'primereact/dropdown';
export default class DropdownClass extends Component {

    constructor() {
        super();
        this.state = {
            vantagem: null, 
           desvantagem: null
        };
        
        this.onVantagemChange = this.onVantagemChange.bind(this);
        this.onDesvantagemChange = this.onDesvantagemChange.bind(this);
        
    }

    onVantagemChange(e) {
        this.setState({vantagem: e.value});
    }
    onDesvantagemChange(e) {
        this.setState({desvantagem: e.value});
    }

   
    render() {
        const vantagens = [
            {name: 'sdsds', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
        const desvantagens = [];

        return (
            <div>
                
                <div className="content-section implementation">
                    
                    <Dropdown value={this.state.vantagem} options={vantagens} onChange={this.onVantagemChange} placeholder="Vantagens" optionLabel="name" filter={true} />
                    <br />
                    
                    <Dropdown value={this.state.desvantagem} options={desvantagens} onChange={this.onDesvantagemChange} placeholder="Desvantagens" optionLabel="name" filter={true} style={{ backgroundColor: 'red', color: 'black'}}/>

                   
                </div>
            </div>
        );
    }
}
