import React, { Component} from 'react';
import Book from './Book';

class BooksGrid extends Component {
	render() {
		const { books, onSelectShelf, shelves, fromSearch, query } = this.props;

		return (
			<ol className="books-grid">
				{
					books.map(book => (
						<li key={book.id}>
							<Book 
								book={book}
								onSelectShelf={onSelectShelf}
								shelves={shelves}
								fromSearch={fromSearch}
								query={query}
							/>
						</li>
					))
				}
      </ol>
		);
	}
}

export default BooksGrid;