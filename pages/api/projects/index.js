import dbConnect from "@/db/connect";
import Project from "@/db/models/Project";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  await dbConnect();

  if (request.method === "GET") {
    const projects = await Project.find();
    return response.status(200).json(projects);
  }

  if (session && request.method === "POST") {
    try {
      const projectData = request.body;

      await Project.create(projectData);

      return response.status(201).json({ status: "Project created" });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
