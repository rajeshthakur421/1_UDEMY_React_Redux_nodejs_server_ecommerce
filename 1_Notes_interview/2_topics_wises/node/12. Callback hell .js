function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 complete");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 complete");
    callback();
  }, 1000);
}

//....n

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});
