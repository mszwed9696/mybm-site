import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

/**
 * Non-critical UI providers. Lazy-loaded so they don't block first paint.
 * Toaster / Sonner only fire when user performs an action (form submit, etc.).
 * TooltipProvider wraps nothing critical here — tooltips still work in isolation.
 */
export default function LazyProviders() {
    return (
        <TooltipProvider>
            <Toaster />
            <Sonner />
        </TooltipProvider>
    );
}
