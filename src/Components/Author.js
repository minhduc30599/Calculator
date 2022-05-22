import React from "react";
import "./Author.css";

class Author extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container author text-center">
                Coded by <a className="author-a text-decoration-none" href="https://codepen.io/Duc-Nguyen-99">Minh Duc Nguyen</a>
            </div>
        );
    }
}

export default Author;