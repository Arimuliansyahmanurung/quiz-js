import models from "../model/init-models.js";
const createCategory = async (req, res) => {
  try {
    const Category = await models.category.create({
      category_name: req.body.name,
    });
    return res.send(Category);
  } catch (error) {
    return console.log(error.message);
  }
};

const getCategory = async (req, res) => {
  try {
    const Category = await models.category.findAll();
    return res.send(Category);
  } catch (error) {
    return res.send(error);
  }
};

export default { createCategory, getCategory };
