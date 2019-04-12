import React from 'react';

const AdoptionContext = React.createContext ({
    cats: [],
    dogs: [],
    adopted: false,
    taken: false,
    toggleCatSearch: () => {},
    toggleDogSearch: () => {},

})

export default AdoptionContext;