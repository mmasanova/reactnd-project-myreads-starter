import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import BookDetail from './BookDetail'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [
      { 
        id: 'currentlyReading',
        name: 'Currently Reading',
        books: []
      },
      { 
        id: 'wantToRead', 
        name: 'Want to Read',
        books: []
      },
      {
        id: 'read',
        name: 'Read',
        books: []
      }
    ]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState((prevState) => {
        let shelves = prevState.shelves

        books.forEach(book => {
          const shelfIndex = shelves.findIndex(shelf => shelf.id === book.shelf)
          if (shelfIndex !== -1) shelves[shelfIndex].books.push(book.id)  
        })

        return {
          books: books,
          shelves: shelves
        }
      })
    })
  }

  updateBookShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then((shelves) => {
      this.setState((prevState) => {
        const bookIndex = Object.keys(prevState.books).findIndex(key => prevState.books[key].id === book.id)
        
        if (bookIndex !== -1) {
          prevState.books[bookIndex].shelf = shelf
        } else {
          book.shelf = shelf
          prevState.books.push(book)
        }
         
        return (prevState)
      })
    })
  }

  render() {
    const { shelves, books } = this.state

    return (
      <div className="app">
        <Route 
          path="/search" 
          render={() => (
            <SearchBooks
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
    )
  }
}

export default BooksApp
