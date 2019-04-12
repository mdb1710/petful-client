import React, { Component } from 'react';

class HomePage extends Component {
    render () {
        return (
            <div className="landing-page">
              <h2>This is where the magic happens</h2>
              <p>We help pets find their forever home. If you are looking for the perfect addition to your family click the button below to start your search.</p>
              <div className="start-button">
                <button type='submit'>Start Here</button>
              </div>
            </div>
        )
    }
}

export default HomePage;