import { combineReducers } from 'redux';
import products from './products';
import className from './className';
import classID from './classID';
import filterClassName from './filterClassName';
import filterClassID from './filterClassID';

var appReducers = combineReducers ({
    products,
    className,
    classID,
    filterClassName,
    filterClassID,
})

export default appReducers;