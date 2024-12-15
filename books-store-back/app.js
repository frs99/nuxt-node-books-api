const express = require('express');
const app = express();



const books = [
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "year": 1960
    },
    {
      "id": 3,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "year": 1925
    },
    {
      "id": 4,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "year": 1951
    },
    {
      "id": 5,
      "title": "Moby Dick",
      "author": "Herman Melville",
      "year": 1851
    }
]


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})

app.get("/", (req,res) => {
  res.send("Hello World im fares");
})


app.get("/api/books", (req,res) => {
  res.json(books);
})
