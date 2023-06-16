import { sequelize } from "../model/init-models.js";

const createProduct = async (req, res) => {
  try {
    const product = req.context.models.products.create({
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      category_id: req.body.category_id,
      price: req.body.price,
      quantity: req.body.quantity,
    });
    return res.send(product);
  } catch (error) {
    return res.status(401).send(error.message);
  }
};
const getProduct = async (req, res) => {
  try {
    const product = await req.context.models.products.findAll();
    return res.send(product);
  } catch (error) {
    return res.status(401).send(error.message);
  }
};

const getProductByCategory = async (req, res) => {
  try {
    await sequelize
      .query(
        "select pc.name as category, p.name as product , p.price, p.quantity from products as p inner join product_category as pc on p.category_id = pc.id order by pc.name, p.name",
        {
          type: sequelize.QueryTypes.SELECT,
        }
      )
      .then((result) => {
        return res.send(result);
      });
  } catch (error) {
    return res.send(error.message);
  }
};
export default { createProduct, getProduct, getProductByCategory };
