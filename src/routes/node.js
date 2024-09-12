const router = require("express").Router();

const { Node } = require("../handlers");

const handlers = new Node();

router.post("/create-node", handlers.createNode);
router.put("/update-node/:id", handlers.updateNode);
router.get("/get-node-by-id/:id", handlers.getNodeById);
router.get("/get-all-nodes", handlers.getAllNodes);
router.delete("/delete-node-by-id/:id", handlers.deleteNode);

module.exports = router;
