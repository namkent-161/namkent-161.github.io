import React, { Component } from 'react';
import {connect} from 'react-redux';
import ClassName from '../Components/ClassName';
import OptionName from '../Components/OptionName';

import * as actions from '../actions/index';

class ClassNameContainer extends Component {
    render() {
        var {onClassName, onFilterClassName} = this.props;
        return (
            <ClassName onFilterClassName ={onFilterClassName}>
                {this.showOption(onClassName)}
            </ClassName>
        )
    }

    showOption(products) {
        var result = null;
        if(products.length > 0) {
            result = products.map((item, index) => {
                return <OptionName item={item} key={index}></OptionName>
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        onClassName: state.className,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilterClassName: (className) => {
            dispatch(actions.filterClassName(className));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassNameContainer);
