/**
 * @version 2.0.0
 * @author Samyar Modabber
 */
const Sequelize = require('sequelize');
const db = require('../config/db'); 
const Article = require('./Article');


const User = db.define('user', {
  //id, updatedAt, createdAt will add automaticly and the name of table will be pulural
  name: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  avatar: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.ENUM('admin', 'writer', 'user'),
    allowNull: false,
    defaultValue: 'user'
  },
  isActive: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
});

User.hasMany(Article);
module.exports = User;
