const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3030;
const routes = require("./routes");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
  })
)

app.post("/daftarbaru", (req, res) => {
  res.send({
    message: "create mahasiswa baru: post /daftarbaru",
    body: req.body
  });
});

app.get("/mahasiswa", (req, res) => {
  res.send('Get mahasiswa list: GET /mahasiswa')
});

app.get("/mahasiswa/:id", (req, res) => {
  res.send('Get mahasiswa: GET /mahasiswa/' + req.params.id)
});

app.listen(port, () => {
  console.log(`Server runnning on port ${port}`)
});


