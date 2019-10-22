import wasmCode from "../build/optimized.wasm";
import {Buffer} from "safe-buffer";
import * as loader from "assemblyscript/lib/loader";


const compiled = new WebAssembly.Module(Buffer.from(wasmCode, 'binary'));
const imports = {};
Object.defineProperty(module, "exports", {
    get: () => loader.instantiate(compiled, imports)
});
