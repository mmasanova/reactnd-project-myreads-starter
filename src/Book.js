import React, { Component} from 'react';
import BookShelfChanger from './BookShelfChanger';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

class Book extends Component {
	render() {
		const { book, onSelectShelf, shelves, fromSearch, query, hideText } = this.props;
    
		return (
      <div className="book">
        <div className="book-top">
          <Link
            to={{
              pathname: `/book/${book.id}`,
              state: { fromSearch: fromSearch, query: query }
            }}
            className="book-cover" 
            style={{ 
            width: 128, 
            height: 193, 
            backgroundImage: book.imageLinks ? `url('${book.imageLinks.smallThumbnail}')` : null
            }}>
            More about {book.title}
          </Link>
          <BookShelfChanger 
            onSelectShelf={onSelectShelf}
            book={book}
            shelves={shelves}
          />
        </div>
        { !hideText && <div className="book-title">{book.title}</div> }
        { !hideText && <div className="book-authors">{book.authors && book.authors.join(', ')}</div> }
        <ReactStars 
          className="rating"
          count={5} 
          value={book.averageRating || 0}
          edit={false}
          size={16}
        />
        <div className="ratingCount">{book.ratingsCount || 0}</div>
      </div>
		);
	}
}

export default Book;