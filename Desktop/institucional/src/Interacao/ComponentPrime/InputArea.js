import React, {Component} from 'react';
import {InputTextarea} from 'primereact/inputtextarea';

export class InputTextareaDemo extends Component {
        
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div>
                <div className="content-section implementation">
                    <InputTextarea rows={5} cols={30} autoResize={true} style={{width:'600px'}} 
placeholder="SuperForça : +1 por ser um anaquin de ultima geração, essa sua vantagem pode te ajudar durante sua partida "></InputTextarea>
                    
                </div>
            </div>
        )
    }
}