import React from "react";

export default class Layout extends React.Component {
    state = {
        inp: null,
        settings: null,
        operation: null,
    };

    calculate = text => {
        return 0
    }
    handleClick = buttonName => {
        this.setState(this.calculate(this.state, buttonName));
    };

    render() {
        return (
            <div className="component-app">
              display
            </div>
        );
    }
}
