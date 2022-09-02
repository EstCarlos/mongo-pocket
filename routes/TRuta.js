const express = require("express");
const router = express.Router();

const {
  getAllData,
  getOneItem,
  createData,
  deleteData,
} = require("../controllers/TagsController");

router.route("/tags").get(getAllData).post(createData);
router.route("/tags/:itemID").get(getOneItem).delete(deleteData);

module.exports = router;
