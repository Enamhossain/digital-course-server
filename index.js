const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./Data/Category.js');
const news = require('./data/news.json');


app.get('/',(req,res) =>{
    res.send("Course APi Runnig")
})

app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})