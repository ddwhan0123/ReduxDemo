/**
 * Created by jiajiewang on 2017/11/5.
 */
import React from 'react';

import {
    Text,
} from 'react-native';

export default class SonComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log('---> SonComponent constructor');
    }

    componentWillMount() {
        console.log('---> SonComponent componentWillMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('---> SonComponent componentWillReceiveProps');
        console.log('---> SonComponent shouldComponentUpdate nextProps ' + nextProps.sonValue)
    }

    componentDidMount() {
        console.log('---> SonComponent componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('---> SonComponent shouldComponentUpdate');
        console.log('---> SonComponent shouldComponentUpdate nextProps ' + nextProps.sonValue);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('---> SonComponent componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('---> SonComponent componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('---> SonComponent componentWillUnmount');
    }

    render() {
        console.log('---> SonComponent render');
        return (
            <Text style={{marginTop: 30}}>{this.props.sonValue}</Text>
        )
    }
}