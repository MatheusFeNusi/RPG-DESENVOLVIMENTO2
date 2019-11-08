import React, {Component} from 'react';
import {ProgressBar} from 'primereact/progressbar';
import {Growl} from 'primereact/growl';

export class ProgressBar2 extends Component {

    constructor() {
        super();
        this.state = {
            value1: 0, 
            value2: 50,
            value3: 40
        };

        this.displayValueTemplate = this.displayValueTemplate.bind(this);
    }

    displayValueTemplate(value) {
        return (
            <React.Fragment>
                {value}/<b>100</b>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let val = this.state.value1;
            val += Math.floor(Math.random() * 10) + 1;

            if(val >= 100) {
                val = 100;
                this.growl.show({severity: 'info', summary: 'Success', detail: 'Process Completed'});
                clearInterval(this.interval);
            }

            this.setState({
                value1: val
            });
        }, 2000);
    }

    componentWillUnmount () {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    render() {
        return (
                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el}></Growl>

                    <div ><h3>{this.props.name}</h3>
                    <ProgressBar value={this.state.value1} style={{width:'300px'}}></ProgressBar></div>
                    

                </div>
        );
    }
}
