import bcrypt from "bcrypt";
import models, { sequelize } from "../model/init-models.js";

const createUser = async (req, res) => {
  if (req.body.username === "") {
    return res.status(401).send({ message: "Username not null" });
  } else if (req.body.password === "") {
    return res.status(401).send({ message: "Password not null" });
  } else if (req.body.firstname === "") {
    return res.status(401).send({ message: "Firstname not null" });
  } else {
    try {
      const passHash = await bcrypt.hash(req.body.password, 10);
      const user = await req.context.models.users.create({
        id: req.body.id,
        username: req.body.username,
        password: passHash,
      });
      const { username, password } = user.dataValues;
      return res.send({ username, password });
    } catch (err) {
      return res.send(err);
    }
  }
};

const findAllByUsername = async (username) => {
  const user = await models.users
    .findOne({
      where: { username: username },
    })
    .catch((err) => {
      return err;
    });
  return user.toJSON();
};

const createCustomer = async (req, res) => {
  try {
    const customer = await req.context.models.customers.create({
      id: req.body.id,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      user_id: req.body.user_id,
    });
    return res.send(customer);
  } catch (error) {
    return res.send(error.message);
  }
};

const getUserCustomer = async (res) => {
  try {
    await sequelize
      .query(
        "select username,password,firstname,lastname from customers as c inner join users as u on c.user_id = u.id",
        { type: sequelize.QueryTypes.SELECT }
      )
      .then((result) => {
        return res.send(result);
      });
  } catch (error) {
    return res.send(error.message);
  }
};

export default {
  createUser,
  findAllByUsername,
  createCustomer,
  getUserCustomer,
};
