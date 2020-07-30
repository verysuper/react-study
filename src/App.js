import React from 'react';

class ParentCom extends React.Component{
  render() {
      return (
          <div>
              <ChildCom>
                  <h1 data-position="header">header</h1>
                  <h1 data-position="main">main</h1>
                  <h1 data-position="footer">footer</h1>
              </ChildCom>
          </div>
      )
  }
}

class ChildCom extends React.Component{
    render() {
        let header,main,footer
        this.props.children.forEach((item)=>{
            switch (this.props['data-position']) {
                case "header":
                    header = item
                    break
                case "main":
                    main = item
                    break
                case "footer":
                    footer = item
            }
        })
        return (
            <div>
                {header}
                {main}
                {footer}
            </div>
        )
    }
}

class App extends React.Component{
    render() {
        return (
            <ParentCom />
        )
    }
}

export default App;
