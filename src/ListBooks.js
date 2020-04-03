import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book.js';

class ListBooks extends Component {


  onChangeBookShelf = ({selectedShelf, book}) => {
    this.props.onChangeBookShelf({selectedShelf, book});
  }

  render() {
    const { books } = this.props;
    const currentlyReading = books.filter(b => b.shelf === 'currentlyReading');
    const wantToRead = books.filter(b => b.shelf === 'wantToRead');
    const read = books.filter(b => b.shelf === 'read');
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {currentlyReading.map(book => (
                  <Book onChangeBookShelf={ ({selectedShelf, book}) => this.onChangeBookShelf({selectedShelf, book})} book={book} key={book.id}/>
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {wantToRead.map(book => (
                  <Book onChangeBookShelf={ ({selectedShelf, book}) => this.onChangeBookShelf({selectedShelf, book})} book={book} key={book.id}/>
                ))}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {read.map(book => (
                  <Book onChangeBookShelf={ ({selectedShelf, book}) => this.onChangeBookShelf({selectedShelf, book})} book={book} key={book.id}/>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <Link to="/search" className="open-search">
          <button>Add a book</button>
        </Link>
      </div>
    )
  }
}

export default ListBooks;