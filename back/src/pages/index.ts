import { Router, Request, Response } from "express";
import models from "../module";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  let result = {
    user: [],
    article: [],
    work: [],
    product: [],
  };
  models.user.find({}).then((resolve) => {
    result.user = resolve;
  });
  models.article.find({}).then((resolve) => {
    result.article = resolve;
  });
  models.work.find({}).then((resolve) => {
    result.work = resolve;
  });
  models.product
    .find({})
    .then((resolve) => {
      result.product = resolve;
    })
    .then(() => {
      res.send(result);
    });
});

export default router;
