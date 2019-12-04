const express = require('express');
// const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();
const port = '8080';

// ejs Embedded Javascript Template
app.engine('html', require('ejs').renderFile);
app.set('views', `${__dirname}/views`);
app.use(express.static('src'));
app.use(express.json());

// body-parser: request body encoding, application/x-www-form-urlencoded
// Express v4.16.0 기준 express json use로 body parser 사용 가능
// app.use(bodyParser.urlencoded({extended: false}));

//parser multipart/form-data
app.use(upload.array());

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(port, (err) => {
  console.log('connect: ', port);

  if (err) {
    return console.log('Error: ', err);
  }
});