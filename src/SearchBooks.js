import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'

class SearchBooks extends Component {
  state = {
    query: '',
    filteredBooks: []
  }

  searchBooks = (query) => {
    BooksAPI.search(query).then((books = []) => {
      this.setState({
        filteredBooks: books,
        query: query
      })
    })
  }

	render() {
    const { shelves, onSelectShelf } = this.props

		return (
			<div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
           		<input 
                type="text" 
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.searchBooks(event.target.value) }
              />
          </div>
        </div>
        <div className="search-books-results">
        	<BooksGrid 
            books={this.state.filteredBooks}
            shelves={shelves}
            onSelectShelf={onSelectShelf}
          />
        </div>
    	</div>
		)
	}
}

export default SearchBooks