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
    resolve.forEach((element) => {
      result.user.push({
        name: element.name,
        img: element.img,
        bio: element.bio,
        skills: element.skills,
        status: element.status,
      });
    });
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
