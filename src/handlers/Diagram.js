const { DiagramModel } = require("../model");
const Response = require("./Response");

class Diagram extends Response {
  createDiagram = async (req, res) => {
    try {
      const newDiagram = new DiagramModel(req.body);
      await newDiagram.save();
      return this.sendResponse(req, res, {
        data: newDiagram,
        status: 201,
        message: "Diagram created successfully",
      });
    } catch (error) {
      return this.sendResponse(req, res, {
        data: null,
        status: 500,
        message: "Internal Server Error!",
      });
    }
  };
  getDiagramById = async (req, res) => {
    try {
      const diagram = await DiagramModel.findById(req.params.id)
        .populate("userId")
        .populate("nodesList")
        .populate("edgesList");
      if (!diagram) {
        return this.sendResponse(req, res, {
          data: null,
          status: 404,
          message: "No diagram found under this id",
        });
      }
      return this.sendResponse(req, res, {
        data: diagram,
        status: 200,
        message: "Diagram fetched successfully",
      });
    } catch (error) {
      return this.sendResponse(req, res, {
        data: null,
        status: 500,
        message: "Internal server error",
      });
    }
  };

  getAllDiagrams = async (req, res) => {
    try {
      const diagrams = await DiagramModel.find()
        .populate("userId")
        .populate("nodesList")
        .populate("edgesList");
      return this.sendResponse(req, res, {
        data: diagrams,
        status: 200,
        message: "Diagrams fetched successfully",
      });
    } catch (error) {
      return this.sendResponse(req, res, {
        data: null,
        status: 500,
        message: "Internal server error",
      });
    }
  };

  updateDiagram = async (req, res) => {
    try {
      const diagram = await DiagramModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      )
        .populate("nodesList")
        .populate("edgesList");
      if (!diagram) {
        return this.sendResponse(req, res, {
          data: null,
          status: 404,
          message: "No diagram found under this id",
        });
      }
      return this.sendResponse(req, res, {
        data: diagram,
        status: 200,
        message: "Diagram updated successfully",
      });
    } catch (error) {
      return this.sendResponse(req, res, {
        data: null,
        status: 500,
        message: "Internal server error",
      });
    }
  };

  deleteDiagram = async (req, res) => {
    try {
      const diagram = await DiagramModel.findByIdAndDelete(req.params.id);
      if (!diagram) {
        return this.sendResponse(req, res, {
          data: null,
          status: 404,
          message: "No diagram found under this id",
        });
      }
      return this.sendResponse(req, res, {
        data: diagram,
        status: 200,
        message: "Diagram deleted successfully",
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

module.exports = { Diagram };
