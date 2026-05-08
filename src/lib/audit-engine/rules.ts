import { AuditInput } from "@/types/audit";
import { AuditRecommendation } from "@/types/audit-results";

export function generateRecommendations(
    input: AuditInput
): AuditRecommendation[] {
    const recommendations: AuditRecommendation[] = [];

    for (const tool of input.tools) {
        // Rule 1
        // Small teams on enterprise plans

        if (
            input.teamSize <= 3 &&
            tool.plan === "enterprise"
        ) {
            recommendations.push({
                tool: tool.tool,

                currentPlan: tool.plan,

                recommendedPlan: "business",

                currentSpend: tool.monthlySpend,

                recommendedSpend:
                    tool.monthlySpend * 0.5,

                monthlySavings:
                    tool.monthlySpend * 0.5,

                annualSavings:
                    tool.monthlySpend * 0.5 * 12,

                reason:
                    "Enterprise plans are usually unnecessary for teams under 3 people.",

                severity: "high",
            });
        }

        // Rule 2
        // Solo user on team plan

        if (
            input.teamSize === 1 &&
            tool.plan === "team"
        ) {
            recommendations.push({
                tool: tool.tool,

                currentPlan: tool.plan,

                recommendedPlan: "pro",

                currentSpend: tool.monthlySpend,

                recommendedSpend:
                    tool.monthlySpend * 0.6,

                monthlySavings:
                    tool.monthlySpend * 0.4,

                annualSavings:
                    tool.monthlySpend * 0.4 * 12,

                reason:
                    "Team plans are likely overkill for solo usage.",

                severity: "medium",
            });
        }

        // Rule 3
        // Very high spend per seat

        const spendPerSeat =
            tool.monthlySpend / tool.seats;

        if (spendPerSeat > 80) {
            recommendations.push({
                tool: tool.tool,

                currentPlan: tool.plan,

                recommendedPlan: tool.plan,

                currentSpend: tool.monthlySpend,

                recommendedSpend:
                    tool.monthlySpend * 0.8,

                monthlySavings:
                    tool.monthlySpend * 0.2,

                annualSavings:
                    tool.monthlySpend * 0.2 * 12,

                reason:
                    "Your spend per seat is unusually high compared to typical startup usage.",

                severity: "medium",
            });
        }
    }

    return recommendations;
}