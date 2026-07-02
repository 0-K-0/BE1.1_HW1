const mongooes = require("mongoose");
const SmartPhoneSchema = mongooes.Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    releaeYear: { type: Number, required: true },
    opratingSystem: { type: String },
    displaySize: { type: String },
    storage: { type: String },
    ram: { type: String },
    cameraSpacs: { type: Object },
    batteryCapacity: { type: String },
    connectivity: [{ type: String }],
    price: { type: Number },
    colorsAvailable: [{ type: String }],
    features: [{ type: String }],
  },
  { timestamps: true },
);
const SmartPhone = mongooes.model("SmartPHone", SmartPhoneSchema);
module.exports = SmartPhone;
