const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    if(req.session.bookMarks){
        res.json(req.session.bookMarks)
    }else{
        res.end()
    }
})

module.exports = app;