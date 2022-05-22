import React from "react";
import "./App.css";
import Calculator from "./Calculator";
import Author from "./Author";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container-fluid outer-container">
                <Calculator />
            </div>
        );
    }
}

export default App;