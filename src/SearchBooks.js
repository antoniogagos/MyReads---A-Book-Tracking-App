import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import SearchForm from './SearchForm'
import Book from './Book'

class SearchBooks extends Component {

  state = {
    books: [],
    noBooksMatchedQuery: false
  }

  onChangeBookShelf = ({ selectedShelf, book }) => {
    this.props.onChangeBookShelf({ selectedShelf, book });
  }

  fetchBooks = async ({ query }) => {
    if (query === '') {
      this.setState({ books: [] });
    } else {
      const res = await BooksAPI.search(query);
      const books = Boolean(res.error) ? [] : Array.isArray(res) ? res : res.items;
      books.forEach(nBook => {
        var alreadyAdded = this.props.booksAlreadyAdded.find(oBook => oBook.id === nBook.id);
        if (alreadyAdded) {
          Object.assign(nBook, alreadyAdded);
        }
      })
      this.setState({ noBooksMatchedQuery: Boolean(res.error), books });
    }
  }

  render() {
    const searchBooksList = this.state.books.map(book => {
      return (
        <Book
          book={book}
          key={book.id}
          onChangeBookShelf={({ selectedShelf, book }) => this.onChangeBookShelf({ selectedShelf, book })}
        />
      )
    })

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <SearchForm onChangeQuery={this.fetchBooks} />
          </div>
        </div>

        <div className="search-books-results">
          {this.state.noBooksMatchedQuery && (
            <div>There are no books with your search</div>
          )}
          <ol className="books-grid">
            {searchBooksList}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;