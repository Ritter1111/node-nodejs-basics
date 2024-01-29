import { Worker, isMainThread, parentPort } from "worker_threads";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const curentFile = path.resolve(__dirname, "worker.js");
const numberOfCPUCores = os.cpus().length;

const performCalculations = async () => {
  if (isMainThread) {
    const threads = [];

    for (let i = 0; i < numberOfCPUCores; i++) {
      const worker = new Worker(curentFile, { workerData: 10 + i });
      const workerPromise = new Promise((res, req) => {
        worker.on("message", (msg) => {
          res({ status: "resolved", data: msg });
        });

        worker.on("error", () => {
          req({ status: "error", data: null });
        });
      });
      threads.push(workerPromise);
    }

    console.log(await Promise.all(threads));
  }
};

await performCalculations();
