// this import must be at the top level, not inside `module 'request'`
import * as http from 'http';

declare module 'request' {
    interface RequestResponse extends http.IncomingMessage {
        body: any;
    }
}
