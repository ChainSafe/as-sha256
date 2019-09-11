/**
 * Wraps the AssemblyScript build in a JS function.
 * This allows users to not have to make AS a dependency in their project.
 * @param {Uint8Array} message Message to hash
 */
export declare function hash(message): Uint8Array;

export declare function clean(): void;

export declare function init(): void;

export declare function update(data, length): void;

export declare function digest(): Uint8Array;

