// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/03cfecf7a0318e619c9edf3cd71b7455995c0ba3/keygrip/index.d.ts
declare module 'keygrip' {
// Type definitions for keygrip 1.0
// Project: https://github.com/crypto-utils/keygrip
// Definitions by: jKey Lu <https://github.com/jkeylu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Keygrip {
    sign(data: any): string;
    verify(data: any, digest: string): boolean;
    index(data: any, digest: string): number;
}

interface KeygripFunction {
    new (keys: string[], algorithm?: string, encoding?: string): Keygrip;
    (keys: string[], algorithm?: string, encoding?: string): Keygrip;
}

const Keygrip: KeygripFunction;

export = Keygrip;
}
