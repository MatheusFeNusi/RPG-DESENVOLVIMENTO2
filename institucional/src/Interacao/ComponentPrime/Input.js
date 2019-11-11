import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';

export default class InputClass extends Component { 
    constructor() {
        super();
        this.state = {
            value1: null
        };
    };

    toggle() {
        this.setState({disabled: !this.state.disabled});
    };
        render(){ 
        return (
            <div>

                <div className="content-section implementation">
                    <div className="content-section implementation">
                        <InputText placeholder={this.props.caracteristica} tooltip={this.props.toolTiip}  maxlength="2" value={this.state.value1} onChange={(e) => this.setState({value1: e.target.value})} type="number" style={{ width:'50px', backgroundColor: 'rgba(196, 196, 196, 1)'}} />
                       </div>
                </div>
            </div>

        );
}
    
}
