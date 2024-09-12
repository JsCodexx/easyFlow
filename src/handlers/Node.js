const Response = require("./Response");
const { NodeModel } = require("../model");

class Node extends Response {
  createNode = async (req, res) => {
    try {
      const newNode = new NodeModel(req.body);
      await newNode.save();
      return this.sendResponse(req, res, {
        data: newNode,
        status: 201,
        message: "Node Created ",
      });
    } catch (error) {
      return this.sendResponse(req, res, {
        data: null,
        status: 500,
        message: "Internal Sever Error! ",
      });
    }
  };
  getNodeById = async (req, res) => {
    try {
      const node = await NodeModel.findById(req.params.id);
      if (!node) {
        return this.sendResponse(req, res, {
          data: null,
          status: 404,
          message: "No node found under this id ",
        });
      }
      return this.sendResponse(req, res, {
        data: node,
        status: 200,
        message: "Node fetched successfully",
      });
    } catch (error) {
      return this.sendResponse(req, res, {
        data: null,
        status: 500,
        message: "Internal server error",
      });
    }
  };
  getAllNodes = async (req, res) => {
    try {
      const nodes = await NodeModel.find();
      return this.sendResponse(req, res, {
        data: nodes,
        status: 404,
        message: "Nodes fetched successfully",
      });
    } catch (error) {
      console.log(error);
      return this.sendResponse(req, res, {
        data: null,
        status: 500,
        message: "Internal server error",
      });
    }
  };

  updateNode = async (req, res) => {
    try {
      const newNode = req?.body;
      const result = await NodeModel.updateOne(
        { _id: req.params.id },
        { $set: newNode }
      );
      if (result.nModified === 0) {
        return this.sendResponse(req, res, {
          data: null,
          status: 404,
          message: "No node found under this id",
        });
      }
      return this.sendResponse(req, res, {
        data: result,
        status: 200,
        message: "Node fetched successfully",
      });
    } catch (error) {
      console.log(error);
      return this.sendResponse(req, res, {
        data: null,
        status: 500,
        message: "Internal server error",
      });
    }
  };
  deleteNode = async (req, res) => {
    try {
      const node = await NodeModel.findByIdAndDelete(req.params.id);
      if (!node) {
        return this.sendResponse(req, res, {
          data: null,
          status: 404,
          message: "No node found under this id ",
        });
      }
      return this.sendResponse(req, res, {
        data: node,
        status: 200,
        message: "Node deleted successfully",
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

module.exports = { Node };
