// lib/uploadthingClient.js
import { generateComponents } from "@uploadthing/react";
import { ourFileRouter } from "@/app/api/uploadthing/core";

/**
 * Create client hooks and components based on your FileRouter
 */
export const {
  useUploadThing,
  UploadDropzone,
  UploadButton,
  Uploader,
} = generateComponents({
  router: ourFileRouter,
});
