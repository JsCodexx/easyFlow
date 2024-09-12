const { EdgeModel } = require("../model");
const Response = require("./Response");

class Edge extends Response {
  createEdge = async (req, res) => {
    try {
      const newEdge = new EdgeModel(req.body);
      await newEdge.save();
      return this.sendResponse(req, res, {
        data: newEdge,
        status: 201,
        message: "Edge created successfully",
      });
    } catch (error) {
      return this.sendResponse(req, res, {
        data: null,
        status: 500,
        message: "Internal Server Error!",
      });
    }
  };

  getEdgeById = async (req, res) => {
    try {
      const edge = await EdgeModel.findById(req.params.id);
      if (!edge) {
        return this.sendResponse(req, res, {
          data: null,
          status: 404,
          message: "No edge found under this id",
        });
      }
      return this.sendResponse(req, res, {
        data: edge,
        status: 200,
        message: "Edge fetched successfully",
      });
    } catch (error) {
      return this.sendResponse(req, res, {
        data: null,
        status: 500,
        message: "Internal server error",
      });
    }
  };

  getAllEdges = async (req, res) => {
    try {
      const edges = await EdgeModel.find();
      return this.sendResponse(req, res, {
        data: edges,
        status: 200,
        message: "Edges fetched successfully",
      });
    } catch (error) {
      return this.sendResponse(req, res, {
        data: null,
        status: 500,
        message: "Internal server error",
      });
    }
  };

  updateEdge = async (req, res) => {
    try {
      const newEdge = req?.body;
      const result = await EdgeModel.updateOne(
        { _id: req.params.id },
        { $set: newEdge }
      );
      if (result.nModified === 0) {
        return this.sendResponse(req, res, {
          data: null,
          status: 404,
          message: "No edge found under this id",
        });
      }

      return this.sendResponse(req, res, {
        data: result,
        status: 200,
        message: "Edge updated successfully",
      });
    } catch (error) {
      return this.sendResponse(req, res, {
        data: null,
        status: 500,
        message: "Internal server error",
      });
    }
  };

  deleteEdge = async (req, res) => {
    try {
      const edge = await EdgeModel.findByIdAndDelete(req.params.id);
      if (!edge) {
        return this.sendResponse(req, res, {
          data: null,
          status: 404,
          message: "No edge found under this id",
        });
      }
      return this.sendResponse(req, res, {
        data: edge,
        status: 200,
        message: "Edge deleted successfully",
      });
    } catch (error) {
      return this.sendResponse(req, res, {
        data: null,
        status: 500,
        message: "Internal server error",
      });
    }
  };
}

module.exports = { Edge };
