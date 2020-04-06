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
    const shelves = [
      {title: 'Currently Reading', books: currentlyReading},
      {title: 'Want To Read', books: wantToRead},
      {title: 'Read', books: read},    
    ]
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map(shelve => (
          <div key={shelve.title} className="bookshelf">
            <h2 className="bookshelf-title">{shelve.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {shelve.books.map(book => (
                  <Book
                    key={book.id}
                    onChangeBookShelf={ ({selectedShelf, book}) => this.onChangeBookShelf({selectedShelf, book})}
                    book={book}/>
                ))}
              </ol>
            </div>
          </div>  
          ))}
        </div>
        <Link to="/search" className="open-search">
          <button>Add a book</button>
        </Link>
      </div>
    )
  }
}

export default ListBooks;