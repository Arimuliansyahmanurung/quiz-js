import models from "../model/init-models.js";

const createUser = async (req, res) => {
  try {
    const user = await models.users.create({
      username: req.body.name,
    });
    return res.send(user);
  } catch (error) {
    return res.send(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await models.users.findAll();
    return res.send(user);
  } catch (error) {
    return res.send(error);
  }
};

const itemProduct = async (req, res) => {
  try {
    const item = await models.item_product.create({
      product_id: req.body.product,
      qty: req.body.qty,
      subtotal: req.body.subtotal,
      user_id: req.body.user,
    });
    return res.send(item);
  } catch (error) {
    return res.send(error);
  }
};

export default { createUser, getUser, itemProduct };
