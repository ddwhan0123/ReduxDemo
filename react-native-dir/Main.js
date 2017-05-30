/**
 * Created by jiajiewang on 2017/5/19.
 */
import React from'react';


import {connect} from 'react-redux';
//加减的两种action
import {add, minus} from './action/MathAction';
import Immutable from 'immutable';

import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

let a = {
    showText: {
        data: 'hahah',
        count: 1024,
    }
};
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.addPress = this.addPress.bind(this);
        this.minusPress = this.minusPress.bind(this);
        this.showRefresh = this.showRefresh.bind(this);
        //初始值，也可以是外部传入
        this.state = {
            intvalue: 100,
            showText: {
                data: '按我啊',
                count: 1024,
            },
        }
    }

    showRefresh() {
        console.log('---> Main showRefresh');
        this.setState(a);
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
            console.log('---> Main shouldComponentUpdate this.state.intvalue true ' + this.state.intvalue);
            return true;
        }
        if (!(this.state.showText === nextState.showText || Immutable.is(this.state.showText, nextState.showText))) {
            console.log('---> Main shouldComponentUpdate this.state.showText true ' + this.state.showText.data);
            console.log('---> Main shouldComponentUpdate nextState.showText true ' + nextState.showText.data);
            return true;
        }
        return false;
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
                <TouchableHighlight style={{marginTop: 30}} onPress={this.showRefresh}>
                    <Text style={{fontSize: 15}}>
                        {this.state.showText.data}
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

function

select(store) {
    return {
        result: store.mathStore.result,
    }
}

//connect方法建立数据与状态的关系，达到刷新ui的效果
export
default

connect(select)

(
    Main
)
;
