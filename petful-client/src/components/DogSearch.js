import React, { Component } from 'react';
import './DogSearch.css'
class DogSearch extends Component {
    render() {
      console.log(this.props.toggle)
        return (
            <div className={`dog-results ${this.props.toggle ? 'hidden' : ''}`}>
              <ul>
                <li>Dog 1</li>
                <li>Dog 2</li>
                <li>Dog 3</li>
                <li>Dog 4</li>
                <li>Dog 5</li>
              </ul>
            </div>
        )
    }
}

export default DogSearch;