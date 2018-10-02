import React, { Component} from 'react';
import * as BooksAPI from './BooksAPI';
import BooksGrid from './BooksGrid';
import BookSearchBar from './BookSearchBar';

class SearchBooks extends Component {
  state = {
    filteredBooks: [],
    query: (this.props.location.state) ? this.props.location.state.query : ''
  }

  componentDidMount() {
    if (this.state.query) this.searchBooks(this.state.query);
  }

  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((books = []) => {
        if (!books.error) {
          books.map(book => book.shelf = 'none');

          this.setState({
            filteredBooks: books
          });
        }
        else {
          this.setState({
            filteredBooks: []
          });
        }
      });
    } else {
      this.setState({
        filteredBooks: []
      });
    }

    this.setState({ query });
  }

	render() {
    const { shelves, onSelectShelf } = this.props;

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
            fromSearch={true}
            query={this.state.query}
          />
        </div>
      </div>
		);
	}
}

export default SearchBooks;