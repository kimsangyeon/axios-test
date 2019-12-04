const express = require('express');
// const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();
const port = '8080';

// ejs Embedded Javascript Template
app.engine('html', require('ejs').renderFile);
app.set('views', `${__dirname}/views`);
app.use(express.static('dist'));
app.use(express.json());

// body-parser: request body encoding, application/x-www-form-urlencoded
// Express v4.16.0 기준 express json use로 body parser 사용 가능
// app.use(bodyParser.urlencoded({extended: false}));

//parser multipart/form-data
app.use(upload.array());

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/get/cats', (req, res) => {
  const cats = {
    sanji: {
      name: 'sanji',
      age: 1,
    },
    koo: {
      name: 'koo',
      age: 2,
    },
  };

  console.log("params: ", req.params);
  console.log("query: ", req.query);
  console.log("body: ", req.body);
  console.log("headers: ", req.headers);

  if (req.query.name) {
    res.json(cats[req.query.name]);
  } else {
    res.json(cats);
  }
});

app.listen(port, (err) => {
  console.log('connect: ', port);

  if (err) {
    return console.log('Error: ', err);
  }
});