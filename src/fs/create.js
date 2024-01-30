import fs from "node:fs/promises";
import path from "path";

const create = async () => {
  const directoryPath = "src/fs/files";
  const filePath = path.join(directoryPath, "fresh.txt");
  const content = "I am fresh and young";

  try {
    fs.access(filePath, fs.F_OK);
    throw new Error("File already exist");
  } catch (error) {
    console.log(error);
  }

  fs.writeFile(filePath, content);
};

await create();
