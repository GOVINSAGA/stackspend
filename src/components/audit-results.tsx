import { AuditResult } from "@/types/audit-results";

interface Props {
    results: AuditResult;
}

export function AuditResults({
    results,
}: Props) {
    return (
        <div className="mt-10 space-y-6">
            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
                <p className="text-sm text-green-300">
                    Estimated Savings
                </p>

                <h2 className="mt-2 text-5xl font-bold">
                    ${results.totalMonthlySavings.toFixed(0)}
                    /mo
                </h2>

                <p className="mt-2 text-gray-300">
                    ${results.totalAnnualSavings.toFixed(0)}
                    annual savings potential
                </p>
            </div>

            {results.optimized ? (
                <div className="rounded-2xl border border-white/10 p-6">
                    <h3 className="text-xl font-semibold">
                        You're spending well
                    </h3>

                    <p className="mt-2 text-gray-400">
                        Your current AI tooling setup already appears reasonably optimized.
                    </p>
                </div>
            ) : (
                results.recommendations.map(
                    (recommendation, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-white/10 p-6"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold capitalize">
                                    {recommendation.tool}
                                </h3>

                                <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-300">
                                    Save $
                                    {recommendation.monthlySavings.toFixed(
                                        0
                                    )}
                                    /mo
                                </span>
                            </div>

                            <p className="mt-4 text-gray-300">
                                {recommendation.reason}
                            </p>

                            <div className="mt-4 text-sm text-gray-400">
                                {recommendation.currentPlan} →{" "}
                                {recommendation.recommendedPlan}
                            </div>
                        </div>
                    )
                )
            )}
        </div>
    );
}