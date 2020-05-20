const express=require('express');
const fetch = require('node-fetch');
const {prettysplit}=require('./getUsers');
const url = 'https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences';

var app=express()

app.get('/events', (req,res)=>{   
     
    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
    // Work with JSON data here
        //console.log(data.paid);
        
        res.end(`<html>${prettysplit(data.paid)}</html>`);
    })
    .catch(err => {
    // Do something for an error here
    })
});

app.listen(8080);
