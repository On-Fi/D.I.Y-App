import dbConnect from "@/db/connect";
import Project from "@/db/models/Project";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }
  if (request.method === "GET") {
    const project = await Project.findById(id);
    return response.status(200).json(project);
  } else if (session && request.method === "PATCH") {
    const projectData = request.body;
    await Project.findByIdAndUpdate(id, projectData);
    return response
      .status(200)
      .json({ status: "Project successfully updated" });
  } else if (session && request.method === "DELETE") {
    await Project.findByIdAndDelete(request.query.id);
    return response.status(200).json({ status: "Project deleted" });
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
