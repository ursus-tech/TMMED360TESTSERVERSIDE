var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var userInfo = {"name":"Fiat", "age":600};

router.route('/singleUser')
    .get(function(req,res){
        if (userInfo)
            res.json(userInfo)
    })


module.exports = router;
