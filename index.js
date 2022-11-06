const express = require('express')
const app = express();
const cors = require("cors");
const categories = require('./categories.json');
const news = require('./news.json');
const { use } = require('express/lib/router');
const port =  5000;


app.use(cors());
app.get('/', (req, res)=>{
    res.send('News API Running')
});

app.get('/categories', (req, res)=>{
    res.send(categories)
})

app.get('/news', (req, res)=>{
    res.send(news)
})

app.listen(port,()=>{
    console.log('Dragon News Running');
})