/**
 * Created by jiajiewang on 2017/5/19.
 */

import  * as Type from'../type/MathType';

//初始化
const initState = {
    result: 0
};

export default function mathReducer(state = initState, action = {}) {
    switch (action.type) {
        case Type.ADD_TYPE:
            console.log('---> mathReducer action.type ' + action.type);
            return {
                ...state,
                result: action.result+10,
            };
            break;
        case Type.MINUS_TYPE:
            console.log('---> mathReducer action.type ' + action.type);
            return {
                ...state,
                result: action.result - 10,
            };
        default:
            return state;
    }
}
