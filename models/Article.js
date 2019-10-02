/**
 * @version 2.0.0
 * @author Samyar Modabber
 */
const Sequelize = require('sequelize');
const db = require('../config/db');

const Article = db.define(
  'article',
  {
    //id, updatedAt, createdAt will add automaticly and the name of table will be pulural 
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    isPublished: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  }
);


module.exports = Article;
