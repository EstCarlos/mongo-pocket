const express = require("express");
const router = express.Router();

const {
  getAllData,
  getOneItem,
  createData,
  deleteData,
} = require("../controllers/LinksController");

router.route("/links").get(getAllData).post(createData);
router.route("/links/:itemID").get(getOneItem).delete(deleteData);

module.exports = router;
