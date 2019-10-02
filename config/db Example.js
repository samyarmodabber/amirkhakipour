/**
 * @version 2.0.0
 * @author Samyar modabber
 */
const Sequelize = require('sequelize');
require('dotenv').config()
module.exports = new Sequelize(process.env.DB_URL)
