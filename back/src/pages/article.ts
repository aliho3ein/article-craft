import { Router, Request, Response } from "express";
import { model } from "mongoose";
const router = Router();
import models from "./../module";

router.get("/", async (req: Request, res: Response) => {
  const data = await models.article.find({});
  res.status(200).json(data);
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await models.article.findById(id);
  res.status(200).json(data);
});

router.post("/", (req, res) => {
  models.article
    .create({
      ...req.body,
      userId: "1",
    })
    .then((resolve) => {
      res.status(200).send(resolve);
    })
    .catch((err) => res.status(500).send(err));
});

router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  models.article
    .findByIdAndUpdate(id, data, { new: true })
    .then((resolve) => {
      res.status(200).send(resolve);
    })
    .catch((err) => res.status(500).send("Internal server error"));
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  models.article
    .findByIdAndRemove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => res.status(500).send(err));
});

router.put("/viewAndLike/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  models.article
    .findByIdAndUpdate(id, req.body, { new: true })
    .then(() => res.status(204).send());
});

export default router;
