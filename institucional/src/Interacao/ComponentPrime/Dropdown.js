import React, {Component} from 'react';
import {Dropdown} from 'primereact/dropdown';

export class DropdownDemo extends Component {

    constructor() {
        super();
        this.state = {
            city: null, 
           
        };
        
        this.onCityChange = this.onCityChange.bind(this);
        
    }

    onCityChange(e) {
        this.setState({city: e.value});
    }

   
    render() {
        const cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        return (
            <div>
                
                <div className="content-section implementation">
                    
                    <Dropdown value={this.state.city} options={cities} onChange={this.onCityChange} placeholder={this.props.holder} optionLabel="name" filter={true}/>

                   
                </div>
            </div>
        );
    }
}
