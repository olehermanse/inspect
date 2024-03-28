# Inspect request headers

https://inspect.oleherman.com

## Run with docker

```
docker build --tag inspect . && docker run -it -p 3000:3000 --name inspect --rm inspect
```

http://127.0.0.1:3000


## Run with Deno (without Docker)

Start the server with deno:

```
deno run --allow-net server.ts
```

For development purposes it defaults to port 3000:

http://127.0.0.1:3000
