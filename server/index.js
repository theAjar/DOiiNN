const express = require('express')
const cors = require('cors');

const app = express();
const port = 5000
app.use(cors());

app.get('/', function (req, res) {
    console.log(req);
    res.send({
        message:"done"
    })
  })
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 