import { Router, Request, Response } from "express";
import models from "../module";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  models.product
    .find({})
    .then((resolve) => {
      res.status(200).json(resolve);
    })
    .catch((err) => res.status(500).send(err));
});

router.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  models.product
    .findById(id)
    .then((resolve) => res.status(200).json(resolve))
    .catch((err) => res.status(500).send(err));
});

router.post("/", (req: Request, res: Response) => {
  models.product
    .create(req.body)
    .then(() => res.status(201).send())
    .catch((err) => res.status(500).send(err));
});

export default router;
