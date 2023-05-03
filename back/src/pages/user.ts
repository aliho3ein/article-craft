import { Router, Request, Response } from "express";
import models from "../module";
const router = Router();

router.get("/", (req: Request, res: Response) => {
  models.user.find({}).then((resolve) => res.status(200).json(resolve));
});

router.get("/info", (req: Request, res: Response) => {
  const projection = { name: 1, img: 1, bio: 1, skills: 1, status: 1, _id: 0 }; // Include only name and email fields, exclude _id

  models.user.find({}, projection).then((resolve) => {
    res.send(resolve);
  });
});

router.post("/", (req: Request, res: Response) => {
  models.user
    .create(req.body)
    .then((resolve) => res.status(200).send(resolve))
    .catch((err) => res.status(500).send);
});

router.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  models.user
    .findByIdAndUpdate(id, data, { new: true })
    .then((resolve) => {
      res.status(200).send(resolve);
    })
    .catch((err) => res.status(500).send("Internal server error"));
});

router.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  models.user
    .findByIdAndRemove(id)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/login", async (req: Request, res: Response) => {
  const { email, pass } = req.body;

  const result = await models.user.findOne({
    $and: [{ email }, { pass }],
  });

  result
    ? res.status(200).send([result._id, result.name])
    : res.status(401).send();
});

router.post("/checkId", async (req: Request, res: Response) => {
  const { id } = req.body;
  const result = await models.user.findById(id);

  result ? res.status(201).send() : res.status(401).send();
});

/** Reset Password */
router.post("/reset", (req: Request, res: Response) => {
  models.user
    .findOne({ email: req.body.mail })
    .then((resolve) => {
      if (resolve) {
        resetPassword(resolve);
        res.status(200).send(resolve);
      } else {
        res.status(404).send();
      }
    })
    .catch((err) => console.log("error"));
});

export default router;

/*********************************************** */
import nodemailer from "nodemailer";

/** Uppercase and Lowercase alphabet **/
const rnId = (length = 8) => {
  let code = "";
  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * (122 - 65) + 65);
    if (num <= 96 && num >= 91) num += 6;
    code += String.fromCodePoint(num);
  }
  return code;
};

const resetPassword = (data: any) => {
  const newPass = rnId();

  let detail = {
    from: "aliho3ein.onlineshop@gmail.com",
    to: data.email,
    subject: "Reset Password ---PLEASE DON'T REPLY ---",
    html: createEmail(data.name, newPass),
  };

  models.user
    .findByIdAndUpdate(data.id, { $set: { pass: newPass } }, { new: true })
    .then((res) => {
      mailTransporter.sendMail(detail, (err) => {
        console.log(err);
      });
    });
};

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aliho3ein.onlineshop@gmail.com",
    pass: "youfaajvhyxmvzrs",
  },
});

const createEmail = (user: string, pass: string) => {
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
        font-weight: 700;
        text-align: start;
        width: 100%;
        font-size: 1rem;
        color: navy;
      
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
      <p>Dear ${user},

      We have received your request to change your password. To ensure the security of your account, we have generated a new password for you.
      
      Your new password is: <h2>${pass}</h2>
      <br/>
      We recommend that you change this password to something more memorable as soon as possible. To do so, please log in to your account and navigate to the password settings section. Once there, you will be able to create a new password of your choosing.
      <br/>
      
      If you did not request a password change, please contact us immediately so we can investigate.
      <br/>
      
      Thank you for choosing our service and we apologize for any inconvenience this may have caused.
      <br/>
      
      Best regards,
      <br/>
      
      articleCraft Team</p>
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
