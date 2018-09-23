import React, { Component} from 'react'
import { Link } from 'react-router-dom'

class BookDetailHeader extends Component {
	render() {
		return (
			<div className="book-detail-header">
				<Link className="close-book-detail" to="/">Close</Link>
				<div className="book-detail-title">
	        <h1>{this.props.title}</h1>
	      </div>
	    </div>
		)
	}
}

export default BookDetailHeader