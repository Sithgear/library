const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:adminRoutes');

const adminRouter = express.Router();

const books = [
  {
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

function router() {
  adminRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url, { useNewUrlParser: true });
          debug('Connect correctly to server');

          const db = client.db(dbName);

          const response = await db.collection('books').insertMany(books);
          res.json(response);
        } catch (err) {
          debug(err.stack);
        }

        client.close();
      }());
    });
  return adminRouter;
}

module.exports = router;
