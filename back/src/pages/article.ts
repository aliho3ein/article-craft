import { Router, Request, Response } from "express";
const router = Router();
import models from "./../module";

router.get("/", async (req: Request, res: Response) => {
  const data = await models.article.find({});
  res.json(data);
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  // const data = await models.article.findById(id);
  console.log(id);

  const data = await models.article.findById("643e4c2671b3bbe62d2e682f");
  res.json(data);
});

export default router;
