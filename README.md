##Steps

1. Create react app:

`create-react-app cra-hello-world`

2. Add `blockstack` library.:

`yarn add blockstack`

3. Enable CORS to allow `blockstack.com` to access dev server:


- Add the `headers` to `node_modules/react-scripts/config/webpackDevServer.config`  after `return {`:

``` json
headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
```

