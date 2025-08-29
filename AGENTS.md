# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## MCP Integration

**MCP Servers Configured:**
- `mastra`: Provides Mastra.ai documentation and examples via `@mastra/mcp-docs-server`
- `context7`: Provides library documentation via `@upstash/context7-mcp`
- `nuxt`: Provides Nuxt app understanding via `nuxt-mcp` module (available at http://localhost:3000/__mcp/sse when Nuxt dev server is running)
- `nuxt-docs`: Provides official Nuxt documentation via https://mcp.nuxt.com/sse

**CRITICAL: For all Mastra-related queries, agents MUST consult the MCP server first:**
- Use the MCP tools for Mastra documentation, examples, and changelogs
- The MCP provides up-to-date Mastra.ai documentation and code examples
- Avoid making assumptions about Mastra APIs - always verify through MCP

## Non-Obvious Project Patterns

**Mastra Configuration:**
- Mastra agents and workflows are configured in `server/mastra/` directory, not the typical Nuxt server routes
- Uses OpenRouter with deepseek/deepseek-chat-v3.1 model (configured in both agent and workflow)
- Environment variable `OPENROUTER_API_KEY` is required for Mastra to function

**API Structure:**
- Server API endpoints are in `server/api/` but delegate to Mastra agents in `server/mastra/`
- The weather endpoint (`weather.post.ts`) uses agent streaming responses with `.toTextStreamResponse()`

**Build & Development:**
- Mastra has separate dev/build commands: `mastra:dev` and `mastra:build`
- Mastra development server runs alongside Nuxt dev server
- `.mastra` directory is excluded from TypeScript compilation and Nuxt processing

**Environment Setup:**
- Requires `.env` file with OpenRouter API key (template in `.env.example`)
- No test commands in package.json - testing setup not configured

**Architecture Notes:**
- Frontend (`app/`) directly calls Mastra agents via API routes
- Agent tools use external weather APIs (open-meteo.com) for data
- Workflows combine multiple steps with structured data validation using Zod