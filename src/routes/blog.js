const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");

router.get("/", blogController.blog_index);

router.get("/newPost", function (req, res) {
  res.render("newPost");
});
router.post("/insertPost", blogController.blog_create_post);

router.get("/post/:id", blogController.blog_details);

router.delete("/post/:id", blogController.blog_delete);

module.exports = router;
