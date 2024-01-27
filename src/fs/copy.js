import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newFolder = path.join(__dirname, "files_copy");
const curentFolder = path.join(__dirname, "files");

const copy = async () => {
  try {
    await fs.promises.cp(curentFolder, newFolder, { recursive: true });
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
