Bookmate is a simple web application for book enthusiasts. Users can sign in, register for an account, view a list of books, add new books, view book details, edit book information, delete books, and manage favorites.

## Features
Authentication: Users can log in or register for an account.
Home Page: Displays a paginated list of books with a search feature and load more functionality.
Add Page: Allows users to add new books to the collection.
Detail Page: Shows detailed information about a selected book, with options to edit or delete the book.
Favorites Page: Displays a list of user-selected favorite books with the ability to remove books from favorites.
Technologies Used
Frontend: Vite, React, React Router DOM
Backend: Node.js, Express.js with PostgreSQL database
Authentication: JSON Web Tokens (JWT)
Styling: Tailwind CSS
## Getting Started
Follow these instructions to get the project up and running on your local machine.

## Prerequisites
Node.js and npm installed on your machine
PostgreSQL installed and running locally or a remote instance
Access to the backend server (not provided in this README)
## Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your/repository.git
cd repository-name
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following environment variables:

plaintext
Copy code
VITE_API_URL=http://localhost:5000
Replace http://localhost:5000 with your backend API URL.

## Running the App
Start the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:5173 to view the app.

## Usage
Sign In: Navigate to /login to log in with your credentials.
Register: Navigate to /register to create a new account.
Home Page: Browse through the list of books, search for specific books, and load more books.
Add Page: Add new books by filling out the form and submitting.
Detail Page: Click on a book to view detailed information, edit the book details, or delete the book.
Favorites Page: View and manage your favorite books.
Contributing
Contributions are welcome! Fork the repository and submit a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details