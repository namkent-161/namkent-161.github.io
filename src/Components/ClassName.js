import React, { Component } from 'react';

class ClassName extends Component {
    render() {
        return (
            <select onChange = {this.onChange} name id="input" className="form-control" required="required">
                {this.props.children}
            </select>
        )
    }
    onChange = (event) =>{
        var className = event.target.value;
        this.props.onFilterClassName(className);
    }
}

export default ClassName;
