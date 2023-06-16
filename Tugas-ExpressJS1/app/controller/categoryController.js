const createCategory = async (req, res) => {
  try {
    const category = await req.context.models.product_category.create({
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
    });
    return res.send(category);
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }
};

export default { createCategory };
