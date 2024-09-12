const router = require("express").Router();

const { Diagram } = require("../handlers");

const handlers = new Diagram();

router.post("/create-diagram", handlers.createDiagram);
router.put("/update-diagram/:id", handlers.updateDiagram);
router.get("/get-diagram-by-id/:id", handlers.getDiagramById);
router.get("/get-all-diagrams", handlers.getAllDiagrams);
router.delete("/delete-diagram-by-id/:id", handlers.deleteDiagram);

module.exports = router;
