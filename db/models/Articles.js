import mongoose from "mongoose";

const { Schema } = mongoose;

const articleSchema = new Schema({
  title: { type: String },
  image: { type: String },
  category: { type: String },
  body: { type: String },
  slug: { type: String }, 
});

const Article =
  mongoose.models.Article || mongoose.model("Article", articleSchema);

export default Article;
