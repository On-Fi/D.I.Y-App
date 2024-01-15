import dbConnect from "@/db/connect";
import Project from "@/db/models/Project";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const projects = await Project.find();
    return response.status(200).json(projects);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
