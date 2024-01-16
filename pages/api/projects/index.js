import dbConnect from "@/db/connect";
import Project from "@/db/models/Project";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const projects = await Project.find();
    return response.status(200).json(projects);
  }
  if (request.method === "POST") {
    try {
      const projectData = request.body;
      console.log("in api: ", projectData);
      await Project.create(projectData);
      return response.status(201).json({ status: "Project created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
