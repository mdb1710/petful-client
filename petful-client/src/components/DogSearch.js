import React, { Component } from 'react';

import './DogSearch.css'
import Queue from '../helpers/PetQueue';


class DogSearch extends Component {

    constructor(props){
        super(props)
        this.state = {
            dogs: []
        }
    }

    componentDidMount(){
        fetch(`http://localhost:8000/api/dogs`)
         .then(res => res.json())
         .then(dogs => {
             this.setState({
                 dogs: dogs
             })
         })
           
 };

 dogsToQueue(dogs){
     let dogQueue = new Queue;
     for (let i = 0; i < dogs.length; i++ ){
         dogQueue.enqueue(dogs[i]);
     }
     return dogQueue;
 }
    
    render() {
      console.log(this.state.dogs)
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