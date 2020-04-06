import React from 'react'
import SelectForm from './SelectForm';

const book = (props) => {
  const book = props.book;
  const bookAuthors = book.authors ? (book.authors.map((author, index) => {
    return ( <span key={index}>{author}</span> )
  })) : '';

  return (
    <li className="book">
      <div className="book-top">
        <div className="book-cover" style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : 'https://picsum.photos/128/193'})`
        }}>
        </div>
        <div className="book-shelf-changer">
          <SelectForm
            onChangeSelect={({ selectedShelf }) => props.onChangeBookShelf({ selectedShelf, book })}
            defaultSelectedShelf={book.shelf || 'none'}
          />
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{bookAuthors}</div>
    </li>
  )
};

export default book;