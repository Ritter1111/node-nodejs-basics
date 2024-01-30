import fs from "node:fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const curentFile = path.join(__filename, "..", "files", "fileToRead.txt");

const read = async () => {
  try {
    const readFile = await fs.promises.readFile(curentFile, "utf-8");
    console.log(readFile);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
