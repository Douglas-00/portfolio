const router = require("express").Router();
const Portfolio = require('../models/Portfolio');

//Read Portfolios
router.get('/', async (req, res) => {
    try {
        const portfolio = await Portfolio.find()

        res.json({
            success: true,
            data: portfolio
        });
    } catch (error) {
        res.json({
            success: false,
            message: error
        }); 
    }

})

//Read Portfolio:id -> Uma ocorrência 
router.get('/:slug', async(req,res) => {
    try {
        const portfolioid = await Portfolio.findOne({
           slug:req.params.slug
        })
        

        res.json({
            sucess:true,
            data:portfolioid
        })

    } catch (error) {
        res.json({
            success: false,
            message: error
        });
    }
})

//Create Portfolio
router.post('/', async (req, res) => {
    const portfolio = new Portfolio({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPortfolio = await portfolio.save()
        res.json({
            sucess: true,
            data: savedPortfolio
        })
    } catch (error) {
        res.json({
            success: false,
            message: error
        });
    }

})

//Update -> Unico Id 

router.patch('/:slug',async(req,res)=>{
    try {
        const updatedPortfolio = await Portfolio.updateOne({
            slug:req.params.slug
        },
        {
            title:req.body.title,
            description:req.body.description
        })

        res.json({
            success:true,
            message:"Portfolio alterado com Sucesso!"
        })

    } catch (error) {
        res.json({
            success: false,
            message: error
        }); 
    }
})

module.exports = router