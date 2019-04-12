import React, { Component } from 'react';
import CatSearch from './CatSearch';
import DogSearch from './DogSearch';

class AdoptionSearch extends Component {

  constructor(props){
    super(props);

    this.state = {
      toggleCat: false,
      toggleDog: false
    }
  }

  handleOnClick() {
    this.setState({toggleCat: !this.state.toggleCat})
  }

  handleOnClickDog() {
    this.setState({toggleDog: !this.state.toggleDog})
  }
    render () {
        return (
            <div className="adoption-page">
              <h2>Start your search here!</h2>
              <div>
                <h3>Cats</h3>
                <button type="submit" onClick= {() => this.handleOnClick()}>Begin Cat Search</button>
                <h3>Dogs</h3>
                <button type="submit" onClick= {() => this.handleOnClickDog()}>Begin Dog Search</button>
              </div>
              
              
              <div className="search-results">
                <p>Pet Queue would be displayed here</p>
                <CatSearch toggle={this.state.toggleCat}/>
                <DogSearch toggle={this.state.toggleDog}/>
              </div>
            </div>
        )
    }
}

export default AdoptionSearch;