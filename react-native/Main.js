/**
 * Created by jiajiewang on 2017/5/19.
 */
import React from'react';


import {connect} from 'react-redux';
//加减的两种action
import {add, minus} from './action/MathAction';

import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.addPress = this.addPress.bind(this);
        this.minusPress = this.minusPress.bind(this);
        //初始值，也可以是外部传入
        this.state = {
            intvalue: 100,
        }
    }

    addPress() {
        console.log('---> Main addPress');
        this.props.dispatch(add(this.state.intvalue));
    }

    minusPress() {
        console.log('---> Main minuPress');
        //dispatch(action) 方法更新 state
        this.props.dispatch(minus(this.state.intvalue));
    }

    //状态变化时会被调用
    shouldComponentUpdate(nextProps, nextState) {
        console.log('---> Main shouldComponentUpdate');
        if (nextProps.result !== this.props.result) {
            this.state.intvalue = nextProps.result;
            console.log('---> Main shouldComponentUpdate this.state.intvalue ' + this.state.intvalue);
            return true;
        }
    }

    render() {
        console.log('---> Main render');
        return (
            <View style={{justifyContent: 'center'}}>
                <TouchableHighlight onPress={this.addPress}>
                    <Text style={{fontSize: 15}}>
                        按我会加
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={{marginTop: 30}} onPress={this.minusPress}>
                    <Text style={{fontSize: 15}}>
                        按我会减
                    </Text>
                </TouchableHighlight>
                <Text style={{marginTop: 30, color: '#ffaa11'}}>{this.state.intvalue}</Text>
            </View>
        )
    }
}

function select(store) {
    return {
        result: store.mathStore.result,
    }
}
//connect方法建立数据与状态的关系，达到刷新ui的效果
export  default  connect(select)(Main);