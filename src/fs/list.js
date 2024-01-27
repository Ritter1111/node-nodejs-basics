import fs from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const curentFolder = path.join(__dirname, "files");

const list = async () => {
  try {
    const directory = await fs.promises.readdir(curentFolder);
    directory.forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
