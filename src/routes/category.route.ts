import {
	createCategory,
	deleteCategory,
	updateCategory,
} from "@/controllers/category";
import { isAdmin } from "@/middlewares/auth";
import { Router } from "express";

export const categoryRouter = Router();

categoryRouter.route("/").post(isAdmin, createCategory);

categoryRouter
	.route("/:categoryId")
	.put(isAdmin, updateCategory)
	.delete(isAdmin, deleteCategory);