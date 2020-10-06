import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        <p>
          Welcome to the incomplete app!
        </p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
          </ul>
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

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://www.linkedin.com/in/matthew-clark-15284517b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matthew's LinkedIn
        </a>
        <a
          className="App-link"
          href="http://www.semantic-web-journal.net/system/files/swj2493.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matthew's Technical Resource
        </a>
      </header>
    </div>
  );
}

function Calculator() {
  var calculatorElement = 1;
  return (
    <div className="App">
      <header className="App-header">
        <h1>{calculatorElement + calculatorElement}</h1>
      </header>
    </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
