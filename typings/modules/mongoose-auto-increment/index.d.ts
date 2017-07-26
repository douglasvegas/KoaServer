// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/fa204a87d12d36f7adc4f18349781b9878dcc741/mongoose-auto-increment/index.d.ts
declare module 'mongoose-auto-increment' {
// Type definitions for mongoose-auto-increment 5.0.1
// Project: https://github.com/codetunnel/mongoose-auto-increment
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


import { Connection, Schema, Mongoose } from 'mongoose';

/**
 * Initialize plugin by creating counter collection in database.
 */
function initialize(connection: Connection): void;

/**
 * The function to use when invoking the plugin on a custom schema.
 */
function plugin(schema: Schema, options: Object): void;
}
