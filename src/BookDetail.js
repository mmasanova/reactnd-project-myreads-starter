import React, { Component} from 'react';
import * as BooksAPI from './BooksAPI';
import BookDetailHeader from './BookDetailHeader';
import Book from './Book';

class BookDetail extends Component {
	state = {
		book: {}
	}

	componentDidMount() {
    BooksAPI.get(this.props.match.params.bookId).then((book) => {
      this.setState({
				book: book
      });
    });
  }

	render() {
		const { book } = this.state;
		const { shelves, onSelectShelf, location } = this.props;
		const parentPath = (location.state.fromSearch) ? '/search' : '/';
		
		return (
			<div id="book-detail">
				<BookDetailHeader 
					title="Book Detail"
					parentPath={parentPath}
					query={location.state.query}
				/>
				<Book 
					onSelectShelf={onSelectShelf}
					book={book}
					shelves={shelves}
					isBookDetail={true}
				/>
				<div className="book-info">
					<h2>{book.title}</h2>
					<h4 className="book-authors">{book.authors && 'by ' + book.authors.join(', ')}</h4>
					<h3>{book.subtitle}</h3>
					<p>{book.description}</p>
					{ book.title && 
						<ul>
							<li key="authors"><span>Author/s: </span>{book.authors && book.authors.join(', ')}</li>
							<li key="publisher"><span>Publisher: </span>{book.publisher || 'n/a'}</li>
							<li key="publishedDate"><span>Published Date: </span>{book.publishedDate || 'n/a'}</li>
							<li key="categories"><span>Categories: </span>{(book.categories && book.categories.join(' ,')) || 'n/a'}</li>
							<li key="pages"><span>Pages: </span>{book.pageCount || 'n/a'}</li>
							{ book.industryIdentifiers && book.industryIdentifiers.map(identifier => (
									<li key={identifier.type}><span>{identifier.type}: </span>{identifier.identifier}</li>
								)
							)}
						</ul>
					}
				</div>
			</div>
		);
	}
}

export default BookDetail;