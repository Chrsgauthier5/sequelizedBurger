var express = require("express");

var db = require("../models");

// Create all query routes.
module.exports = function (app) {
  // get all data from table
  app.get("/", function (req, res) {
    db.Burger.findAll({
      include: [db.Chef, db.Customer],
      order: ["burger_name"]
    }).then(function (dbBurger) {
      res.render("index", { burgers: dbBurger });
    });
  });

  // add new data - burger
  app.post("/api/burgers", function (req, res) {
    db.Chef.create({
      chef_name: req.body.chef_name
    }).then(function (dbChef) {
      console.log(dbChef.id);
      db.Customer.create({
        customer_name: "name"
      }).then(function (dbCustomer) {
        db.Burger.create({
          burger_name: req.body.burger_name,
          ChefId: dbChef.id,
          CustomerId: dbCustomer.id
        }).then(function (dbBurger) {
          res.json(dbBurger)
        });
      });
    });
  });

  //  change existing data - devoured
  app.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    db.Customer.update({
      customer_name: req.body.customer_name
    }, {
        where: {
          id: req.body.id
        }
      }).then(function (dbBurger) {
        db.Burger.update({
          devoured: req.body.devoured
        }, {
            where: {
              id: req.body.id
            }
          }).then(function (dbBurger) {
            res.json(dbBurger)
          })
      })
    condition,
      function (result) {
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
      }
  });

  //  delete existing data 
  app.delete("/api/burgers/:id:delete", function (req, res) {
    var condition = "id = " + req.params.id;
    db.Burger.destroy(
      {
        where: {
          id: req.params.id
        }
      }).then(function (dbBurger) {
        db.Customer.destroy(
          {
            where: {
              id: req.params.id
            }
          }).then(function (dbCustomer) {
            db.Chef.destroy(
              {
                where: {
                  id: req.params.id
                }
              }).then(function (dbChef) {
                res.json(dbBurger)
              });
          });
      });
    condition,
      function (result) {
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
      }
  });
}


