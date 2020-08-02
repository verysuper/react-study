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
            </div>
        )
    }
}

const addAction = {
    type:'add'
}

const store = createStore((state={num:0},action)=>{
    switch (action.type){
        case "add":
            state.num++
            break
        default:
            break
    }
    return {...state}
})

function mapStateToProps(state){
    return {
        value: state.num
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrement: ()=>{dispatch(addAction)}
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