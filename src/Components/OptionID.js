import React, { Component } from 'react';

class OptionID extends Component {
    render() {
        var {item} = this.props
        return (
            <option value ={item}>{item}</option>
        )
    }
}

export default OptionID;
