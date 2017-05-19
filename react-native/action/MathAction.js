/**
 * Created by jiajiewang on 2017/5/19.
 */
import * as types from '../type/MathType';

export function add(intvalue) {
    console.log('---> MainAction add intvalue ' + intvalue);
    return {
        type: types.ADD_TYPE,
        result: intvalue,
    }
};

export function minus(intvalue) {
    console.log('---> MainAction minus intvalue ' + intvalue);
    return {
        type: types.MINUS_TYPE,
        result: intvalue,
    }
};