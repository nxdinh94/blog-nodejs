
const path = require("path");//thư viện có sẵn
const express = require('express');
const morgan = require('morgan');
const handlebars = require("express-handlebars");
const methodOverride = require('method-override');//PUT method

const db = require('./config/db');

//Connect to db
db.connect();

const app = express();
const port = 3000;

const route = require('./routes/index');

// Middleware
app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

app.use(methodOverride('_method'));

//Show img
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine("handlebars", handlebars.engine());

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources", "views"));
// console.log('Path:' + __dirname);

// Route init
route(app);


app.listen(port, () => {
  console.log(`App app listening on port ${port}`)
})