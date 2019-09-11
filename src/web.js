const loader = require("assemblyscript/lib/loader");

const compiled = new WebAssembly.Module(fetch(__dirname + "/../build/optimized.wasm"));
const imports = {};
Object.defineProperty(module, "exports", {
    get: () => loader.instantiate(compiled, imports)
});
