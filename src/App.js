import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from "react-router-dom";

let LoginInfo = (props)=>{
    console.log(props)
    if(props.location.state.loginState === "success"){
        return <Redirect to="/admin"></Redirect>
    }else {
        return <Redirect to="/login"></Redirect>
    }
}

let Form = ()=>{
    let pathObj = {
        pathname:"/loginInfo",
        state:{
            loginState:"success"
        }
    }
    return (
        <div>
            <h1>表單驗證</h1>
            <Link to={pathObj}>登入後頁面</Link>
        </div>
    )
}

class childCom extends React.Component{
    render() {
        return (
            <div>
                <button onClick={this.clickHandle}>跳轉首頁</button>
            </div>
        )
    }
    clickHandle = ()=>{
        this.props.history.push("/",{msg:"來自childCom的msg"}) //使用 js props.history.push函數操作跳轉
    }
}

class App extends React.Component{
    render() {
        return (
            <div>
                <Router>
                    {/* /:params 動態路由*/}
                    <Route path="/:id" exact component={(props)=> {
                        console.log(props)
                        return (<h1>首頁</h1>)
                    }}></Route>
                    <Route path="/form" exact component={Form}></Route>
                    <Route path="/login" exact component={()=>(<h1>登入頁</h1>)}></Route>
                    <Route path="/loginInfo" exact component={LoginInfo}></Route>
                    <Route path="/admin" exact component={()=>(<h1>admin</h1>)}></Route>
                    <Switch>{/* Switch只取第一個匹配的名稱*/}
                        <Route path="/abc" exact component={()=>(<h1>abc1</h1>)}></Route>
                        <Route path="/abc" exact component={()=>(<h1>abc2</h1>)}></Route>
                    </Switch>
                    <Route path="/child" exact component={childCom}></Route>
                </Router>
            </div>
        )
    }
}

export default App;
