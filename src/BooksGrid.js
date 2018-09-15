import React, { Component} from 'react'
import Book from './Book'

class BooksGrid extends Component {
	render() {
		const { books, onSelectShelf, shelves } = this.props

		return (
			<ol className="books-grid">
				{
					books.map(book => (
						<Book 
							key={book.id}
							book={book}
							onSelectShelf={onSelectShelf}
							shelves={shelves}
						/>
					))
				}
      </ol>
		)
	}
}

export default BooksGrid