import * as types from '../constants/actionTypes';

export const filterClassName = (className) => {
    return {
        type: types.FILTER_CLASS_NAME,
        className,
    }
}

export const filterClassID = (classID) => {
    return {
        type: types.FILTER_CLASS_ID,
        classID,
    }
}