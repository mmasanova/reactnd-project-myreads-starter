import React, { Component} from 'react';
import BooksGrid from './BooksGrid';

class BookShelf extends Component {
	render() {
		const { books, name, shelfId, onSelectShelf, shelves } = this.props;
		const shelfBooks = books.filter(book => book.shelf === shelfId);

		return (
			<div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <BooksGrid 
            books={shelfBooks}
            shelves={shelves}
            onSelectShelf={onSelectShelf} 
          />
        </div>
      </div>
		);
	}
}

export default BookShelf;