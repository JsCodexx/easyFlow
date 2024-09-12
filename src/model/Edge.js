const mongoose = require("mongoose");

const edgeSchema = mongoose.Schema(
  {
    id: { type: String, required: true },
    source: { type: String, required: true },
    target: { type: String, required: true },
    animated: { type: Boolean, required: true },
    type: { type: String, required: true },
    data: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const EdgeModel = mongoose.model("Edge", edgeSchema);
module.exports = { EdgeModel };
