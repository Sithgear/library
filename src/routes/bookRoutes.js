const express = require('express');

const bookRouter = express.Router();

function router(nav) {
  const books = [{
    title: 'Star Wars Episode IV: A New Hope',
    genre: 'sci-fi',
    author: 'George Lucas',
    read: false
  },
  {
    title: 'Star Wars Episode V: Empire Strikes Back',
    genre: 'Sci-fi',
    author: 'George Lucas',
    read: false
  },
  {
    title: 'Star Wars Episode VI: Return of the Jedi',
    genre: 'Sci-fi',
    author: 'George Lucas',
    read: false
  },
  {
    title: 'Clown and the Shoe',
    genre: 'Fistory',
    author: 'Bozo Clown',
    read: false
  },
  {
    title: 'The Boy Boy Sucked',
    genre: 'Fantasy',
    author: 'Some Dude',
    read: false
  }
  ];

  bookRouter.route('/')
    .get((req, res) => {
      res.render(
        'bookListView', {
          nav,
          title: 'Library',
          books
        }
      );
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render(
        'bookView', {
          nav,
          title: 'Library',
          book: books[id]
        }
      );
    });
  return bookRouter;
}


module.exports = router;
