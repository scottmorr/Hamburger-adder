// import
// * Express
// * `burger.js`
//Create the `router` for the app, and export the `router` at the end of your file.
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {

    burger.findAll(function (err, data) {
        if (err) throw err;

        console.log(data);
        res.render("index")
    })

})
router.get("/id/:id", function (req, res) {
    var id = parseInt(req.params.id)

    burger.findById(id, function (err, data) {
        if (err) throw err;

        console.log(data);
        res.render("index")
    })

})
router.get("/devoured/:dev", function (req, res) {
    var devoured = req.params.dev

    burger.findDevoured(devoured, function (err, data) {
        if (err) throw err;

        console.log(data);
        res.render("index")
    })

})



// var fs = require('fs');
// var path = require('path');
// var main = path.join(__dirname, '../views/layouts/main.handlebars')
// var index = path.join(__dirname, '../views/index.handlebars')

// router.get('/', function (req, res) {

//     fs.readFile(main, 'utf8', function (err, main) {
//         if (err) throw err;

//         fs.readFile(index, 'utf8', function (err, index) {
//             if (err) throw err;

//             main = main.replace("{{{body}}}", index)

//             console.log(main)

//             res.send(main)
//         })
//     })
// })


module.exports = router;