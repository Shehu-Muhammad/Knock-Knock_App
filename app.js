const express = require ('express');
const app = express();
const path = require('path');
// const knockknock = require('knock-knock-jokes');
const port = 3000;

app.use(express.static(`${__dirname}/public`));
app.get('/', (req,res)=> res.sendFile(path.join(__dirname+'/views/index.html')));
app.get('/joke', (req,res)=> res.sendFile(path.join(__dirname+'/views/joke.html')));
// console.log(knockknock());
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));