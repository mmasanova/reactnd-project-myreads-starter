import React, { Component} from 'react'
import * as BooksAPI from './BooksAPI'

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
	
		return (
			<div>{book.title}</div>
		)
	}
}

export default BookDetail