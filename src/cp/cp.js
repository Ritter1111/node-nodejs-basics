import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const curentFile = path.resolve(__dirname, "files", "script.js");

const spawnChildProcess = async (args) => {
  const childProsses = spawn("node", [curentFile, ...args]);

  process.stdin.pipe(childProsses.stdin);
  childProsses.stdout.pipe(process.stdout);

  childProsses.on("error", (e) => {
    console.log(e);
  });
};

spawnChildProcess(["dsl", "jdsh"]);
