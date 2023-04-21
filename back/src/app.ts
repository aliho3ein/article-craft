import express from "express";
const app = express();
import cors from "cors";

/** pages */
import articlePage from "./pages/article";
import workPage from "./pages/work";
import shopPage from "./pages/shop";
import contactPage from "./pages/contact";
import userPage from "./pages/user";

/** body-parser */
import bodyParser from "body-parser";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** middleware */
app.use(cors());

/**Pages */
app.use("/articleCraft/api/article", articlePage);
app.use("/articleCraft/api/shop", shopPage);
app.use("/articleCraft/api/work", workPage);
app.use("/articleCraft/api/contact", contactPage);
app.use("/articleCraft/api/user", userPage);

/** Listener */
app.listen(5001, () => {
  console.log("Server listening on port 5001");
});
