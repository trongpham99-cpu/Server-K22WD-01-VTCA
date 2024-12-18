const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/about', (req, res) => {
    res.send('About Us');
})

app.get('/contact', (req, res) => {
    res.send('Contact Us');
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})