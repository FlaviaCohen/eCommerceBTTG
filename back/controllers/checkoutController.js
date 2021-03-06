const { Order } = require("../models");
const { Product } = require("../models");
const _ = require("lodash");

const updateOrderAdress = (req, res) => {
  Order.update(
    { address: req.body.orderAdress },
    {
      where: { userId: req.body.userId, state: "pending" },
      returning: true,
    }
  ).then(() => {
    res.sendStatus(201);
  });
};

const updateOrderStatus = (req, res) => {
  Order.update(
    { state: "completed" },
    {
      where: { userId: req.body.userId, state: "pending" },
      returning: true,
    }
  ).then(() => {
    res.sendStatus(201);
  });
};

const updateStock = (req, res) => {
  const array = req.body.map((product) => {
    return Product.update(
      { stock: product.stock - product.quantity },
      { where: { id: product.id } }
    );
  });
  Promise.all(array).then(() => res.sendStatus(201));
};

const getLastOrders = (req, res) => {
  console.log(req.user, "REQUSER");
  if (req.user) {
    Order.findAll({
      where: { userId: req.user.id, state: "completed" },
      include: [
        {
          model: Product,
          required: true,
        },
      ],
      order: [["updatedAt", "DESC"]],
    }).then((cart) => {
      let updatedAtGroups = _.groupBy(cart, function (obj) {
        return obj.updatedAt;
      });

      res.send(updatedAtGroups);
    });
  } else res.send([]);
};

const getAllOrders = (req, res) => {
  Order.findAll({
    where: { state: "completed" },
    include: [
      {
        model: Product,
        required: true,
      },
    ],
    order: [["updatedAt", "DESC"]],
  }).then((cart) => {
    let updatedAtGroups = _.groupBy(cart, function (obj) {
      return obj.updatedAt;
    });

    res.send(updatedAtGroups);
  });
};

module.exports = {
  updateOrderAdress,
  updateOrderStatus,
  getLastOrders,
  updateStock,
  getAllOrders,
};
