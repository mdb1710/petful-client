import React, { Component } from 'react';
import config from '../config';
import './DogSearch.css'


class DogSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dogs: [],
            users: [],
            adopter: ''
        }
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/api/dogs`)
            .then(res => {
                if (!res.ok)
                    throw new Error(res.message)
                return res.json()
            })
            .then(dogs => {
                this.setState({
                    dogs: dogs
                })
            })
            .catch(err => console.error(err.message))
    };

    async handleAdopt(e) {
        const options = {
            method: 'DELETE'
          }
            const response = await fetch(`${config.API_ENDPOINT}/api/dogs`, options)
            const response1 = await fetch(`${config.API_ENDPOINT}/api/users`)
            const response2 = await fetch(`${config.API_ENDPOINT}/api/dogs`)
            const json = await response.json()
            const json2 = await response2.json()
            const json1 = await response1.json()
            this.props.user(json1)
            this.setState({
              adopter: json,
              dogs: json2
            })

    }

    firstDog(arr) {
        if (arr.length > 0) {
            return (
                <li key={arr[0].id}>
                    <img src={arr[0].imageURL} alt={arr[0].imageDescription} />
                    <div><strong>Name:</strong>  {arr[0].name}</div>
                    <div><strong>Breed:</strong>  {arr[0].breed}</div>
                    <div><strong>Sex:</strong>   {arr[0].sex}</div>
                    <div><strong>Age:</strong>   {arr[0].age}</div>
                    <div><strong>Story:</strong> {arr[0].story}</div>
                    <button className='adoption-button' onClick={() => this.handleAdopt()}>Adopt me!</button>
                </li>
            );
        }
    }

    render() {

        function displayDogs(arr) {
            const data = arr.map(i => {
                return (
                    <li key={i.id}>
                        <img className='cannot' src={i.imageURL} alt={i.imageDescription} />
                    </li>
                );
            })
            return data
        }

        return (
            <div className={`dog-results ${this.props.toggle ? 'hidden' : ''}`}>
                <div className='dog-in-queue'>
                </div>
                <ul>
                    {this.state.dogs.length > 0 && this.firstDog(this.state.dogs)}
                </ul>
                <ul className='other-dogs'>
                    {this.state.dogs.length > 0 ? displayDogs(this.state.dogs) : <h3>There are no more dogs to adopt</h3>}
                </ul>
            </div>
        )
    }
}

export default DogSearch;