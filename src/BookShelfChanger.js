import React, { Component} from 'react'

class BookShelfChanger extends Component {
	render() {
		const { id, selectedShelf, onSelectShelf, shelves } = this.props

		return (
			<div className="book-shelf-changer">
        <select 
          value={selectedShelf}
          onChange={(event) => onSelectShelf(event.target.value, id)}>
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