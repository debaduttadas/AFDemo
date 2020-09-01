const express = require('express');
const path = require('path');
const port = 8084;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});