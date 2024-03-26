const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Book {
  constructor(titre, author, price, imageUrl, description) {
    this.titre = titre;
    this.author = author;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}
