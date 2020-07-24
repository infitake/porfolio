import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar';
import Home from './components/links/home';
import Experience from './components/links/Experience';
import Skills from './components/links/skills';
import Projects from './components/links/project';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/experience' component={Experience} />
          <Route path='/skills' component = {Skills} />
          <Route path='/projects' component = {Projects} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
