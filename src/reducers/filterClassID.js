import * as types from '../constants/actionTypes';

var initialState = null;

const filterClassID = (state = initialState, action) => {
    switch(action.type) {
        case types.FILTER_CLASS_ID:
            state = Number(action.classID);
            return state;
        default: return state;
    }
}

export default filterClassID;
