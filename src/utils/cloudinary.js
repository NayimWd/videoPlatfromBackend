import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload an image
const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file on cludinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "image",
    });
    //file has been uploaded successfully
    console.log("File is uploaded on cloudinary:", response.url);
    return response;
  } catch (error) {
    console.log(error);
    fs.unlinkSync(localFilePath); // removing temp file from local, that failed
    return null;
  }
};

export { uploadOnCloudinary };

