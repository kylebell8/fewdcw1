const path = require('path');
const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors());

const bodyParser  = require('body-parser');
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false }));

const router = require('./routes/routes');

app.use('/api', router);

app.use(express.static(path.resolve(__dirname, 'frontend','build')));

const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Recipe's inserted" });
});

app.listen(PORT, () => {
  console.log(`Server listning on the port ${PORT}`);
});

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'frontend','build', 'index.html');
  res.sendFile(index);
});