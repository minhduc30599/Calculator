import React from "react";
import "./Calculator.css";
import Author from "./Author";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            output: ''
        };
        this.onPressButton = this.onPressButton.bind(this);
    }

    onPressButton(event){
        const value = event.target.id;
        switch (value) {
            case '=': {
                if (this.state.input !== '')
                {
                    var ans='';
                    try
                    {
                        ans = eval(this.state.input);
                    }
                    catch(err)
                    {
                        this.setState({output: "Math Error"});
                    }
                    if (ans === undefined)
                        this.setState({output: "Math Error"});
                    else
                        this.setState({input: this.state.question, output: ans});
                    break;
                }
            }
            case 'AC': {
                this.setState({ output: '', input: '' });
                break;
            }

            case 'Del': {
                var str = this.state.input;
                str = str.slice(0, -1);
                this.setState({input: str});
                break;
            }

            default: {
                this.setState({ 
                    input: this.state.input += value,
                    output: this.state.input += value
                })
                break;
            }
        }
    }

    render() {
        return(
            <div className="container calculator">
                <div className="fomula-display">
                    {this.state.input.length < 14 ? this.state.input : "Digit limit met"}
                </div>
                <div className="result-display">
                    {this.state.input.length < 14 ? this.state.output : "Digit limit met"}
                </div>
                <div className="button">
                    <button id="AC" className="AC" onClick={this.onPressButton}>AC</button>
                    <button id="/" className="operator" onClick={this.onPressButton}>/</button>
                    <button id="x" className="operator" onClick={this.onPressButton}>x</button>
                    <button id="7" className="number" onClick={this.onPressButton}>7</button>
                    <button id="8" className="number" onClick={this.onPressButton}>8</button>
                    <button id="9" className="number" onClick={this.onPressButton}>9</button>
                    <button id="-" className="operator" onClick={this.onPressButton}>-</button>
                    <button id="4" className="number" onClick={this.onPressButton}>4</button>
                    <button id="5" className="number" onClick={this.onPressButton}>5</button>
                    <button id="6" className="number" onClick={this.onPressButton}>6</button>
                    <button id="+" className="operator" onClick={this.onPressButton}>+</button>
                    <button id="1" className="number" onClick={this.onPressButton}>1</button>
                    <button id="2" className="number" onClick={this.onPressButton}>2</button>
                    <button id="3" className="number" onClick={this.onPressButton}>3</button>
                    <button id="=" className="equal" onClick={this.onPressButton}>=</button>
                    <button id="0" className="number" onClick={this.onPressButton}>0</button>
                    <button id="." className="number" onClick={this.onPressButton}>.</button>
                    <button id="Del" className="delete" onClick={this.onPressButton}>Del</button>
                </div>
                <Author />
            </div>
        );
    }
}

export default Calculator;