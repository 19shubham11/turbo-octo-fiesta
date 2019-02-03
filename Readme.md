This is a simple node client-server simulating the client(s) sensors sending near real-time data to a server.

### Requests
Instead of each request directly going to the server, I am queuing 5 requests at a time and sending the batch to the server. This approach is similar to individual sensor nodes sending data to an intermediate sensor which in turn forwards the messages to the server, this usually saves battery life of the sensors which are usually low powered.

### Compression
Requests made by the intermidate node (batch of 5) are compressed uzing gzip and the same is unzippd at the server.

### Setup and tests
* Install dependencies inside sender and receiver directory.
* Install dependencies on the root level (used for tests)

This project is configured with `jest` and unit tests can be executed using `npm test`
