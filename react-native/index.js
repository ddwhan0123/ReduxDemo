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

    //前面一些只是对象，方法相关的操作，肉眼可以识别，Provider是让我们决定使用redux的一个原因，它可以让我们操作容器内的组件却不需要手动传递内容
    //想想复杂应用来一个 4层以上的json要你你自己操作的话的工作量吧
    render() {
        return (
            <Provider store={this.state.store}>
                <Main/>
            </Provider>
        )
    }
}

