// import
// * Express
// * `burger.js`
//Create the `router` for the app, and export the `router` at the end of your file.
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
var connection = require('../config/connection')



router.get("/", function (req, res) {

    burger.findAll(function (err, data) {
        if (err) throw err;

        console.log(data);
        res.render("index", {
            title: "BURGERS'R'US",
            burgers: data
        })
    })

})

router.get("/api/burgers/:id/:devoured", function (req, res) {
    var id = req.params.id;
    var options = { devoured: req.params.devoured }

    burger.updateById(id, options, function (err, result) {
        if (err) return res.sendStatus(500)

        console.log(result);

        res.json(result)
    })
})


router.post("/api/burgers/:name", function(req, res) {
    burger.create([
      "name", 
    ], [
      req.body.name, 
    ], function(result) {
      res.json({ name: result.insertName });
    });
  });
  

  router.put("/api/burgers/:name", function(req, res) {
    var condition = "name = " + req.params.name;
  
    console.log("condition", condition);
  

  });


module.exports = router;