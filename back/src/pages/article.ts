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

router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  models.article
    .findByIdAndUpdate(id, data, { new: true })
    .then(() => {
      models.article
        .findById(id)
        .then((resolve) => res.status(200).send(resolve));
    })
    .catch((err) => res.status(500).send("Internal server error"));
});

export default router;
