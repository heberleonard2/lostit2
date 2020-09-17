//index, show, store, update, destroy
const Admin = require("../models/Admin");

module.exports = {
  async store(request, response) {
    const { email } = request.body;

    if (email === "") {
      return response.status(400).json({ error: "Invalid email" });
    }

    let user = await Admin.findOne({ email });

    if (!user) {
      user = await Admin.create({
        email,
      });
    }

    return response.json(user);
  },
};
