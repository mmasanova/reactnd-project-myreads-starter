import React, { Component} from 'react'

class BookShelfChanger extends Component {
	render() {
		const { book, onSelectShelf, shelves } = this.props
    let selectedShelf = 'none'

    for (let shelfX = 0; shelfX < shelves.length; shelfX++) {
      const shelf = shelves[shelfX]

      if (shelf.books.indexOf(book.id) !== -1) {
        selectedShelf = shelf.id
        break;
      }
    }

		return (
			<div className="book-shelf-changer">
        <select 
          value={selectedShelf}
          onChange={(event) => onSelectShelf(event.target.value, book)}>
            <option value="move" disabled>Move to...</option>
            {
              shelves.map(shelfOption => (
                <option 
                  value={shelfOption.id}
                  key={shelfOption.id}>
                  {shelfOption.name}
                </option>
              ))
            }
            <option value="none">None</option>
        </select>
      </div>
		)
	}
}

export default BookShelfChanger