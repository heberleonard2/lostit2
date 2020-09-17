const LostItem = require("../models/LostItem");

module.exports = {
  async index(request, response) {
    const { admin_id } = request.headers;
    const filters = request.query;
    let { devolvido } = filters;
    devolvido = devolvido || false;

    const lostitems = await LostItem.find({
      admin: admin_id,
      devolvido,
    }).populate("admin");

    return response.json(lostitems);
  },
};
