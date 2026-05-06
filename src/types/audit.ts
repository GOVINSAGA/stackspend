export type ToolName =
    | "cursor"
    | "copilot"
    | "claude"
    | "chatgpt"
    | "anthropic-api"
    | "openai-api"
    | "gemini"
    | "windsurf";

export type PrimaryUseCase =
    | "coding"
    | "writing"
    | "research"
    | "data"
    | "mixed";

export interface ToolSelection {
    tool: ToolName;
    plan: string;
    monthlySpend: number;
    seats: number;
}

export interface AuditInput {
    teamSize: number;
    primaryUseCase: PrimaryUseCase;
    tools: ToolSelection[];
}