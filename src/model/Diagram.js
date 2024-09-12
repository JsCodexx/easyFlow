const mongoose = require("mongoose");

const diagram = mongoose.Schema(
  {
    diagramName: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    nodesList: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Node",
      required: true,
    },
    edgesList: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Edge",
      required: true,
    },
  },
  { timestamps: true }
);

const DiagramModel = mongoose.model("Diagram", diagram);
module.exports = { DiagramModel };
