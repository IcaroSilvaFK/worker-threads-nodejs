import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from "node:worker_threads";

console.log("Main thread");

const worker = new Worker("./src/worker.js", {
  workerData: 1,
});

worker.on("message", (data) => {
  console.log({ data });
});
