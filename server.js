const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
/////allow us to use public folder/css/js
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
/////allow us to use public folder/css/js

app.use(express.static(path.join(__dirname, 'public')));
//////////////////////////////

//////////////////////////////////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);
//handlebars stuff
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});