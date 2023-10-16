import {Router} from "express";
import { ctrlCreatePost, ctrlDeletePost, ctrlGetPosts, ctrlUpdatePost, ctrlView } from "../controllers/post.controllers.js";
import { createPost, editPost } from "../models/schemas/post.schema.js";
import { validator } from "../middlewares/validator.js";


const postRouter = Router()
//rutas para la vista
postRouter.get("/api/posts", ctrlView )
//endpoint para traer todas los posteos
postRouter.get("/api/posts", ctrlGetPosts)
//endpoint para crear un posteo
postRouter.post("/api/posts/:id", createPost,validator,ctrlCreatePost)
//endpoint para modificar un posteo
postRouter.put("/api/posts/:id", editPost,validator,ctrlUpdatePost)
//endpoint para eliminar un posteo
postRouter.delete("/api/posts/:id", ctrlDeletePost)

export {postRouter};
