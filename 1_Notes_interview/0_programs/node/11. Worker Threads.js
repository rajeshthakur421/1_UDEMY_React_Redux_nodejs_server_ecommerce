const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  // Main thread
  const worker = new Worker(__filename, {
    workerData: { input: "some data" },
  });

  worker.on("message", (message) => {
    console.log("Received message from worker:", message);
  });

  worker.on("error", (err) => {
    console.error("Worker error:", err);
  });

  worker.on("exit", (code) => {
    if (code !== 0) {
      console.error(`Worker stopped with exit code ${code}`);
    }
  });
} else {
  // Worker thread
  const { input } = workerData;
  console.log("Worker thread received:", input);
  parentPort.postMessage("Message from worker");
}
