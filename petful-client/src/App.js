import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';

import HomePage from './components/HomePage';
import AdoptionSearch from './components/AdoptionSearch';
import AdoptionContext from './adoption-context/AdoptionContext';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      cats: [],
      dogs: [],
      adopted: false,
      taken: false,
      toggleCatSearch: () => {},
      toggleDogSearch: () => {},
    }

  }
  
  render() {
    const contextValue = {
      cats: this.context.cats,
      dogs: this.context.dogs,
      adopted: this.context.adopted,
      taken: this.context.taken,
      toggleCatSearch: this.context.toggleCatSearch,
      toggleDogSearch: this.context.toggleDogSearch
    
    }


    return (
      <AdoptionContext.Provider value={contextValue}>
      <div>
        <div className="App">
          <header className="App-header">
           <h1>Welcome to Petful</h1>
          </header>
        </div>
        <div className="content">
        <Route 
        exact path='/'
        component={HomePage}/>
        <Route 
        path='/search'
        component={AdoptionSearch}/>
        </div>
      </div>
      </AdoptionContext.Provider>

    );
  }
}

export default App;
