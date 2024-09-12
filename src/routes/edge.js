const router = require("express").Router();

const { Edge } = require("../handlers");

const handlers = new Edge();

router.post("/create-edge", handlers.createEdge);
router.put("/update-edge/:id", handlers.updateEdge);
router.get("/get-edge-by-id/:id", handlers.getEdgeById);
router.get("/get-all-edges", handlers.getAllEdges);
router.delete("/delete-edge-by-id/:id", handlers.deleteEdge);

module.exports = router;
