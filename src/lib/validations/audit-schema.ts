import { z } from "zod";

export const toolSelectionSchema = z.object({
    tool: z.string().min(1, "Tool is required"),

    plan: z.string().min(1, "Plan is required"),

    monthlySpend: z
        .number()
        .min(0, "Monthly spend cannot be negative"),

    seats: z
        .number()
        .min(1, "Seats must be at least 1"),
});

export const auditSchema = z.object({
    teamSize: z
        .number()
        .min(1, "Team size must be at least 1"),

    primaryUseCase: z.enum([
        "coding",
        "writing",
        "research",
        "data",
        "mixed",
    ]),

    tools: z.array(toolSelectionSchema).min(1),
});

export type AuditSchema = z.infer<typeof auditSchema>;