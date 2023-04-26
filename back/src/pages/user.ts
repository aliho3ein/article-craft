import { Router, Request, Response } from "express";
import models from "../module";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  models.user.find({}).then((resolve) => res.status(200).json(resolve));
});

router.post("/", (req: Request, res: Response) => {
  models.user
    .create(req.body)
    .then(() => res.status(201).send())
    .catch((err) => res.status(500).send);
});

export default router;
