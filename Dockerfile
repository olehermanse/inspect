FROM denoland/deno:1.40.2 AS run
WORKDIR /request
COPY server.ts server.ts
CMD [ "deno" , "run", "--allow-net", "server.ts" ]
