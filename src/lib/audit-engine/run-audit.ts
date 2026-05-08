import { AuditInput } from "@/types/audit";

import { AuditResult } from "@/types/audit-results";

import { generateRecommendations } from "./rules";

export function runAudit(
    input: AuditInput
): AuditResult {
    const recommendations =
        generateRecommendations(input);

    const totalMonthlySavings =
        recommendations.reduce(
            (sum, recommendation) =>
                sum + recommendation.monthlySavings,
            0
        );

    const totalAnnualSavings =
        totalMonthlySavings * 12;

    return {
        recommendations,

        totalMonthlySavings,

        totalAnnualSavings,

        optimized:
            recommendations.length === 0,
    };
}