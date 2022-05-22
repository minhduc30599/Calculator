import React from "react";
import "./Calculator.css";
import Author from "./Author";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container calculator">
                <div className="fomula-display">
                    1 + 2 = 
                </div>
                <div className="result-display">
                    3
                </div>
                <div className="button">
                    <button className="AC">AC</button>
                    <button className="operator">/</button>
                    <button className="operator">x</button>
                    <button className="number">7</button>
                    <button className="number">8</button>
                    <button className="number">9</button>
                    <button className="operator">-</button>
                    <button className="number">4</button>
                    <button className="number">5</button>
                    <button className="number">6</button>
                    <button className="operator">+</button>
                    <button className="number">1</button>
                    <button className="number">2</button>
                    <button className="number">3</button>
                    <button className="equal">=</button>
                    <button id="zero" className="number">0</button>
                    <button id="dot" className="number">.</button>
                </div>
                <Author />
            </div>
        );
    }
}

export default Calculator;