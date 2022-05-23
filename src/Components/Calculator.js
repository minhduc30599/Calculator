import React from "react";
import "./Calculator.css";
import Author from "./Author";
import Button from "./Button";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            output: ''
        };
        this.onPressButton = this.onPressButton.bind(this);
    }

    onPressButton(event) {
        const value = event.target.value;
        switch(value) {
            case 'equal':
                let ans = '';
                try {
                    ans = eval(this.state.input);
                }
                catch(err) {
                    this.setState({output: 'Math error'});
                }
                break;
            case 'Del':
                break;
            case 'AC':
                this.setState({
                    input: '',
                    output:''
                });
                break;
        }
    }

    render() {
        return(
            <div className="container calculator">
                <div className="fomula-display">
                    {this.state.input}
                </div>
                <div className="result-display">
                    {this.state.output}
                </div>
                <div className="button">
                    <Button id="AC" className="AC">AC</Button>
                    <Button id="/" className="operator">/</Button>
                    <Button id="x" className="operator">x</Button>
                    <Button id="7" className="number">7</Button>
                    <Button id="8" className="number">8</Button>
                    <Button id="9" className="number">9</Button>
                    <Button id="-" className="operator">-</Button>
                    <Button id="4" className="number">4</Button>
                    <Button id="5" className="number">5</Button>
                    <Button id="6" className="number">6</Button>
                    <Button id="+" className="operator">+</Button>
                    <Button id="1" className="number">1</Button>
                    <Button id="2" className="number">2</Button>
                    <Button id="3" className="number">3</Button>
                    <Button id="=" className="equal">=</Button>
                    <Button id="0" className="number">0</Button>
                    <Button id="." className="number">.</Button>
                    <Button id="Del" className="delete">Del</Button>
                </div>
                <Author />
            </div>
        );
    }
}

export default Calculator;