import { mastra } from "../mastra";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const agent = mastra.getAgent("weatherAgent");
  const { location } = body;

  const agentStream = await agent.streamVNext(
    [{ role: "user", content: `What's the weather like in ${location}?` }]
  );

  // Create a ReadableStream from the textStream
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of agentStream.textStream) {
          controller.enqueue(new TextEncoder().encode(chunk));
        }
        controller.close();
      } catch (error) {
        controller.error(error);
      }
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked'
    }
  });
});
