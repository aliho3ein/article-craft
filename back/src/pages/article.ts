import { Router, Request, Response } from "express";
const router = Router();
import models from "./../module";

router.get("/", async (req: Request, res: Response) => {
  const data = await models.article.find({});
  res.status(200).json(data);
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await models.article.findById(id);
  console.log(data);

  res.status(200).json(data);
});

router.post("/", (req, res) => {
  models.article
    .create({
      ...req.body,
      userId: "1",
    })
    .then(() => {
      res.status(201).send();
    })
    .catch((err) => res.status(500).send(err));
});

export default router;
