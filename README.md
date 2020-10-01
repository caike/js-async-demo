# Non-blocking Node Example

Example app showing the non-blocking nature of Node.js

## Running

- Run API with `json-server --delay 5000 db.json`
- Run server with `node app.js`
- Run `bash run.sh` and notice how new requests are processed by the server even before the call to the API is completed.
