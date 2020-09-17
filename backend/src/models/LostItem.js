const mongoose = require("mongoose");

const LostItemSchema = new mongoose.Schema({
  nome: String,
  sobrenome: String,
  telefone: String,
  andar: String,
  referencia: String,
  dataDeAchado: String,
  tipo: String,
  devolvido: {
    type: Boolean,
    default: false,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
});

module.exports = mongoose.model("LostItem", LostItemSchema);
