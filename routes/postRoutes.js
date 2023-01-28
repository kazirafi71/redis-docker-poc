const {
  addPost__controller,
  getAllPost__controller,
} = require("../controller/postController");

const router = require("express").Router();

router.post("/add-post", addPost__controller);

router.get("/all-posts", getAllPost__controller);

module.exports = router;
