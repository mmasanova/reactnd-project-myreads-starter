import React, { Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'
import BookSearchBar from './BookSearchBar'

class SearchBooks extends Component {
  state = {
    filteredBooks: []
  }

  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((books = []) => {
        if (!books.error) {
          this.setState({
            filteredBooks: books
          })
        }
        else {
          this.setState({
            filteredBooks: []
          })
        }
      })
    } else {
      this.setState({
        filteredBooks: []
      })
    }
  }

	render() {
    const { shelves, onSelectShelf } = this.props

		return (
			<div className="search-books">
        <BookSearchBar
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