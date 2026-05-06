"use client";

import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    auditSchema,
    type AuditSchema,
} from "@/lib/validations/audit-schema";

import {
    loadAuditData,
    saveAuditData,
} from "@/lib/utils/local-storage";

export function AuditForm() {
    const form = useForm<AuditSchema>({
        resolver: zodResolver(auditSchema),

        defaultValues: {
            teamSize: 1,
            primaryUseCase: "coding",

            tools: [
                {
                    tool: "cursor",
                    plan: "pro",
                    monthlySpend: 20,
                    seats: 1,
                },
            ],
        },
    });

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = form;

    useEffect(() => {
        const savedData = loadAuditData();

        if (savedData) {
            reset(savedData);
        }
    }, [reset]);

    const watchedValues = watch();

    useEffect(() => {
        saveAuditData(watchedValues);
    }, [watchedValues]);

    const onSubmit = (data: AuditSchema) => {
        console.log("AUDIT DATA:", data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <div>
                <label className="mb-2 block text-sm font-medium">
                    Team Size
                </label>

                <input
                    type="number"
                    {...register("teamSize", {
                        valueAsNumber: true,
                    })}
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                />

                {errors.teamSize && (
                    <p className="mt-2 text-sm text-red-500">
                        {errors.teamSize.message}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-2 block text-sm font-medium">
                    Primary Use Case
                </label>

                <select
                    {...register("primaryUseCase")}
                    className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                >
                    <option value="coding">Coding</option>
                    <option value="writing">Writing</option>
                    <option value="research">Research</option>
                    <option value="data">Data</option>
                    <option value="mixed">Mixed</option>
                </select>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
                <h3 className="mb-6 text-lg font-semibold">
                    AI Tool
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Tool
                        </label>

                        <select
                            {...register("tools.0.tool")}
                            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                        >
                            <option value="cursor">Cursor</option>
                            <option value="copilot">GitHub Copilot</option>
                            <option value="claude">Claude</option>
                            <option value="chatgpt">ChatGPT</option>
                            <option value="gemini">Gemini</option>
                            <option value="windsurf">Windsurf</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Plan
                        </label>

                        <select
                            {...register("tools.0.plan")}
                            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                        >
                            <option value="free">Free</option>
                            <option value="pro">Pro</option>
                            <option value="team">Team</option>
                            <option value="business">Business</option>
                            <option value="enterprise">Enterprise</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Monthly Spend ($)
                        </label>

                        <input
                            type="number"
                            {...register("tools.0.monthlySpend", {
                                valueAsNumber: true,
                            })}
                            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Seats
                        </label>

                        <input
                            type="number"
                            {...register("tools.0.seats", {
                                valueAsNumber: true,
                            })}
                            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none"
                        />
                    </div>
                </div>
            </div>

            <button
                type="submit"
                className="w-full rounded-xl bg-white px-4 py-3 font-medium text-black transition hover:opacity-90"
            >
                Run Audit
            </button>
        </form>
    );
}