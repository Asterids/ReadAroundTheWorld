import React, { Component } from 'react';


export default class SearchSection extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div id="search">
        <input type="search" name="placeNameInput" placeholder="Enter a country, city, or town..." />
        <br />
        <button type="submit" name="searchButton">Search</button>
      </div>
    );
  }
}
