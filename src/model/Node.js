const mongoose = require("mongoose");

const nodeSchema = mongoose.Schema(
  {
    blockId: { type: String, required: true },
    title: { type: String, required: true },
    label: { type: String, required: true },
    nodeType: { type: String, required: true },
    fields: {
      type: String,
      required: true,
    },
    position: {
      x: { type: Number, required: true },
      y: { type: Number, required: true },
    },
    type: { type: String, required: true },
    data: {
      type: String,
      required: true,
    },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    selected: { type: Boolean, required: true },
    dragging: { type: Boolean, required: true },
    positionAbsolute: {
      x: { type: Number, required: true },
      y: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

const NodeModel = mongoose.model("Node", nodeSchema);
module.exports = { NodeModel };
