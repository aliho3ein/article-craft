import { Router, Request, Response } from "express";
const router = Router();

router.post("/", (req: Request, res: Response) => {
  res.status(204).send();
});

export default router;
