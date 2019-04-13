import React, { Component } from 'react';
import config from '../config';
import './AdoptedAnimals.css';

export default class AdoptedAnimals extends Component {

  constructor(props){
    super(props);

    this.state = {
      animals: []
    }
  }

  async componentDidMount() {
    const res = await fetch(`${config.API_ENDPOINT}/api/adopted`)
    const json = await res.json();

    this.setState({
        animals:json
    })

}
  render() {
    const animals = this.state.animals.map((i,j) => {
                return(
                <li key={j}>
                <img src={i.imageURL} alt={i.imageDescription} className="adopted-animal-pic"/>
                <div>{i.name} adopted by {i.user}</div>
                </li>
                );
            })
      
    return (
      <div>
        <ul className='adopted-dog-cat'>
          {this.state.animals.length > 0 ? animals : <h2 className='no-pet-message'>No pets have been adopted yet</h2>}
        </ul>
      </div>
    )
  }
}
