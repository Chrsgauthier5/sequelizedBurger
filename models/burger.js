module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });

  // We're saying that a Burger should belong to an Chef
  Burger.associate = function (models) {

    // A Burger can't be created without a Chef due to the foreign key constraint
    Burger.belongsTo(models.Chef, {
      foreignKey: {
        allowNull: false
      }
    });
    Burger.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Burger
}