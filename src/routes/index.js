const router = require("express").Router();
const user = require("./user");
const node = require("./node");
const edge = require("./edge");
const diagram = require("./diagram");

router.use("/auth", user);
router.use("/node", node);
router.use("/edge", edge);
router.use("/diagram", diagram);

module.exports = router;
