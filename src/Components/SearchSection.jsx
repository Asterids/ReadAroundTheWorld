import React, { Component } from 'react';


export default class SearchSection extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div id="search">
        <div className="searchInputs">
          <input type="search" className="placeNameInput" name="placeNameInput" placeholder="Enter a city or town..." />
          <br />
          <button type="submit" className="searchButton" name="searchButton">Search</button>
        </div>
        <div className="recentSearches">
          <h3>Recent Searches</h3>
          <ol>
            <li>Hamburg, Germany</li>
            <li>Beirut, Lebanon</li>
            <li>Sao Paolo, Brazil</li>
            <li>Punta Cana, Dominican Republic</li>
            <li>Nashville, Tenessee</li>
          </ol>
        </div>
      </div>
    );
  }
}
