const mongoose = require("mongoose");
const CreditCardSchma = new mongoose.Schema({
  cardInssuer: { type: String, required: true },
  cardNumber: { type: Number, required: true },
  accountOpeningDate: { type: Number, required: true },
  cardHolderName: { type: String, required: true },
  cardNetwork: { type: String, required: true },
});
const CreditCard = mongoose.model("CreditCard", CreditCardSchma);
module.exports = CreditCard;
