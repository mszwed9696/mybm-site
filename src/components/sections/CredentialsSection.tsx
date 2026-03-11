import { motion } from "motion/react";

const credentials = [
    {
        name: "Google Partner",
        description: "Certified Google Ads management",
        logo: "https://cdn.simpleicons.org/google/white"
    },
    {
        name: "Meta Business Partner",
        description: "Official Meta advertising partner",
        logo: "https://cdn.simpleicons.org/meta/white"
    },
];

export function CredentialsSection() {
    return (
        <section
            className="py-24 md:py-32 relative overflow-hidden"
            style={{ backgroundColor: "#0C0C0F" }}
        >
            <div className="container-wide">
                {/* Heading */}
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-label mb-4">Credentials That Count</p>
                    <h2 className="heading-section">
                        Certified <em>Excellence</em>
                    </h2>
                    <p
                        className="mt-4 text-base leading-relaxed"
                        style={{ color: "rgba(244, 244, 245, 0.5)" }}
                    >
                        We hold certifications from the platforms that matter most,
                        ensuring your campaigns are managed by verified experts.
                    </p>
                </motion.div>

                {/* Credential badges grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto gap-6">
                    {credentials.map((cred, idx) => (
                        <motion.div
                            key={cred.name}
                            className="flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-300"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.03)",
                                border: "1px solid rgba(255, 255, 255, 0.06)",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            whileHover={{
                                borderColor: "rgba(175, 62, 77, 0.3)",
                                y: -4,
                                backgroundColor: "rgba(175, 62, 77, 0.04)"
                            }}
                        >
                            {/* Badge icon */}
                            <div
                                className="w-16 h-16 rounded-xl flex items-center justify-center mb-5"
                                style={{
                                    background: "rgba(255, 255, 255, 0.05)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)"
                                }}
                            >
                                <img
                                    src={cred.logo}
                                    alt={cred.name}
                                    className="w-8 h-8 opacity-90"
                                />
                            </div>
                            <p
                                className="text-xs font-bold"
                                style={{ color: "var(--brand-light)" }}
                            >
                                {cred.name}
                            </p>
                            <p
                                className="text-[10px] mt-1"
                                style={{ color: "rgba(244, 244, 245, 0.4)" }}
                            >
                                {cred.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
