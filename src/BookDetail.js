import React, { Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BookDetailHeader from './BookDetailHeader'
import Book from './Book'

class BookDetail extends Component {
	state = {
		book: {}
	}

	componentDidMount() {
    BooksAPI.get(this.props.match.params.bookId).then((book) => {
      this.setState({
      	book: book
      })
    })
  }

	render() {
		const { book } = this.state
		const { shelves, onSelectShelf, location } = this.props
		const parentPath = (location.state.fromSearch) ? '/search' : '/'

		return (
			<div id="book-detail">
				<BookDetailHeader 
					title={book.title}
					parentPath={parentPath}
					query={location.state.query}
				/>
				<Book 
					onSelectShelf={onSelectShelf}
					book={book}
					shelves={shelves}
				/>
				<div className="book-info">
					<p>{book.description}</p>
				</div>
			</div>
		)
	}
}

export default BookDetail