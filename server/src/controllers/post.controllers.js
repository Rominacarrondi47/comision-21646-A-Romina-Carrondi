import { PostModel } from "../models/Posts.js";

//controller para mostrar la vista principal
export const ctrlView = async (req, res) => {
    try {
      const posts = await PostModel.findAll();
      res.render("posts.ejs", { posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  
  //controller para traer todos los posts
  export const ctrlGetPosts = async (req, res) => {
    try {
      const posts = await PostModel.findAll();
      if (!posts) {
        return res.status(404).json({ message: "No posts found" });
      } else {
        return res.status(200).json(posts);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  
  //controller para crear un post
  export const ctrlCreatePost = async (req, res) => {
    const { title, content, imgUrl } = req.body;
    try {
      const newPost = await PostModel.create({
        title,
        content,
        imgUrl,
      });
      return res.status(201).json(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  
  //controller para modificar un post
  export const ctrlUpdatePost = async (req, res) => {
    const { id } = req.params;
    try {
      const updatedPost = await PostModel.findByPk(id);
      if (!updatedPost) {
        return res.status(404).json({ message: "Posts not found" });
      } else {
        await updatedPost.update(req.body);
        return res.status(200).json(updatedPost);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };
  
  //controller para eliminar un post
  export const ctrlDeletePost = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedPost = await PostModel.destroy({
        where: {
          id,
        },
      });
      if (!deletedPost) {
        return res.status(404).json({ message: "Post not found" });
      } else {
        return res.status(200).json({ message: "Post successfully deleted" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  };