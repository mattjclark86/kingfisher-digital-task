import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './index.css';
import CalcLayout from "./calcLogic/calcLayout.js";
import CalcOutput from "./calcLogic/calcOutput.js";

class App extends Component {
//React class for the static menu portion of the app
  render() {
    return (
      //BrowserRouter allows for the separation of the homepage and calculator pages
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
//React class for the homepage portion of the app where the LinkedIn and technical resource hyperlinks are contained
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
//Used for resetting the result once a calculation has occured
//This prevents a logic error in being able to directly add numbers on the end a result rather than starting a new calculation

class Calculator extends Component {
  constructor(){
    super();
    this.state = {
      result: ""
      //Contains the result variable inside the class
    }
  }

  calcFunc = () => {
    try {
      autoReset = '1'
      this.setState({
        result: (eval(this.state.result) || "") + ""
        //Calculates the result of the given formula or defaults to ""
      })
    } catch(e){
      this.setState({
        result: "ERROR - INVALID INPUT"
        //Any syntax errors the user makes using the calculator are caught as errors
        //E.G: +-+3
      })
    }
  };

  delFunc = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
      //Subtracts a value from the current formula
    })
  };

  resetFunc = () => {
    autoReset = '0'
    this.setState({
      result: ""
      //Resets the formula back to ""
    })
  };

  onClick = button => {

    if(button === "="){
      this.calcFunc()
      //Calculates the current formula if "=" is pressed
    }

    else if(button === "DEL"){
      this.delFunc()
      //Deleted the last value of the current formula if "DEL" is pressed
    }

    else if(button === "C"){
      this.resetFunc()
      //Resets the formula if "C" (for Clear) is pressed
    }

    else {
      if(autoReset == '1'){
        autoReset = '0'
        this.setState({
          result: this.state.result = button
          //A second way of resetting the formula
        })
      } 
      else {
        this.setState({
          result: this.state.result + button
          //Adds the given number/operation to the formula
        })
      }
    }  
  };

  render() {
    return (
      //Compressed code for the calculator layout and result screen
      <div className="calcLayout">
        <h1>Calculator Program</h1>
        <CalcOutput result={this.state.result}/>
        <CalcLayout onClick={this.onClick}/>
      </div>
      );
  }
}

ReactDOM.render(
  //Renders the app
  <React.StrictMode>
    <div className="grid2">
      <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);