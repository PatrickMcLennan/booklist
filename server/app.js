const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const mongOptions = { useNewUrlParser: true };
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

mongoose.connect(
  'mongodb://patrick:test123@ds341825.mlab.com:41825/graphql-react',
  mongOptions
);
mongoose.connection.once('open', () => {
  console.log('Connected To Mongo');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Now listening for requests on port ${PORT}`);
});
