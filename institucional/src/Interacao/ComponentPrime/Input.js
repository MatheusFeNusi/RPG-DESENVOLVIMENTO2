import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

export class InputTextDemo extends Component { 
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
                        <strong>{this.props.name}</strong>
                        <InputText  value={this.state.value1} onChange={(e) => this.setState({value1: e.target.value})} type="number" style={{maxLength:"2", width:'50px'}} />
                        <Button label={this.state.value1?this.state.value1 : 'X'} />

                       </div>
                </div>
            </div>

        );
}
    
}
