/**
 * Industry data for dynamic industry landing pages.
 * Each entry drives /industries/:slug
 */

export interface FaqItem {
    question: string;
    answer: string;
}

export interface StatItem {
    label: string;
    value: string;
}

export interface IndustryData {
    slug: string;
    title: string;
    category: string;
    headline: string;
    description: string;
    services: string[];
    painPoints: string[];
    seoKeywords: string[];
    geoTargets: string[];
    industryTrends: string[];
    faqItems: FaqItem[];
    statistics: StatItem[];
    blogSlugs: string[];
    ctaText: string;
    longDescription: string;
}

import { homeServicesA } from "./industries/homeServices";
import { homeServicesB } from "./industries/homeServicesB";
import { medicalWellness } from "./industries/medicalWellness";
import { professionalFinancial } from "./industries/professionalFinancial";
import { ecommerceRetail } from "./industries/ecommerceRetail";
import { ecommerceRetailB } from "./industries/ecommerceRetailB";

export const industries: IndustryData[] = [
    ...homeServicesA,
    ...homeServicesB,
    ...medicalWellness,
    ...professionalFinancial,
    ...ecommerceRetail,
    ...ecommerceRetailB,
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
    return industries.find((i) => i.slug === slug);
}
