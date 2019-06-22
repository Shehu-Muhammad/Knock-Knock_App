const express = require ('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 3000;

app.use(express.static(__dirname+'/public'));
// app.get('/', (req,res)=> res.send('Welcome! World'));
app.get('/', (req,res)=> res.sendFile(path.join(__dirname+'/index.html')));
// app.get('/', (req,res)=> res.sendFile(path.join(__dirname+'/index.html')));
// app.get('/', (req,res)=> res.sendFile(path.join(__dirname+'/index.html')));
app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));