import React, { Component} from 'react'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
	render() {
		const { book, onSelectShelf, shelves } = this.props

		return (
			<li>
        <div className="book">
          <div className="book-top">
            <div 
            	className="book-cover" 
            	style={{ 
            		width: 128, 
            		height: 193, 
            		backgroundImage: book.imageLinks ? `url('${book.imageLinks.smallThumbnail}')` : null
            	}}>
            </div>
            <BookShelfChanger 
              onSelectShelf={onSelectShelf}
              book={book}
              shelves={shelves}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
        </div>
      </li>
		)
	}
}

export default Book