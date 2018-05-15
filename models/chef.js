var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var Chef = sequelize.define("Chef", {
        chef_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        },
    });
   // Associating Chef with Burger
    Chef.associate = function (models) {
        Chef.hasMany(models.Burger) 
    };
    return Chef;
};