/**
 * Created by jiajiewang on 2017/5/19.
 */
import React from'react';

import {connect} from 'react-redux';
import {add, minus} from './action/MathAction';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TouchableHighlight,
} from 'react-native';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.addPress = this.addPress.bind(this);
        this.minuPress = this.minuPress.bind(this);
        this.state = {
            intvalue: 100,
        }
    }

    addPress() {
        console.log('---> Main addPress');
        this.props.dispatch(add(this.state.intvalue));
    }

    minuPress() {
        console.log('---> Main minuPress');
        this.props.dispatch(minus(this.state.intvalue));
    }

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
                <TouchableHighlight style={{marginTop: 30}} onPress={this.minuPress}>
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

export  default  connect(select)(Main);