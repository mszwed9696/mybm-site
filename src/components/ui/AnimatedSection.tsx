import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

/* ── Fade + slide-up on scroll ── */
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function AnimatedSection({
    children,
    className = "",
    delay = 0,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ── Stagger container ── */
const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

export function StaggerContainer({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* ── Stagger item – multiple directions ── */
const slideVariants: Record<string, Variants> = {
    up: {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    },
    left: {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    },
    right: {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    },
};

export function StaggerItem({
    children,
    className = "",
    direction = "up",
}: {
    children: ReactNode;
    className?: string;
    direction?: "up" | "left" | "right" | "scale";
}) {
    return (
        <motion.div variants={slideVariants[direction]} className={className}>
            {children}
        </motion.div>
    );
}
