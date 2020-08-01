import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const store = createStore((state = {num:0}, action)=>{
    switch (action.type) {
        case 'increment':
            state.num++;
            break
        case 'decrement':
            state.num--;
            break
        default:
            break
    }
    return {...state}
})

function increment(){
    store.dispatch({type:"increment"})
    console.log(store.getState())
}
function decrement(){
    store.dispatch({type:"decrement"})
    console.log(store.getState())
}

const Counter = function (props){
    let state = store.getState()
    console.log('aaa')
    return (
        <div>
            <h1>數量:{state.num}</h1>
            <button onClick={ increment }>數量+1</button>
            <button onClick={ decrement }>數量-1</button>
        </div>
    )
}

ReactDOM.render(
    <Counter></Counter>,
    document.querySelector("#root")
)

store.subscribe(()=>{
    ReactDOM.render(
        <Counter></Counter>,
        document.querySelector("#root")
    )
})