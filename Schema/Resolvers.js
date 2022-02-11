const { books } = require("../book");
const resolvers = {
  Query: {
    getAllBooks() {
      return books;
    },
  },
  Mutation: {
    createBook(parent, args) {
      const newBook = args;
      books.push(newBook);
      return newBook;
    },
  },
};

module.exports = { resolvers };
