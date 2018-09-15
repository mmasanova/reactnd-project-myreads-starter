import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
	render() {
		const { books, onSelectShelf } = this.props

		const shelves = [ 
      { 
        id: 'currentlyReading',
        name: 'Currently Reading' 
      },
      { 
        id: 'wantToRead',
        name: 'Want to Read'
      },
      {
        id: 'read',
        name: 'Read'
      }
    ]

		return (
			<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <div className="list-books-content">
        	{
						shelves.map(shelf => (
							<BookShelf 
								books={books}
								shelves={shelves}
								name={shelf.name}
								key={shelf.id}
								id={shelf.id}
								onSelectShelf={onSelectShelf}
							/>
						))
        	}
      		</div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
	    )
	}
}

export default ListBooks