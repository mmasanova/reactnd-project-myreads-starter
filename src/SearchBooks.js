import React, { Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'
import BookSearchBar from './BookSearchBar'

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
    const { query } = this.state

		return (
			<div className="search-books">
        <BookSearchBar
          query={query}
          onChange={this.searchBooks}
        />
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