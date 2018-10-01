import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
	render() {
		const { books, onSelectShelf, shelves } = this.props

		return (
			<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
          <div className="list-books-content">
        	{
						Object.keys(shelves).map(shelfKey => {
							const shelf = shelves[shelfKey]

							return (
								<BookShelf 
									books={books}
									shelves={shelves}
									name={shelf.name}
									key={shelfKey}
									shelfId={shelfKey}
									onSelectShelf={onSelectShelf}
								/>
						)})
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