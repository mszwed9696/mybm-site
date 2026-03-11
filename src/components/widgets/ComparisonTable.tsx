import { Check, X } from "lucide-react";

interface Props {
    oldWay: string[];
    mybWay: string[];
}

export function ComparisonTable({ oldWay, mybWay }: Props) {
    return (
        <div className="grid md:grid-cols-2 gap-6">
            {/* Old Way */}
            <div
                className="rounded-2xl p-7 relative overflow-hidden glass-panel inner-glow card-3d"
                style={{
                    background: "linear-gradient(145deg, rgba(220, 38, 38, 0.05) 0%, rgba(20, 20, 25, 0.9) 100%)",
                    border: "1px solid rgba(220, 38, 38, 0.15)",
                }}
            >
                <div className="gradient-border-top" />
                <div className="flex items-center gap-2 mb-5">
                    <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(220, 38, 38, 0.15)" }}
                    >
                        <X size={16} style={{ color: "#ef4444" }} />
                    </div>
                    <h4 className="font-bold text-sm uppercase tracking-wider" style={{ color: "#fca5a5" }}>
                        The Old Way
                    </h4>
                </div>
                <p className="text-xs font-semibold mb-4" style={{ color: "#ef4444" }}>
                    Traditional Agency Retainer
                </p>
                <ul className="space-y-3">
                    {oldWay.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <X size={14} className="shrink-0 mt-0.5" style={{ color: "#ef4444" }} />
                            <span className="text-sm" style={{ color: "rgba(244,244,245,0.7)" }}>
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mind Your Business Media Way */}
            <div
                className="rounded-2xl p-7 relative overflow-hidden glass-panel inner-glow card-3d"
                style={{
                    background: "linear-gradient(145deg, rgba(34, 197, 94, 0.05) 0%, rgba(20, 20, 25, 0.9) 100%)",
                    border: "1px solid rgba(34, 197, 94, 0.15)",
                }}
            >
                <div className="gradient-border-top" />
                {/* Subtle glow */}
                <div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-[40px] pointer-events-none"
                    style={{ background: "#22c55e" }}
                />
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-5">
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ background: "rgba(34, 197, 94, 0.15)" }}
                        >
                            <Check size={16} style={{ color: "#4ade80" }} />
                        </div>
                        <h4 className="font-bold text-sm uppercase tracking-wider" style={{ color: "#86efac" }}>
                            The Mind Your Business Media Way
                        </h4>
                    </div>
                    <p className="text-xs font-semibold mb-4" style={{ color: "#4ade80" }}>
                        Pay for Performance
                    </p>
                    <ul className="space-y-3">
                        {mybWay.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <Check
                                    size={14}
                                    className="shrink-0 mt-0.5"
                                    style={{ color: "#4ade80" }}
                                />
                                <span className="text-sm font-medium" style={{ color: "#fff" }}>
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
