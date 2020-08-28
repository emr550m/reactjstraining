const express = require('express');
const app = express();
const port = 8080;

app.use((req, res,next) => {
    res.send('Hello World!');
    next();
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))