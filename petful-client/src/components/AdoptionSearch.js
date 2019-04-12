import React, { Component } from 'react';
import CatSearch from './CatSearch';
import DogSearch from './DogSearch';

import AdoptionContext from '../adoption-context/AdoptionContext';

class AdoptionSearch extends Component {
    static contextType = AdoptionContext;

    constructor (props) {
        super(props) 
        this.state = {
            toggle: false
        }
    }

    handleOnClick () {
        this.setState({
            toggle: true
        })
    }
    render () {
        
        return (
            <div className="adoption-page">
              <h2>Start your search here!</h2>
              <div>
                <h3>Cats</h3>
                <button type="submit" onClick={() => this.handleOnClick()}>Begin Cat Search</button>
                <h3>Dogs</h3>
                <button type="submit" onClick={() => this.handleOnClick()}>Begin Dog Search</button>
              </div>
              
              
              <div className="search-results">
                <p>Pet Queue would be displayed here</p>
                <CatSearch />
                <DogSearch />
              </div>
            </div>
        )
    }
}

export default AdoptionSearch;