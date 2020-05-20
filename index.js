const express=require('express');
const fetch = require('node-fetch');
var path = require('path');
const {prettysplit,duplicate}=require('./getUsers');
const dotenv= require("dotenv");
dotenv.config();

const url = process.env.EXT_URL;

var app=express()

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/events/paid', (req,res)=>{   
     
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        res.end(`<html>${prettysplit(data.paid)}</html>`);
    })
    .catch(err => {
        console.log(err);
    })
});

app.get('/events/free', (req,res)=>{   
     
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        res.end(`<html>${prettysplit(data.free)}</html>`);
    })
    .catch(err => {
        console.log(err);
    })
});

app.get('/duplicate/paid', (req,res)=>{   
     
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        res.end(`<html>${duplicate(data.paid)}</html>`);
    })
    .catch(err => {
        console.log(err);
    })
});

app.get('/duplicate/free', (req,res)=>{   
     
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        res.end(`<html>${duplicate(data.free)}</html>`);
    })
    .catch(err => {
        console.log(err);
    })
});

const port=process.env.PORT;
app.listen(port, ()=>{
    console.log(`A NodeJs API is litening on port: ${port}`);
});
