import React from 'react';
import {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import CalcLayout from "./calcLogic/calcLayout.js";
import CalcOutput from "./calcLogic/calcOutput.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="App-header">
            <p>
              Kingfisher Digital - Technical Demonstration Task
            </p>
          <header className="homeMenu">
          <Link to="/" className="menuLink">Home - Hyperlinks</Link> 
          </header>
          <header className="homeMenu">
          <Link to="/calculator" className="menuLink">Calculator</Link>
          </header>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/calculator">
                <Calculator />
              </Route>
            </Switch>
          </header>
        </div>
      </BrowserRouter>
    );
  }  
}

class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-body">
          <ul>
            <li>
              <a
                className="App-link"
                href="https://www.linkedin.com/in/matthew-clark-15284517b/"
                target="_blank"
                rel="author external noopener noreferrer"
              >
                Matthew's LinkedIn
              </a>
            </li>
            <li>
              <a
                className="App-link"
                href="http://www.semantic-web-journal.net/system/files/swj2493.pdf"
                target="_blank"
                rel="external noopener noreferrer"
              >
                Matthew's Technical Resource
              </a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

var autoReset = '0';

class Calculator extends Component {
  constructor(){
    super();
    this.state = {
      result: ""
    }
  }

  calcFunc = () => {
    try {
      autoReset = '1'
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch(e){
      this.setState({
        result: "ERROR - INVALID INPUT"
      })
    }
  };

  delFunc = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  resetFunc = () => {
    autoReset = '0'
    this.setState({
      result: ""
    })
  };

  onClick = button => {

    if(button === "="){
      this.calcFunc()
    }

    else if(button === "DEL"){
      this.delFunc()
    }

    else if(button === "C"){
      this.resetFunc()
    }

    else {
      if(autoReset == '1'){
        autoReset = '0'
        this.setState({
          result: this.state.result = button
        })
      } 
      else {
        this.setState({
          result: this.state.result + button
        })
      }
    }  
  };

  render() {
    return (
      <div className="calcLayout">
        <h1>Calculator Program</h1>
        <CalcOutput result={this.state.result}/>
        <CalcLayout onClick={this.onClick}/>
      </div>
      );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <div className="grid2">
      <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
