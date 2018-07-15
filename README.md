# sequelizedBurger
A Sequelized full-stack burger eating application implemented using the MySQL database, Node.js, Express, Handlebars, Body-Parser, Sequelize, HTML, CSS and Javascript.
The app is designed using MVC (model view controller) pattern for efficient code reuse.

App is deployed on heroku: https://ancient-lake-67242.herokuapp.com/

The user may enter any burger name to add it to the menu on the left side of the screen. This entry is added to the MySQL database. The user may then eat any burger on the left side of the screen by clicking on the Devour button associated with the menu item.  The application updates the status of devoured (a boolean value) in the database from false to true and the burger is moved to the Consumption Tracker column on the right side of the screen. 