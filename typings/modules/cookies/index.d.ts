// Generated by typings
// Source: https://raw.githubusercontent.com/jstype/typed-npm-keygrip/1d5b66d22c3932a75f583c62a70b4e634144a0bd/index.d.ts
declare module '~cookies~keygrip/index' {
class Keygrip {
    constructor(keys: string[]);
    constructor(keys: string[], algorithm: string);
    constructor(keys: string[], algorithm: string, encoding: string);

    /**
     * message signing
     */
    sign(data: any): string;

    verify(data: any, digest: string): boolean;

    index(data: any, digest: string): number;
}

export = Keygrip;
}

// Generated by typings
// Source: https://raw.githubusercontent.com/jstype/typed-npm-cookies/d7a6a9ca89a62960caaf53aa890594afa1829a3c/lib/cookies.d.ts
declare module 'cookies' {
import { IncomingMessage, ServerResponse } from 'http';
import Keygrip = require('~cookies~keygrip/index');

interface Cookies {
    secure: boolean;
    request: IncomingMessage;
    response: ServerResponse;

    get(name: string): string;
    get(name: string, opts: Cookies.GetOption): string;

    set(name: string): this;
    set(name: string, value: string): this;
    set(name: string, value: string, opts: Cookies.SetOption): this;
}

namespace Cookies {
    export interface Option {
        keys: string[] | Keygrip;
        secure?: boolean;
    }

    export interface GetOption {
        signed: boolean;
    }

    export interface SetOption {
        maxAge?: number;
        expires?: Date;
        path?: string;
        domain?: string;
        secure?: boolean;
        httpOnly?: boolean;
        signed?: boolean;
        overwrite?: boolean;
    }

    export type CookieAttr = SetOption;

    export interface Cookie {
        name: string;
        value: string;
        /**
         * back-compat so maxage mirrors maxAge
         */
        maxage: number;
        maxAge: number;
        expires: Date;
        path: string;
        domain: string;
        secure: boolean;
        httpOnly: boolean;
        overwrite: boolean;

        toString(): string;
        toHeader(): string;
    }
}

interface createCookies {
    (request: IncomingMessage, response: ServerResponse): Cookies;
    (request: IncomingMessage, response: ServerResponse, options: string[]): Cookies;
    (request: IncomingMessage, response: ServerResponse, options: Keygrip): Cookies;
    (request: IncomingMessage, response: ServerResponse, options: Cookies.Option): Cookies;

    new (request: IncomingMessage, response: ServerResponse): Cookies;
    new (request: IncomingMessage, response: ServerResponse, options: string[]): Cookies;
    new (request: IncomingMessage, response: ServerResponse, options: Keygrip): Cookies;
    new (request: IncomingMessage, response: ServerResponse, options: Cookies.Option): Cookies;

    Cookie: {
        new (name: string): Cookies.Cookie;
        new (name: string, value: string): Cookies.Cookie;
        new (name: string, value: string, attrs: Cookies.CookieAttr): Cookies.Cookie;
    };
}

const Cookies: createCookies;

export = Cookies;
}
