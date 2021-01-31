const customer = require("./customer");
const order = require("./order");
const order_detail = require("./order_detail");
const shipment = require("./shipment");
const product = require("./product");

module.exports = {
  customer: customer,
  order: order,
  order_detail: order_detail,
  shipment: shipment,
  product: product,
};
