import { Router, Request, Response } from "express";
import models from "./../module";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  models.work.find({}).then((resolve) => res.status(200).json(resolve));
});

router.post("/", (req: Request, res: Response) => {
  models.work
    .create(req.body)
    .then((resolve) => {
      res.status(200).send(resolve);
    })
    .catch((err) => res.status(500).send(err));
});

router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  models.work
    .findByIdAndUpdate(id, data, { new: true })
    .then((resolve) => {
      res.status(200).send(resolve);
    })
    .catch((err) => res.status(500).send("Internal server error"));
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  models.work
    .findByIdAndRemove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => res.status(500).send(err));
});

export default router;
