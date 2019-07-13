const Module = require('../cpp/sha256.js');
// console.log(Module.ccall("sha256", "string", ["string"], ["asasdas"]));
// console.log(Module.ccall("add", "number", ["number", "number"], [2, 3]));

Module.onRuntimeInitialized = function() {
  console.log(Module._sha256("sadasd"));
};
