import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from "node:worker_threads";

console.log({ workerData });

console.log({ isMainThread });

const someMath = workerData + 2;

parentPort.postMessage(someMath);
