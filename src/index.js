import wasm from "./wasm";
import {Buffer} from "safe-buffer";

/**
 * Wraps the AssemblyScript build in a JS function.
 * This allows users to not have to make AS a dependency in their project.
 * @param {Uint8Array} message Message to hash
 */
export default function sha256(message) {
  const buf = Buffer.from(message);
  const arr = wasm.__retain(wasm.__allocArray(wasm.UINT8ARRAY_ID, buf));
  const pointer = wasm.hash(arr);
  const result = wasm.__getUint8Array(pointer);
  wasm.__release(arr);
  wasm.__release(pointer);
  return result;
}

export function clean() {
  wasm.clean();
}

export function init() {
  clean();
}

export function update(data, length) {
  const arr = wasm.__retain(wasm.__allocArray(wasm.UINT8ARRAY_ID, data));
  wasm.update(arr, length);
  wasm.__release(arr);
}

export function digest() {
  const digestPointer = wasm.digest();
  const digest = wasm.__getUint8Array(digestPointer);
  wasm.__release(digestPointer);
  return digest;
}
