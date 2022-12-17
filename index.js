const path = require('path');
const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors());


const bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false }));

app.use(express.static(path.resolve(__dirname, '/fronted/build')));

const router = require('./routes/routes');
app.use('/api', router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/frontend/build', 'index.html'));
});