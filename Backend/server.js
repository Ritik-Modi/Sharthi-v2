const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log(`Server running at port no. 3000 `);
});


const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/SaarthiDatabase' , {
    useNewurlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("Connection Successful")})
.catch((error) => {console.log("Recieved an error")})