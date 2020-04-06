import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  changeBookShelf = ({ book, selectedShelf }) => {
    const books = this.state.books;
    const matchedIdx = books.indexOf(book);
    if (matchedIdx < 0) {
      book.shelf = selectedShelf;
      this.setState({
        books: [...this.state.books, book]
      });
    } else {
      books[matchedIdx].shelf = selectedShelf;
      this.setState({ books });
    }
    BooksAPI.update(book, selectedShelf);
  }

  render() {
    return (
      <div className="app">
        <Route
          path={"/search"}
          render={({ history }) => (
            <SearchBooks
              booksAlreadyAdded={this.state.books}
              onChangeBookShelf={({ book, selectedShelf }) => {
                this.changeBookShelf({ book, selectedShelf });
                history.push("/");
              }}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={_ => (
            <ListBooks
              onChangeBookShelf={this.changeBookShelf}
              books={this.state.books}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp