import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {  getRandom, addToFavorites, listFavorites, deleteFavorite } from "../controllers/charactersController.js";

const router = Router();


router.use(authMiddleware);

router.get("/random", getRandom);
router.post("/favorites", addToFavorites);
router.get("/favorites", listFavorites);
router.delete("/favorites/:id", deleteFavorite);

export default router;