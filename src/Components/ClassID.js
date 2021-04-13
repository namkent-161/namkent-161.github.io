import React, { Component } from 'react';

class ClassID extends Component {
    render() {
        return (
            <select onChange={this.onChange} name id="input" className="form-control" required="required">
                {this.props.children}
            </select>
        )
    }
    onChange = (event) =>{
        var classID = event.target.value;
        this.props.onFilterClassID(classID);
    }
}

export default ClassID;
