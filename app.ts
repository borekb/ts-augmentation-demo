import * as rq from 'request';

rq.get('https://google.com/', (err, response, body) => {
    response.statusCode;
    response.body;
    response.request;
});
