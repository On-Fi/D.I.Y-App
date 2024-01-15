import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: false },
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  time: { type: Number, required: true },
  priceCategory: { type: String, required: true },
  tools: { type: String, required: true },
  material: { type: String, required: true },
  instructions: { type: String, required: true },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
