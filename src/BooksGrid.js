import React, { Component} from 'react'
import Book from './Book'

class BooksGrid extends Component {
	render() {
		const { books, onSelectShelf, shelves } = this.props

		return (
			<ol className="books-grid">
				{
					books.map(book => (
						<li key={book.id}>
							<Book 
								book={book}
								onSelectShelf={onSelectShelf}
								shelves={shelves}
							/>
						</li>
					))
				}
      </ol>
		)
	}
}

export default BooksGrid