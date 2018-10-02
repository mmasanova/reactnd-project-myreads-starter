import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import BookDetail from './BookDetail';

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: {
      currentlyReading: { 
        name: 'Currently Reading',
        books: []
      },
      wantToRead: {
        name: 'Want to Read',
        books: []
      },
      read: {
        name: 'Read',
        books: []
      }
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState((prevState) => {
        let shelves = prevState.shelves;

        books.forEach(book => {
          if (Object.keys(shelves).indexOf(book.shelf) !== -1) {
            shelves[book.shelf].books.push(book.id);
          } 
        });

        return {
          books: books,
          shelves: shelves
        };
      });
    });
  }

  updateBookShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState((prevState) => {
        const bookIndex = Object.keys(prevState.books)
                                .findIndex(key => prevState.books[key].id === book.id);

        if (bookIndex !== -1) {
          const prevShelf = prevState.books[bookIndex].shelf;

          if (Object.keys(prevState.shelves).indexOf(prevShelf) !== -1) {
            const prevShelfBookIndex = prevState.shelves[prevShelf].books.indexOf(book.id);

            if (prevShelfBookIndex !== -1) {
              prevState.shelves[prevShelf].books.splice(prevShelfBookIndex, 1);
            }
          }
          
          prevState.books[bookIndex].shelf = shelf;
        } else {
          book.shelf = shelf;
          prevState.books.push(book);
        }
         
        if (Object.keys(prevState.shelves).indexOf(shelf) !== -1) {
          prevState.shelves[shelf].books.push(book.id);
        }
         
        return (prevState);
      });
    });
  }

  render() {
    const { shelves, books } = this.state;

    return (
      <div className="app">
        <Route 
          path="/search" 
          render={(props) => (
            <SearchBooks
              {...props}
              books={books}
              shelves={shelves}
              onSelectShelf={this.updateBookShelf}
            />
          )}
        />
        <Route exact path="/" render={() => (
            <ListBooks
              books={books}
              onSelectShelf={this.updateBookShelf}
              shelves={shelves}
            />
          )}
        />
        <Route
          path="/book/:bookId"
          render={(props) => (
            <BookDetail
              {...props}
              shelves={shelves}
              onSelectShelf={this.updateBookShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;