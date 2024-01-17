import dbConnect from "@/db/connect";
import Project from "@/db/models/Project";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (!id) {
    return;
  }
  if (request.method === "GET") {
    const project = await Project.findById(id);
    return response.status(200).json(project);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
