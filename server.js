const express = require('express');
const app = express (); 

app.use(express.static('public')); 


app.get('/', (request, response)=>{
    response.sendFile(__dirname +'/index.html'); 
} ); 

app.get('/about', (req, res)=>{
    response.send('Hello, I am Merili. Nice to meet you.'); 
});


app.listen(3000, ()=>{
    console.log('Server is running on Port 3000.'); 
});


