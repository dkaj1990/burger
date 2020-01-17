/* Inside the burgers_controller.js file, import the following:

Express
burger.js
Create the router for the app, and export the router at the end of your file. */

const express = require("express"); 
const burger = require("../models/burger"); 

const router = express.Router(); 

router.get("/", function(err, res){
    burger.all(function(data){
        const object = {
            burgers: data
        }
        res.render("index", object); 
    });
}); 

router.post("/api/burgers", function(req, res){
    /* burger.create(["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result){
        res.json({
            id: result.insertId
        });
    }); */

    console.log(req.body); 
});

router.put("/api/burgers/:id", function(req, res){
    const condition = "id = "+ req.params.id; 
    console.log(condition); 
    burger.update({
        devoured: req.body.devoured
    },
    condition,
    function(result){
        if(result.chnagedRows == 0){
            return res.status(404).end(); 
        }else{
            res.status(200).end(); 
        }
    });
}); 

module.exports = router; 