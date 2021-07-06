const router =  require('express').Router();
const path   =  require('path');
const factorialController = require('../controllers/factorialController');

router.get('/',function(req, res){
    console.log("logs",req.body);
    res.send("this is home route");
});

router.post('/factorial',factorialController.factorial);


module.exports = router;