import { z } from "zod";

export const toolSelectionSchema = z.object({
    tool: z.string(),
    plan: z.string(),
    monthlySpend: z.number().min(0),
    seats: z.number().min(1),
});

export const auditSchema = z.object({
    teamSize: z.number().min(1),
    primaryUseCase: z.enum([
        "coding",
        "writing",
        "research",
        "data",
        "mixed",
    ]),

    tools: z.array(toolSelectionSchema).min(1),
});