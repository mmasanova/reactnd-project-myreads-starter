import React, { Component} from 'react';

class BookShelfChanger extends Component {
	render() {
		const { book, onSelectShelf, shelves } = this.props;
    const shelfKeys = Object.keys(shelves);
    let selectedShelf = 'none';

    for (let shelfX = 0; shelfX < shelfKeys.length; shelfX++) {
      const shelf = shelves[shelfKeys[shelfX]];

      if (shelf.books.indexOf(book.id) !== -1) {
        selectedShelf = shelfKeys[shelfX];
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
              Object.keys(shelves).map(shelfKey => (
                <option 
                  value={shelfKey}
                  key={shelfKey}>
                  {shelves[shelfKey].name}
                </option>
              ))
            }
            <option value="none">None</option>
        </select>
      </div>
		);
	}
}

export default BookShelfChanger;