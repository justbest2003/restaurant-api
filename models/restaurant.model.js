const { DataType, DataTypes } = require("sequelize");
const sequelize = require("./db");

const Restaurant = sequelize.define("restaurant", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Restaurant.sync({ force: false })
  .then(() => {
    console.log("Table Created or Already Exists");
  })
  .catch((error) => {
    console.log("Error Creating Table:", error);
  });

module.exports = Restaurant;
