import { mastra } from "../mastra";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const agent = mastra.getAgent("weatherAgent");
  const { location } = body;

  const agentStream = await agent.stream(
    `What's the weather like in ${location}?`,
  );

  return agentStream.toTextStreamResponse();
});
