import mongoose, { Schema } from "mongoose";

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/articleCraft");
};

connect();

/** article collection */
const articleSchema = new Schema(
  {
    title: { type: String, require: true },
    desc: { type: String, require: true },
    img: {
      type: String,
      default: "https://jdih.palembang.go.id/assets/img/no-image.png",
    },
    view: { type: Number, default: 0 },
    like: { type: Number, default: 0 },
    userId: { type: String, require: true },
    hashTag: { type: String, require: true },
  },
  { timestamps: true }
);

/** user collection */
const userSchema = new Schema(
  {
    name: { type: String, require: true },
    status: { type: String, require: true },
    skills: { type: String, require: true },
    bio: { type: String, require: true },
    img: {
      type: String,
      default: "https://kanooelite.com/wp-content/uploads/2020/11/nophoto.png",
    },
    des: { type: String },
  },
  { timestamps: true }
);

/** work collection */
const workSchema = new Schema({
  title: { type: String, require: true },
  desc: { type: String, require: true },
  link: { type: String, default: "https://github.com/aliho3ein" },
  img: { type: String, require: true },
  view: { type: Number, default: 0 },
  like: { type: Number, default: 0 },
});

/** product collection */

const productSchema = new Schema({
  title: { type: String, require: true },
  des: { type: String },
  img: { type: Array },
  price: { type: Number, require: true },
  like: { type: Number, default: 0 },
});

const models = {
  user: mongoose.model("user", userSchema),
  article: mongoose.model("article", articleSchema),
  work: mongoose.model("work", workSchema),
  product: mongoose.model("product", productSchema),
};

export default models;
