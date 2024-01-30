import fs from "node:fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const fileToRemove = path.join(__filename, "..", "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.promises.unlink(fileToRemove);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
