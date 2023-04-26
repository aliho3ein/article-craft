import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";
const router = Router();

router.post("/", (req: Request, res: Response) => {
  let detail = {
    from: "aliho3ein.onlineshop@gmail.com",
    to: "alihossain.ahmadi@hotmail.com",
    subject: "new massage from your website --- DON'T REPLY ---",
    html: createEmail(req.body),
  };

  mailTransporter.sendMail(detail, (err) => {
    err ? res.status(500).send(err) : res.status(204).send("ok");
  });
});

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aliho3ein.onlineshop@gmail.com",
    pass: "youfaajvhyxmvzrs",
  },
});

export default router;

const createEmail = (props) => {
  return `
 <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <style>
      section {
        height: 750px;
        width: 480px;
        margin: 50px auto;
        border-radius: 10px;
        padding: 50px 50px 0;
        background-color:#f3f4f5;
      }
      h2 {
        font-weight: 500;
        text-align: start;
        width: 100%;
        font-size: 1rem;
      }
      p {
        margin-top: 50px;
        font-size: 1rem;
      }
      img {
        width: 450px;
      }
      h3 {
        text-align: center;
        color: navy;
        user-select: none;
        text-align:center
      }
    </style>
  </head>
  <body>
  <section>
      <h2>Sender : ${props.name}</h2>
      <h2>
        Email :
        <a title="reply" href="mailto:${props.email}"
          >${props.email}</a
        >
      </h2>
      <p>${props.massage}</p>
      <hr/>
      <img
        src="
    https://www.netbooster.fr/wp-content/uploads/2021/03/meilleurs-outils-emailing-marketing.png
    "
      />
      <h3>Please DON'T reply this Email</h3>
      </section>
  </body>
</html>`;
};
