const findAll = async (req, res) => {
  try {
    const employee = await req.context.models.employees.findAll();
    res.send(employee);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const employee = await req.context.models.employees.findOne({
      where: { employee_id: req.params.id },
    });
    return res.send(employee);
  } catch (error) {
    return res.send(error);
  }
};

export default { findAll, findOne };
