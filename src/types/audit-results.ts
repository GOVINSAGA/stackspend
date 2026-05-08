export interface AuditRecommendation {
    tool: string;

    currentPlan: string;

    recommendedPlan: string;

    currentSpend: number;

    recommendedSpend: number;

    monthlySavings: number;

    annualSavings: number;

    reason: string;

    severity: "low" | "medium" | "high";
}

export interface AuditResult {
    totalMonthlySavings: number;

    totalAnnualSavings: number;

    recommendations: AuditRecommendation[];

    optimized: boolean;
}