import {Router} from "express";



const postRouter = Router()
postRouter.get("/api/tasks")
postRouter.post("/api/post")
postRouter.put("/api/posts/:id")
postRouter.delete("/api/posts/:id")

export {postRouter};
