import userController from "../controller/userController.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import ResponseHelper from "../helpers/ResponseHelper.js";
import dotenv from "dotenv";
dotenv.config();

const userLogin = async (req, res) => {
  let data = req.body;
  await userController
    .findAllByUsername(data.username)
    .then((items) => {
      if (items.username) {
        if (bcrypt.compareSync(data.password, items.password)) {
          let token = jwt.sign({ id: items.id }, process.env.SECRET_KEY, {
            expiresIn: "2d",
          });
          const { password, ...users } = items;
          let result = { userdata: users, accesToken: token };
          ResponseHelper.sendResponse(res, 200, result);
        } else {
          ResponseHelper.sendResponse(res, 401);
        }
      } else {
        ResponseHelper.sendResponse(res, 404);
      }
    })
    .catch((err) => {
      res.status(404).json(err);
    });
};

const verify = (req, res, next) => {
  let bearer = req.headers.authorization;
  bearer = bearer.split(" ");
  const token = bearer[1];
  jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    if (err) {
      console.info(err.message);
      return res.json(err);
    }
    req.body = data;
    next();
  });
};

const checkToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).json("you are not authorized");
  } else {
    let bearer = req.headers.authorization;
    bearer = bearer.split(" ");
    const token = bearer[1];
    try {
      jwt.verify(token, process.env.SECRET_KEY);
      return next();
    } catch (error) {
      return res.status(401).json("invalid token");
    }
  }
};
export default { userLogin, verify, checkToken };
