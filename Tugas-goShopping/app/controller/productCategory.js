import models from "../model/init-models.js";

const createProduct = async (req, res) => {
  try {
    const product = await models.products.create({
      name: req.body.name,
      category_id: req.body.category,
      stok: req.body.stok,
      price: req.body.price,
    });

    return res.send(product);
  } catch (error) {
    return res.send(error.message);
  }
};

export default { createProduct };
