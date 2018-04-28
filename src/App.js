import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar.js';
import Yelp from './util/Yelp.js';

const business = {

};

const businesses = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    };
    this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;