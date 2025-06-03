import express from "express";
import type { RequestHandler } from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const sayWelcome: RequestHandler = (req, res) => {
  res.send("Welcome to wild Series !");
};

router.get("/", sayWelcome);
// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

export default router;
