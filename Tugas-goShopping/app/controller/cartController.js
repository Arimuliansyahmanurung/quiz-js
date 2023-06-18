import models from "../model/init-models.js";

const addToCart = async (req, res) => {
  try {
    const cart = await models.cart.create({
      cart: req.body.cart,
    });
    return res.send(cart);
  } catch (error) {
    return console.log(error);
  }
};

export default { addToCart };
