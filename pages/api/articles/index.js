import dbConnect from "@/db/connect";
import Article from "@/db/models/Articles";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const articles = await Article.find();
    return response.status(200).json(articles);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
