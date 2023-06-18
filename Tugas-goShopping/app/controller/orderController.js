import models from "../model/init-models.js";

const order = async (req, res) => {
  try {
    const productOrder = await models.orders.create({
      user_id: req.body.user,
      totalprice: req.body.totalprice,
    });
    return res.send(productOrder);
  } catch (error) {
    return res.send(error);
  }
};

export default { order };
