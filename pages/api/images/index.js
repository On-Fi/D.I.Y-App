import formidable from "formidable";
import cloudinary from "cloudinary";

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(request, response) {
  if (request.method === "POST") {
    try {
      const form = formidable({});
      const [, files] = await form.parse(request);
      const cloudinaryResponse = await cloudinary.v2.uploader.upload(
        files.file[0].filepath,
        { public_id: files.file[0].newFilename, folder: "diy" }
      );
      return response.status(201).json(cloudinaryResponse);
    } catch (error) {
      console.error("Something went wrong, please try again.");
    }
  } else {
    response.status(400).json({ status: "Method not allowed" });
  }
}
