const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const path = require('path');

const dirname = path.dirname(__filename);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

const router = require('./routes/routes');
app.use('/', router);

app.use(express.static(path.join(dirname, 'cd /frontend/build')))


app.get('*', (req, res) => {
  res.sendFile(path.join(dirname + 'cd /frontend/build/index.html'))
})

app.listen(process.env.PORT || 3001, () => {
  console.log("Server started on port 3001. Ctrl^c to quit.");
});