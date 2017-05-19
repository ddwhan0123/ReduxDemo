/**
 * Created by jiajiewang on 2017/5/19.
 */
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from'./reducer/reducers';
const middlewares = [thunk];
const createSoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
import  React from 'react';
import  Main from'./Main';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            store: createSoreWithMiddleware(reducers)
        }
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <Main/>
            </Provider>
        )
    }
}

