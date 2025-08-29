# Nuxt 4 + Mastra Starter Kit with MCP Integration

This project uses Nuxt 4 and the Mastra.ai agent framework with full Model Context Protocol (MCP) integration for enhanced AI development capabilities.

## Stack

- [Nuxt 4.0.3](https://nuxt.com) - Front-end, API functions
- [Mastra](https://mastra.ai/) - AI agent framework
- [OpenRouter](https://openrouter.ai/) - AI model provider with deepseek/deepseek-chat-v3.1
- [MCP Servers](https://modelcontextprotocol.io/) - Model Context Protocol integration

## MCP Server Integration

This project includes comprehensive MCP server configuration for enhanced development:

- **`mastra`** - Mastra.ai documentation and examples via `@mastra/mcp-docs-server`
- **`context7`** - Library documentation via `@upstash/context7-mcp`
- **`nuxt`** - Nuxt app understanding via `nuxt-mcp` module (available at http://localhost:3000/__mcp/sse when Nuxt dev server is running)
- **`nuxt-docs`** - Official Nuxt documentation via https://mcp.nuxt.com/sse

## Architecture Overview

- **Frontend**: Nuxt 4 app in `app/` directory
- **API Layer**: Server API endpoints in `server/api/` that delegate to Mastra agents
- **AI Agents**: Mastra agents and workflows configured in `server/mastra/` directory
- **MCP Integration**: Configured in `.roo/mcp.json` for enhanced AI development experience

The weather agent demonstrates:
- Streaming responses with `.toTextStreamResponse()`
- External API integration (open-meteo.com)
- Structured data validation using Zod
- OpenRouter integration with deepseek model

## Getting Started

### Prerequisites

- Node.js 18+ 
- OpenRouter API key

### Installation

Install dependencies:

```sh
pnpm install
```

### Environment Setup

1. Get an API key from [OpenRouter](https://openrouter.ai/keys)
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Add your OpenRouter API key to `.env`:
   ```bash
   OPENROUTER_API_KEY=your_actual_api_key_here
   ```

### Development

Run Nuxt development server:

```sh
pnpm dev
```

Run Mastra development server (in separate terminal):

```sh
pnpm mastra:dev
```

The application will be available at http://localhost:3000

## Available Commands

- `pnpm dev` - Start Nuxt development server
- `pnpm mastra:dev` - Start Mastra development server
- `pnpm mastra:build` - Build Mastra for production
- `pnpm build` - Build Nuxt for production
- `pnpm generate` - Generate static site
- `pnpm preview` - Preview production build

## Key Dependencies

- **@mastra/core**: ^0.15.2 - Mastra core framework
- **@mastra/libsql**: ^0.13.7 - SQLite integration
- **nuxt-mcp**: ^0.2.4 - Nuxt MCP module
- **@openrouter/ai-sdk-provider**: ^1.1.2 - OpenRouter integration
- **zod**: ^3.25.63 - Schema validation

## Project Structure

```
├── app/                 # Nuxt frontend application
├── server/
│   ├── api/            # API endpoints
│   └── mastra/         # Mastra agents and workflows
│       ├── agents/     # AI agents
│       ├── tools/      # Agent tools
│       └── workflows/  # Multi-step workflows
├── .roo/
│   └── mcp.json        # MCP server configuration
└── AGENTS.md           # Agent development guidelines
```

## Contributing

Contributions welcome! Please refer to [AGENTS.md](AGENTS.md) for detailed guidance on working with agents and MCP integration in this repository.

## MCP Development Notes

For optimal development experience with MCP:
- Ensure both Nuxt dev server (`pnpm dev`) and Mastra dev server (`pnpm mastra:dev`) are running
- The `.mastra` directory is excluded from TypeScript compilation and Nuxt processing
- MCP servers provide real-time documentation and code examples for Mastra and Nuxt development
