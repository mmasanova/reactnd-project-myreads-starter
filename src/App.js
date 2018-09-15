import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBookShelf = (newShelf, id) => {
    this.setState((prevState) => {
      const bookIndex = Object.keys(prevState.books).findIndex(key => prevState.books[key].id === id)
      
      if (bookIndex !== -1) prevState.books[bookIndex].shelf = newShelf

      return (prevState)
    })
  }

  render() {
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
      <div className="app">
        <Route 
          path="/search" 
          render={() => (
            <SearchBooks
              books={this.state.books}
              shelves={shelves}
              onSelectShelf={this.updateBookShelf}
            />
          )}
        />
        <Route exact path="/" render={() => (
            <ListBooks
              books={this.state.books}
              onSelectShelf={this.updateBookShelf}
              shelves={shelves}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
