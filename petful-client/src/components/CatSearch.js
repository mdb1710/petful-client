import React, { Component } from "react";
import "./CatSearch.css";
import config from "../config";

class CatSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: this.props.toggle,
      cats: [],
      users: [],
      adopter: ""
    };
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/cats`)
      .then(res => {
        if (!res.ok) throw new Error(res.message);
        return res.json();
      })
      .then(cat => {
        this.setState({
          cats: cat
        });
      })
      .catch(err => console.error(err.message));

    fetch(`${config.API_ENDPOINT}/api/users`)
      .then(res => {
        if (!res.ok) throw new Error(res.message);
        return res.json();
      })
      .then(user => {
        this.setState({
          users: user
        });
      })
      .catch(err => console.error(err.message));
  }

  handleAdopt = async () => {
    const options = {
      method: "DELETE"
    };
    const response = await fetch(`${config.API_ENDPOINT}/api/cats`, options);
    const response1 = await fetch(`${config.API_ENDPOINT}/api/users`);
    const response2 = await fetch(`${config.API_ENDPOINT}/api/cats`);
    const json = await response.json();
    const json2 = await response2.json();
    const json1 = await response1.json();
    this.props.user(json1);
    this.setState({
      adopter: json,
      cats: json2
    });
  };

  firstCat(arr) {
    if (arr.length > 0) {
      return (
        <li key={arr[0].id}>
          <img src={arr[0].imageURL} alt={arr[0].imageDescription} />
          <div><strong>Name:</strong> {arr[0].name}</div>
          <div><strong>Breed:</strong> {arr[0].breed}</div>
          <div><strong>Sex:</strong> {arr[0].sex}</div>
          <div><strong>Age:</strong> {arr[0].age}</div>
          <div><strong>Story:</strong> {arr[0].story}</div>
          <button className='adoption-button'onClick={() => this.handleAdopt()}>Adopt me!</button>
        </li>
      );
    }
  }
  render() {
    function displayCats(arr) {
      const data = arr.map(i => {
        return (
          <li key={i.id}>
            <img className="cannot" src={i.imageURL} alt={i.imageDescription} />
          </li>
        );
      });
      return data;
    }

    return (
      <div className={`cat-results ${this.props.toggle ? "hidden" : ""}`}>
        <ul>{this.state.cats.length > 0 && this.firstCat(this.state.cats)}</ul>
        <ul className='other-cats'>
          {this.state.cats.length > 0 ? (
            displayCats(this.state.cats)
          ) : (
            <h3>There are no more cats to adopt</h3>
          )}
        </ul>
      </div>
    );
  }
}

export default CatSearch;
