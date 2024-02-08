import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: false },
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  time: { type: Number, required: true },
  priceCategory: { type: String, required: true },
  tools: { type: Array, required: true },
  material: { type: Array, required: true },
  instructions: { type: Array, required: true },
  count: { type: Number, required: true },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
