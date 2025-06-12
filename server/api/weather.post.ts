import { mastra } from "../mastra";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const agent = mastra.getAgent("weatherAgent");
  const { location } = body;
  const result = await agent.generate(`What's the weather like in ${location}?`);
  return {result};
});
