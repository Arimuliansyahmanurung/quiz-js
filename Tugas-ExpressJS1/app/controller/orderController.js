import { sequelize } from "../model/init-models.js";

const orderProduct = async (req, res) => {
  try {
    const order = await req.context.models.orders.create({
      id: req.body.id,
      user_id: req.body.user_id,
      totalproduct: req.body.totalproduct,
      totalprice: req.body.totalprice,
    });
    return res.send(order);
  } catch (error) {
    return res.send(error.message);
  }
};

const detailOrder = async (req, res) => {
  try {
    const detail = await req.context.models.order_detail.create({
      id: req.body.id,
      order_id: req.body.order_id,
      product_id: req.body.product_id,
      quantity: req.body.quantity,
    });
    return res.send(detail);
  } catch (error) {
    return res.send(error.message);
  }
};

const customerOrder = async (req, res) => {
  try {
    await sequelize
      .query(
        "select o.id, u.username as pembeli, p.name as order, od.quantity as jumlah,p.price as harga, sum(o.totalprice * od.quantity) as total from order_detail as od inner join orders as o on od.order_id = o.id inner join products as p on od.product_id = p.id inner join users as u on o.user_id = u.id group by o.id, p.name, od.quantity, p.price, o.totalprice, u.username",
        { type: sequelize.QueryTypes.SELECT }
      )
      .then((result) => {
        return res.send(result);
      });
  } catch (error) {
    return res.send(error.message);
  }
};
export default { orderProduct, detailOrder, customerOrder };
