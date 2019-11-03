import React, { Component } from 'react';
import SearchSection from "./SearchSection.jsx";
import BookList from "./BookList.jsx";


export default class Main extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="App-main">
        <p>Use this tool to find books that are set in a particular place in the world.</p>
        <br />
        <section className="components">
          <SearchSection />
          <br />
          <BookList />
        </section>
      </div>
    );
  }
}
