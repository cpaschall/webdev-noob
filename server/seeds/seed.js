const db = require('../config/connection');
const { Category } = require('../models');

const categoryData = require('./categoryData.json');


db.once('open', async () => {
  await Category.deleteMany({});

  const categories = await Category.insertMany(categoryData);

  console.log('All data seeded!');
  console.log(categories)
  process.exit(0);
});