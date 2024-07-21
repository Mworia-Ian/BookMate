import React from 'react';

function BookForm({ book, onChange, onSubmit, isEditing }) {
  return (
    <form onSubmit={onSubmit} className="mb-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Edit Book' : 'Add New Book'}</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="title"
          value={book.title}
          onChange={onChange}
          placeholder="Title"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="author"
          value={book.author}
          onChange={onChange}
          placeholder="Author"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="genre"
          value={book.genre}
          onChange={onChange}
          placeholder="Genre"
          className="p-2 border rounded"
          required
        />
        <input
          type="date"
          name="publishedDate"
          value={book.publishedDate}
          onChange={onChange}
          className="p-2 border rounded"
          required
        />
        <input
          type="url"
          name="coverImage"
          value={book.coverImage}
          onChange={onChange}
          placeholder="Cover Image URL"
          className="p-2 border rounded col-span-2"
        />
      </div>
      <button type="submit" className={`mt-4 bg-${isEditing ? 'green' : 'blue'}-500 text-white px-4 py-2 rounded hover:bg-${isEditing ? 'green' : 'blue'}-600`}>
        {isEditing ? 'Save Changes' : 'Add Book'}
      </button>
    </form>
  );
}

export default BookForm;
