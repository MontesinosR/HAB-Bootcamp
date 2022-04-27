"use strict";

const f1 = () => {
  console.log("f1");
};

const f2 = () => {
  console.log("f2");
};

const f3 = (callback) => {
  console.log("f3");
  callback();
};

setTimeout(f1, 0);

f1();
f2(f1());
f3(f2);

// f1 f1 f2 f3 f2 f1
