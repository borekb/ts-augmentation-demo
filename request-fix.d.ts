/*
 * Uncommenting the below will lead to:
 * 
 * > app.ts(3,4): error TS2339: Property 'get' does not exist on type 'typeof 'request''.
 * 
 */

// declare module 'request' {
//     import * as http from 'http';
//     export interface RequestResponse extends http.IncomingMessage {
//         body: any;
//     }
// }
