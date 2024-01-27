import stdout from "node:process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const curentFile = path.resolve(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const stream = fs.createReadStream(curentFile, { encoding: "utf-8" });

  stream.on("data", (chunk) => {
    process.stdout.write(chunk)
  });

  stream.on("error", (e) => {
    console.log(e);
  });

  stream.on("end", () => {
    console.log("end of process");
  });
};

await read();
