/**
 * Created by jiajiewang on 2017/5/19.
 */

// action类型
import * as types from '../type/MathType';

// 每一个action方法返回一个新的"state"对象,他就是应用当前的状态
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