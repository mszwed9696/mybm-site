import { seoPages1 } from "./seoPages1";
import { seoPages2 } from "./seoPages2";
import { seoPages3 } from "./seoPages3";
import type { SEOPageData } from "./seoPages1";

export type { SEOPageData };

export const allSeoPages: SEOPageData[] = [...seoPages1, ...seoPages2, ...seoPages3];

export const seoPageSlugs = allSeoPages.map((page) => page.slug);
