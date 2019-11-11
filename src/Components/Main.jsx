import React, { Component } from 'react';
import SearchSection from './SearchSection.jsx';
import BookList from './BookList.jsx';
import axios from 'axios';


export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      booksFound: [
        {
        url: "/bookmap/books/265/sense-and-sensibility/",
        title: "Sense and Sensibility",
        author: "Jane Austen"
        },
        {
        url: "/bookmap/books/275/nicholas-nickleby/",
        title: "Nicholas Nickleby",
        author: "Charles Dickens"
        },
        {
        url: "/bookmap/books/24146/hi-there-boys-and-girls-americas-local-childre/",
        title: "Hi There, Boys and Girls: America's Local Children's TV Programs",
        author: "Tim Hollis"
        },
        {
        url: "/bookmap/books/3560/bare-bones/",
        title: "Bare Bones",
        author: "Kathy Reichs"
        },
        {
        url: "/bookmap/books/9340/the-bride-bed/",
        title: "The Bride Bed",
        author: "Linda Needham"
        },
        {
        url: "/bookmap/books/10726/gilt-by-association/",
        title: "Gilt By Association",
        author: "Tamar Myers"
        },
        {
        url: "/bookmap/books/10805/nightmare-in-shining-armor/",
        title: "Nightmare in Shining Armor",
        author: "Tamar Myers"
        }
      ]
    }
  }

// STEP 1: Call Geocoding API to transform user input into lat/long coordinates
// STEP 2: Call the BookSearch API using the coordinates to return list of books

  // submitSearchText(userInput) {
  //   axios.get('/geocoding', {
  //     location: userInput
  //   })
  //   .then((res1) => {
  //     return axios.get('/books', {
  //       lat: res1.lat,
  //       lng: res1.lng,
  //       radius: 10
  //     })
  //   })
  //   .then((res2) => res2.data)
  //   .then(books => {
  //     this.setState({
  //       booksFound: books
  //     })
  //   })
  //   .catch(err => {
  //     console.error('error');
  //     console.error(err);
  //   })
  // }


  render () {
    return (
      <div className="App-main">
        <p>Use this tool to find books that are set in a particular place in the world.</p>
        <br />
        <section className="components">
          <SearchSection submitSearchText={this.submitSearchText} />
          <br />
          <BookList books={this.state.booksFound} />
        </section>
      </div>
    );
  }
}
