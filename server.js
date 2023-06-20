const express = require('express');

const app = express();


const PORT = 3080;

app.get('/', (req, res) => {
    res.json({
        'sucess': true
    })
});

app.get('/portfolio', (req, res) => {
    //acess db
    const data = [{
        id: 1,
        name: "Douglas alves",
        createdAt: "2023-06-20"
    }];
    res.json({
        sucess: true,
        data: data
    });
})

app.listen(PORT);