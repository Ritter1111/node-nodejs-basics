import { createGzip } from "node:zlib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const curentFile = path.resolve(__dirname, "files", "fileToCompress.txt");
const compressedFile = path.resolve(__dirname, "files", "archive.gz");

const gzip = createGzip();
const source = fs.createReadStream(curentFile, { encoding: "utf-8" });
const destination = fs.createWriteStream(compressedFile, { encoding: "utf-8" });

const compress = async () => {
  source.pipe(gzip).pipe(destination);
  destination.on("finish", () => {
    console.log("Compressed finish");
  });

  destination.on("error", (e) => {
    console.log(e);
  });
};

await compress();
