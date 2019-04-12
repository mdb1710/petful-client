import React, { Component } from 'react';
import CatSearch from './CatSearch';
import DogSearch from './DogSearch';

class AdoptionSearch extends Component {
    render () {
        return (
            <div className="adoption-page">
              <h2>Start your search here!</h2>
              <div>
                <h3>Cats</h3>
                <button type="submit">Begin Cat Search</button>
                <h3>Dogs</h3>
                <button type="submit">Begin Dog Search</button>
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