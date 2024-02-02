import dbConnect from "@/db/connect";
import Article from "@/db/models/Articles";

export default async function handler(request, response) {
  await dbConnect();
  const { slug } = request.query;

  if (request.method === "GET") {
    const article = await Article.findOne({ slug: slug });
    return response.status(200).json(article);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
