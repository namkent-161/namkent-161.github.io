import * as types from '../constants/actionTypes';

var initialState = '';

const filterClassName = (state = initialState, action) => {
    switch(action.type) {
        case types.FILTER_CLASS_NAME:
            state = action.className;
            return state
        default: return state;
    }
}

export default filterClassName;
