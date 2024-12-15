# nuxt-node-books-api
# Nuxt-Node Books API

This is a simple project built to learn and test the integration of a **Nuxt.js front-end** with a **Node.js back-end**. The project demonstrates how to fetch data from an API (books data) and display it on a web page.

### Features:
- **Node.js API** serving a list of books.
- **Nuxt.js** for rendering and displaying books.
- **Responsive design** to display books in a grid layout.

### Project Setup:

1. **Run the back-end**:
   - Navigate to the back-end folder (where `app.js` is located).
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the back-end server:
     ```bash
     node app.js
     ```
   - The back-end API will run on `http://localhost:5000`.

2. **Run the front-end**:
   - Navigate to the front-end folder.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the front-end application:
     ```bash
     npm run dev
     ```
   - The front-end will be available at `http://localhost:3000`.

### How to Use:
- After starting both the back-end and front-end servers, you can visit the front-end app at `http://localhost:3000`.
- The front-end will fetch and display a list of books from the back-end.

### Technologies Used:
- **Node.js** for the back-end.
- **Nuxt.js** for the front-end.
- **CSS Grid** for layout.

### License:
MIT License
