import React, { Component } from 'react';

const BookList = (props) => {

  const { books } = props;
  const urlDomain = "https://www.mappit.net";

  books.forEach(function(book) {
    book.url = urlDomain + book.url;
  });

  return (
    <div id="bookList">
      <ul>
        {
          books && books.map(book => (
            <li key={book.title}><b>"<a href={book.url} target="_blank">{book.title}</a>"</b> <br /> by {book.author}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default BookList;
