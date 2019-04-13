import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
class HomePage extends Component {
    render () {
        return (
            <div className="landing-page">
              <h2>This is where the magic happens</h2>
              <p className='landing-content'>
                We help pets find their forever home. 
                If you are looking for the perfect addition to your family click the button below to start your search.
                Our pet shelter uses the first in, first out adoption process, so 
                the pets that have been with us the longest are adopted first.  
                </p>
              <div className="start-button">
                <Link to='/search'><button className='landing-button' type='submit'>Start Here</button></Link>
              </div>
            </div>
        )
    }
}

export default HomePage;