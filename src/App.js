import React from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './Components/header';
import Landing from './Pages/landing';
import CreateAccount from './Pages/create-account';
import CurrentMonth from './Pages/current-month';
import Goals from './Pages/goals';
import NewItem from './Pages/new-items';

import './App.css';
// import { domainToASCII } from 'url';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section className="main-section">

        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/CreateAccount' component={CreateAccount} />
          <Route exact path='/CurrentMonth' component={CurrentMonth} />
          <Route exact path='/Goals' component={Goals} />
          <Route exact path='/NewItem' component={NewItem} />
        </Switch>

      </section>
    </div>
  );
}

export default App;
