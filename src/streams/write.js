import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const curentFile = path.resolve(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  const stream = fs.createWriteStream(curentFile, { encoding: "utf-8" });

  stream.on("finish", () => {
    console.log("Completed");
  });

  stream.on("error", (e) => {
    console.log(e);
  });

  process.stdin.pipe(stream);
};

await write();
