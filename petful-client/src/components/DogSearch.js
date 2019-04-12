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
        this.handleAdopt = this.handleAdopt.bind(this)
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
    
    handleAdopt = (e) =>{
        console.log(e)
    }


    dogsToQueue(dogs) {
        let dogQueue = new Queue();
        for (let i = 0; i < dogs.length; i++) {
            dogQueue.enqueue(dogs[i]);
        }
        return dogQueue;
    }

    adoptedDog(q) {
        let currNode = q.first;

        while (currNode !== undefined) {
            if (!currNode.data.adopted) {
                return(
                    <li key={currNode.data.id}>
                        <img src={currNode.data.imageURL} alt="dog-pic" />
                        <p>{currNode.data.name}</p>
                        <p>{currNode.data.breed}</p>
                        <p>{currNode.data.story}</p>
                        <p>{currNode.data.adopted}</p>
                        <button 
                        value={currNode.data.id} 
                        onClick={(e) => this.handleAdopt(e.target.value)}
                        >
                        Adopt
                        </button>
                    </li>
                )
            }

            currNode = currNode.next
        }
        return ;


    }

    /*
                    {peek(this.state.dogQueue) && displaysDogs(this.state.dogQueue)}
                    {peek(this.state.dogQueue) && this.adoptedDog(this.state.dogQueue)}

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



    */

    
    render() {

        const dogList = this.state.dogs.map(dog => {
            if(!dog.adopted){
                return(
                
                    <li key={dog.id}>
                                <img src={dog.imageURL} alt="dog-pic" />
                                <p>{dog.name}</p>
                                <p>{dog.breed}</p>
                                <p>{dog.story}</p>
                                
                                <button value={dog.id} >Adopt</button>
                    </li>           
                )
            } else {
                return(
                
                    <li key={dog.id}>
                                <img src={dog.imageURL} alt="dog-pic" />
                                <p>{dog.name}</p>
                                <p>{dog.breed}</p>
                                <p>{dog.story}</p>
                                <p>{dog.adopted}</p>
                                
                    </li>           
                )
            }
        })

        console.log(dogList);

        // const availableDog = this.state.dogs.map(dog => {
        //     while(dog.ad)
        // })

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


        

        

       
        return (
            <div className={`dog-results ${this.props.toggle ? 'hidden' : ''}`}>
               <div className='dog-in-queue'>

               </div>
           
                <ul>
                
                    {dogList}
                </ul>
            </div>
        )
    }
}

export default DogSearch;