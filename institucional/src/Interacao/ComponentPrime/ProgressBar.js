import React, {useState} from 'react';
import "./styles.css";

const Range = (props) => {
    return (
        <div className="range" style={{width: `${props.percentRange}%`}}/>
    );
};

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Range percentRange={props.percentRange}/>
        </div>
    );
};

export const ProgressBarApp = () => {
    let [percentRange, setProgress] = useState(0);

    return (
        <div className="container" style={{width: '110px', height: '110px'}}>
            <ProgressBar percentRange={percentRange}/>
            <div className="toggle-buttons">
                <button onClick={() => setProgress(percentRange > 0 ?
                    percentRange - 20 : 0)}>Decrease
                </button>
                <button onClick={() => setProgress(percentRange < 100 ? percentRange + 20 : 100)}>Increase</button>
                <button onClick={() => setProgress(0)}>Reset</button>
            </div>
            
        </div>
    );
};



