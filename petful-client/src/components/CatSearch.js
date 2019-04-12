import React, { Component } from 'react';
import './CatSearch.css'
class CatSearch extends Component {

  constructor(props){
    super(props);

    this.state ={
      toggle : this.props.toggle
    }
  }
    render() {
        return (
            <div className={`cat-results ${this.props.toggle ? 'hidden' : ''}`}>
              <ul>
                <li>Cat 1</li>
                <li>Cat 2</li>
                <li>Cat 3</li>
                <li>Cat 4</li>
                <li>Cat 5</li>
              </ul>
            </div>
        )
    }
}

export default CatSearch;