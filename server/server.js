require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const { Category } = require('./models/Category');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build'))); 
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.post('/seedDatabase', async (req, res) => {
      // secure my seed route so only authorized users can do it!!!
      // SEEDPASS=something inside of your env file or as a config variable in heroku
      if(req.body.SEEDPASS === process.env.SEEDPASS){
        await Category.deleteMany({});

        const categories = await Category.insertMany(categoryData);
      
        console.log('All data seeded!');
        res.json({message: "Database Seeded", categories });
      
      }
      else{
        res.json({test: "Not seeded"});
      }
    });

    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  })
};

startApolloServer(typeDefs, resolvers);