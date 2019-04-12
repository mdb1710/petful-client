import React, { Component } from 'react';

import './DogSearch.css'
import Queue from '../helpers/PetQueue';


class DogSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dogs: [],
            dogQueue: ''
        }
    }

    componentDidMount() {
        fetch(`http://localhost:8000/api/dogs`)
            .then(res => res.json())
            .then(dogs => {
                this.setState({
                    dogs: dogs,
                    dogQueue: this.dogsToQueue(dogs)
                })
            })
    };

    dogsToQueue(dogs) {
        let dogQueue = new Queue();
        for (let i = 0; i < dogs.length; i++) {
            dogQueue.enqueue(dogs[i]);
        }
        return dogQueue;
    }

    render() {

        function peek(queue) {
            return queue.first;
        }

        function isEmpty(queue) {
            return queue.first && queue.last ? true : false;
        }

        function display(queue) {
            let temp = [];
            while (queue.first !== null) {
                temp.push(queue.dequeue());
            }
            for (let i = 0; i < temp.length; i++) {
                queue.enqueue(temp[i]);
            }
            return temp;
        }


        function displaysDogs(q) {
            let currNode = q.first;
            let html = []
            while (currNode !== undefined) {
                 
                    html.push(
                        <li key={currNode.data.id}>
                            <img src={currNode.data.imageURL} alt="dog-pic" />
                            <p>{currNode.data.name}</p>
                            <p>{currNode.data.breed}</p>
                            <p>{currNode.data.story}</p>
                            <p>{currNode.data.adopted}</p>
                        </li>
                    )
                

                currNode = currNode.next
            }
            return html;
        }

        function adoptedDog(q) {
            let currNode = q.first;
            let html = []

            while (currNode !== undefined) {
                if (!currNode.data.adopted) {
                    return(
                        <li key={currNode.data.id}>
                            <img src={currNode.data.imageURL} alt="dog-pic" />
                            <p>{currNode.data.name}</p>
                            <p>{currNode.data.breed}</p>
                            <p>{currNode.data.story}</p>
                            <p>{currNode.data.adopted}</p>
                            <button value={currNode.data.id}>Adopt</button>
                        </li>
                    )
                }

                currNode = currNode.next
            }
            return ;


        }
        return (
            <div className={`dog-results ${this.props.toggle ? 'hidden' : ''}`}>
            {peek(this.state.dogQueue) && adoptedDog(this.state.dogQueue)}
                <ul>
                    {peek(this.state.dogQueue) && displaysDogs(this.state.dogQueue)}
                </ul>
            </div>
        )
    }
}

export default DogSearch;