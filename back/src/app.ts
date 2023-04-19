import express from "express";
const app = express();
import cors from "cors";

/** pages */
import articlePage from "./pages/article";
import workPage from "./pages/work";
import shopPage from "./pages/shop";
import contact from "./pages/contact";

/** body-parser */
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** middleware */
// app.use((req, res, next) => {
//   cors({
//     origin: "http://localhost:3000",
//   });
//   next();
// });

const corses = cors({
  origin: "http://localhost:3000",
});

/**Pages */
app.use("/articleCraft/api/article", corses, articlePage);
app.use("/articleCraft/api/shop", shopPage);
app.use("/articleCraft/api/work", workPage);
app.use("/articleCraft/api/contact", contact);

/** Listener */
app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
