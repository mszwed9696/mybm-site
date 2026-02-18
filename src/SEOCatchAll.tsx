import { useLocation } from "react-router-dom";
import { lazy, Suspense, useMemo } from "react";
import { seoPageSlugs } from "./data/seoPages";

// Only loaded when this chunk is needed
const SEOPage = lazy(() => import("./pages/SEOPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

interface SEOCatchAllProps {
    fallback?: React.ReactNode;
}

/**
 * Catch-all route handler that checks if the current path matches an SEO page slug.
 * This keeps the 292KB of SEO page data OUT of the main bundle — it only loads
 * when a user navigates to a path not matched by explicit routes.
 */
export default function SEOCatchAll({ fallback }: SEOCatchAllProps) {
    const { pathname } = useLocation();
    const slug = pathname.replace(/^\//, "");

    const isSeoPage = useMemo(
        () => seoPageSlugs.includes(slug),
        [slug]
    );

    if (isSeoPage) {
        return (
            <Suspense fallback={null}>
                <SEOPage />
            </Suspense>
        );
    }

    // Not an SEO page — show 404
    return (
        <Suspense fallback={null}>
            {fallback || <NotFound />}
        </Suspense>
    );
}
