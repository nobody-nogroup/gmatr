import React from "react";
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

export default class ButtonPanel extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        locked: PropTypes.bool,
        focussed: PropTypes.bool,
        value: PropTypes.string,
        error: PropTypes.string,
        label: PropTypes.string,
        onChange: PropTypes.func,
    };
    static defaultProps = {
        locked: false,
        focussed: false,
        value: '',
        error: '',
        label: '',
        onChange: () => '',
    };
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
            </div>
        );
    }
}
