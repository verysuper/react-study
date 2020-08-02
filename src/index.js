import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import { Provider, connect } from 'react-redux'

class Counter extends React.Component{
    render() {
        const value = this.props.value;
        const onIncrement = this.props.onIncrement;
        return (
            <div>
                <h1>計數:{value}</h1>
                <button onClick={onIncrement}>數字+1</button>
                <button onClick={this.props.onIncrement5}>數字+5</button>
            </div>
        )
    }
}

const addAction = {
    type:'add'
}

let ActionFnObj={
    add:function (state,action){
        state.num++
        return state
    },
    addNum:function (state,action){
        state.num =state.num +action.num
        return state
    }
}

const store = createStore((state={num:0},action)=>{
    if(action.type.indexOf('redux') === -1)
        state = ActionFnObj[action.type](state,action)
    return {...state}
})

function mapStateToProps(state){
    return {
        value: state.num
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrement: ()=>{dispatch(addAction)},
        onIncrement5: ()=>{dispatch({type:"addNum",num:5})}
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.querySelector("#root")
)