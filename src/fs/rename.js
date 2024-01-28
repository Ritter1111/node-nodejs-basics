import fs from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const curentFile = path.join(__dirname, "files", "wrongFilename.txt");
const renamedFile = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    await fs.promises.access(curentFile, fs.constants.F_OK);
    await fs.promises.rename(curentFile, renamedFile);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
