const PostModel = require("../model/PostModel");
const { setDataInRedis, getDataFromRedis } = require("../service/redis");

const addPost__controller = async (req, res) => {
  try {
    const { title, description } = req.body;

    const newPost = new PostModel({
      title,
      description,
    });
    await newPost.save();

    return res.status(201).json({ success: "New post added" });
  } catch (error) {
    return res.status(500).json({ error: "SOmething went wrong" });
  }
};

const getAllPost__controller = async (req, res) => {
  try {
    const data = await getDataFromRedis("posts");
    if (data) {
      console.log("redisss");
      return res.status(201).json(data);
    } else {
      console.log("not redisss");
      const posts = await PostModel.find();
      await setDataInRedis("posts", posts);
      return res.status(201).json(posts);
    }
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { getAllPost__controller, addPost__controller };
