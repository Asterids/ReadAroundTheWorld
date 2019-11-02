import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Read Around the World Book Search
      </header>
      <div className="App-main">
        <p>Herro, I am Main!!</p>
        <br />
        <section className="components">
          <div id="search">
            <input type="search" name="placeNameInput" placeholder="Search for a place..." />
            <br />
            <button type="submit" name="searchButton">Search</button>
          </div>
          <br />
          <div id="bookList">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
