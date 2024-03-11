const { Sequelize } = require('sequelize');

const db = new Sequelize('ecommerce', 'root', '!2]9olo9L4gzJbJg', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

async function connectToDatabase() {
  try {
    await db.authenticate();
    await db.sync({ force: true });
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


module.exports = { db, connectToDatabase };
