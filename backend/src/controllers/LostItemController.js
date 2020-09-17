const Admin = require("../models/Admin");
const LostItem = require("../models/LostItem");

module.exports = {
  async index(request, response) {
    const filters = request.query;
    let lostitems;

    if (Object.keys(filters).length === 0) {
      lostitems = await LostItem.find().populate("admin");
    } else {
      lostitems = await LostItem.find({
        andar,
        data,
      }).populate("admin");
    }

    return response.json(lostitems);
  },

  async show(request, response) {
    const { id } = request.params;

    const lostitem = await LostItem.findById(id).populate("admin");

    return response.json(lostitem);
  },

  async store(request, response) {
    const {
      nome,
      sobrenome,
      telefone,
      andar,
      referencia,
      data,
      tipo,
    } = request.body;
    const { admin_id } = request.headers;

    const admin = await Admin.findById(admin_id);

    if (!admin) {
      return response.status(400).json({ error: "Admin does not exists" });
    }

    const lostitem = await LostItem.create({
      admin: admin_id,
      nome,
      sobrenome,
      telefone,
      andar,
      referencia,
      dataDeAchado: data,
      tipo,
    });

    return response.json(lostitem);
  },

  async update(request, response) {
    const { id } = request.params;

    const lostitem = await LostItem.findOneAndUpdate(id, request.body, {
      new: true,
    });

    return response.json(lostitem);
  },
};
