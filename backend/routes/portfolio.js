const router = require("express").Router();

router.get('/', (req, res) => {
    //acess db
    const data = [{
            id: 1,
            name: "Douglas alves",
            createdAt: "2023-06-20"
        },
        {
            id: 2,
            name: "Camila Franque",
            createdAt: "2023-06-19"
        },
     ];
    res.json({
        sucess: true,
        data: data
    });
})

module.exports = router