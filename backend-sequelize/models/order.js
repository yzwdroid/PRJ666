"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      order_date: DataTypes.DATE,
      order_status: DataTypes.STRING,
      order_shipping_address_id: DataTypes.INTEGER,
      invoice_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "Order",
    }
  );
  return Order;
};
