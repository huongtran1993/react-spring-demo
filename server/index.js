const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.json());

app.get('/*', (req, res) => {
  res.redirect('/');
})
const port = 3003;

app.listen(port, () => {
  console.log(`Successfully running on port ${port}`);
});
