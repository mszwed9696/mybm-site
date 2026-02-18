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
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{
                    background: "#fef2f2",
                    border: "1px solid #fecaca",
                }}
            >
                <div className="flex items-center gap-2 mb-5">
                    <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: "#fee2e2" }}
                    >
                        <X size={16} style={{ color: "#dc2626" }} />
                    </div>
                    <h4 className="font-bold text-sm uppercase tracking-wider" style={{ color: "#991b1b" }}>
                        The Old Way
                    </h4>
                </div>
                <p className="text-xs font-semibold mb-4" style={{ color: "#b91c1c" }}>
                    Traditional Agency Retainer
                </p>
                <ul className="space-y-3">
                    {oldWay.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <X size={14} className="shrink-0 mt-0.5" style={{ color: "#ef4444" }} />
                            <span className="text-sm" style={{ color: "#7f1d1d" }}>
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* MYB Way */}
            <div
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{
                    background: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                }}
            >
                {/* Subtle glow */}
                <div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-30 blur-[40px]"
                    style={{ background: "#22c55e" }}
                />
                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-5">
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ background: "#dcfce7" }}
                        >
                            <Check size={16} style={{ color: "#16a34a" }} />
                        </div>
                        <h4 className="font-bold text-sm uppercase tracking-wider" style={{ color: "#166534" }}>
                            The MYB Way
                        </h4>
                    </div>
                    <p className="text-xs font-semibold mb-4" style={{ color: "#15803d" }}>
                        Pay for Performance
                    </p>
                    <ul className="space-y-3">
                        {mybWay.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <Check
                                    size={14}
                                    className="shrink-0 mt-0.5"
                                    style={{ color: "#22c55e" }}
                                />
                                <span className="text-sm font-medium" style={{ color: "#14532d" }}>
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
