import React from 'react';
import ReactDOM from 'react-dom';

class AB extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ABData : null
        }
    }

    handle=()=>{
        if(this.state.ABData!==null){
            console.log("aaa")
        }
    }

    render(){
        return(
            <div>
                {this.handle()}
                <h1>A2來的: {this.state.ABData}</h1>
                <A1 setABData={this.setABData} />
            </div>
        )
    }

    setABData=(data)=>{
        this.setState({
            ABData:data
        })
    }
}

class A1 extends React.Component{

    render(){
        return(
            <div>
                <A2 setABData={(data)=>this.props.setABData(data)} />
            </div>
        )
    }
}

class A2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg:"hello world"
        }
    }

    render(){
        return(
            <div>
                <button onClick={this.sendData}>傳遞數據</button>
            </div>
        )
    }
    sendData = ()=>{
        console.log("bbb")
        this.props.setABData(this.state.msg)
    }
}



ReactDOM.render(
    <AB />,
    document.querySelector('#root')
)