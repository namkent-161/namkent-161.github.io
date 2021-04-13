import React, { Component } from 'react';
import {connect} from 'react-redux';
import ClassID from '../Components/ClassID';
import OptionID from '../Components/OptionID';
import * as actions from '../actions/index';

class ClassIDContainer extends Component {
    render() {
        var {onClassID, onFilterClassID} = this.props;
        return (
            <ClassID onFilterClassID={onFilterClassID}>
                {this.showOption(onClassID)}
            </ClassID>
        )
    }

    showOption(products) {
        var result = null;
        if(products.length > 0) {
            result = products.map((item, index) => {
                return <OptionID item={item} key={index}></OptionID>
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        onClassID: state.classID,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterClassID: (classID) => {
            dispatch(actions.filterClassID(classID));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassIDContainer);
