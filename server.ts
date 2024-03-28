const port = 3000;

const handler = (request: Request): Response => {
  let headers = "";
  for (const [key, value] of request.headers.entries()) {
    headers += "" + key + ": " + value + "\n";
  }
  const body = `The request headers you sent:\n\n${
     headers
  }`;

  return new Response(body, { status: 200 });
};

console.log(`HTTP server running. Access it at: http://localhost:3000/`);
Deno.serve({ port }, handler);
