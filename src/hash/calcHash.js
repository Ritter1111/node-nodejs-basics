import fs from "fs";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToHash = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const hash = crypto.createHash("sha256");
  const stream = fs.createReadStream(fileToHash);
  stream.on("data", (data) => {
    hash.update(data);
  });

  stream.on("end", () => {
    const calculatedHash = hash.digest("hex");
    console.log("Hash:", calculatedHash);
  });

  stream.on("error", (err) => {
    console.error("Error:", err);
  });
};

await calculateHash();
