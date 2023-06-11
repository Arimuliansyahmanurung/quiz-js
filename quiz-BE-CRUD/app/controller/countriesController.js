const findAll = async (req, res) => {
  try {
    const countries = await req.context.models.countries.findAll();
    return res.send(countries);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const country = await req.context.models.countries.findOne({
      where: { country_id: req.params.ids },
    });
    return res.send(country);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const country = await req.context.models.countries.create({
      country_id: req.body.id,
      country_name: req.body.name,
      //  region_id: req.body.region,
    });
    return res.send(country);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const countries = await req.context.models.countries.update(
      {
        countries_name: req.body.name,
      },
      { returning: true, where: { country_id: req.params.id } }
    );
    return res.send(countries);
  } catch (error) {
    console.log(error);
  }
};

const deleted = async (req, res) => {
  try {
    const country = await req.context.models.countries.destroy({
      where: { country_id: req.params.id },
    });
    return res.send("delete " + region + " row");
  } catch (error) {
    console.log("Error: " + error);
  }
};
export default { findAll, findOne, create, update, deleted };
