import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CatSearch from './CatSearch';
import DogSearch from './DogSearch';
import config from '../config';
import AdoptionContext from '../adoption-context/AdoptionContext';
import './AdoptionSearch.css';
class AdoptionSearch extends Component {
    static contextType = AdoptionContext;

    constructor(props) {
        super(props)
        this.state = {
            toggle: true,
            toggleDog: true,
            users: [],
            dog: '',
            cat: '',
            adoptedAnimals: []
        }
    }

    async componentDidMount() {
        const res = await fetch(`${config.API_ENDPOINT}/api/users`)
        const json = await res.json();

        this.setState({
            users:json
        })

    }

    handleOnClick() {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    handleOnClickDog() {
        this.setState({
            toggleDog: !this.state.toggleDog
        })
    }

    handlesUsers(arr) {
        this.setState({ users: arr })
    }


    render() {
            
        return (
            <div className="adoption-page">
                <h2>{this.state.users.length > 0 && this.state.users[0].user}, it is your turn!</h2>
                <button className='adoption-button-link'><Link to='/adopted' className='adoption-link'>See Adopted Animals</Link></button>
                <div className='adoption-button-container'>                    
                    <button className='adoption-button' type="submit" onClick={() => this.handleOnClick()}>Cats</button>
                    <button  className='adoption-button' type="submit" onClick={() => this.handleOnClickDog()}>Dogs</button>
                </div>


                <div className="search-results">
                    <CatSearch
                        user={(e) => this.handlesUsers(e)}
                        toggle={this.state.toggle}
                    />
                    <DogSearch
                        user={(e) => this.handlesUsers(e)}
                        toggle={this.state.toggleDog}
                    />
                </div>

            </div>
        )
    }
}

export default AdoptionSearch;