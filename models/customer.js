var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        },
    });
    //Associating Customer with Burger
    Customer.associate = function (models) {
        Customer.hasMany(models.Burger, {
        });
    };
    return Customer;
};