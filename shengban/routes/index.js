var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'coco',
    port:3306
});

/* GET home page. */
router.post('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin","*");
    pool.query(`SELECT * FROM ke_biao WHERE state=${req.body.state}`,function (err, rows) {
        res.send(rows)
    });
});

router.post('/del', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin","*");
    pool.query(`DELETE FROM ke_biao WHERE id=${req.body.id}`,function (err, rows) {
        res.send(rows)
    });
});

// router.post('/update', function(req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin","*");
//     pool.query(`UPDATE ke_biao SET state=${req.body.state} WHERE id=${req.body.id}`,function (err, rows) {
//         // res.send(rows)
//         res.send({
//
//         })
//     });
// });

router.post('/update', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin","*");
    pool.query(`UPDATE ke_biao SET name=${req.body.name} WHERE id=${req.body.id}`,function (err, rows) {
        // res.send(rows)
        res.send({
            name:''
        })
    });
});





router.post('/add', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin","*");
    pool.query(`INSERT INTO ke_biao (name,sex,state) VALUES ('${req.body.name}','${req.body.sex}','1')`,function (err, rows) {
        console.log(err);
        res.send(rows)
    });
});




module.exports = router;
