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
          component={SearchBooks} 
          books={this.state.books} 
        />
        <Route exact path="/" render={() => (
            <ListBooks
              books={this.state.books}
              shelves={shelves}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
