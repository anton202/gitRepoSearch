const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    if(req.session.bookMarks){
        res.json(req.session.bookMarks)
    }else{
        res.end()
    }
})

app.post('/save',(req,res)=>{
    if(!req.session.bookMarks){
        req.session.bookMarks = [];
        req.session.bookMarks.push(req.body);
    }else{
        req.session.bookMarks.push(req.body)
    }
    res.end()
})

app.delete('/delete/:repoName/:avatar',(req,res)=>{
    const repoName = req.params.repoName;
    const avatar = decodeURIComponent(req.params.avatar);
    const bookMarks = req.session.bookMarks;
   
    bookMarks.forEach((bookMark, idx) => {
        if(bookMark.repoName === repoName && bookMark.avatar === avatar){
            bookMarks.splice(idx,1)
        }
    });
    res.end()
})

module.exports = app;