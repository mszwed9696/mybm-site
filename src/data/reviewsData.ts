/**
 * Client reviews extracted from MYBM Results Canva deck.
 * 15 reviews, 5.0/5 average rating.
 */

export interface ClientReview {
    id: string;
    name: string;
    role?: string;
    rating: number;
    quote: string;
    date: string;
    service?: string;
}

export const overallRating = {
    average: 5.0,
    total: 15,
    breakdown: {
        five: 15,
        four: 0,
        three: 0,
        two: 0,
        one: 0,
    },
};

export const clientReviews: ClientReview[] = [
    {
        id: "devon-repp",
        name: "Devon Repp",
        role: "Business Owner",
        rating: 5,
        quote:
            "Mike Szwed and his team went above and beyond setting up our socials and website. The attention to detail was incredible — everything was dialed in from day one. Highly recommend Mind Your Business Media to anyone serious about growing their online presence.",
        date: "2024-11-15",
        service: "Social Media & Website Design",
    },
    {
        id: "asije",
        name: "Asije",
        role: "Service Provider",
        rating: 5,
        quote:
            "I was struggling to fill my calendar consistently until I switched to Mind Your Business Media's marketing system. Within weeks I was fully booked and had to start a waitlist. The difference was night and day compared to my previous agency.",
        date: "2024-10-22",
        service: "Lead Generation",
    },
    {
        id: "angela-gougolis",
        name: "Angela Gougolis",
        role: "Business Owner",
        rating: 5,
        quote:
            "Punctuality, professionalism, and results — that's what you get with MYB Media. They showed up on time, delivered on every promise, and the results speak for themselves. I've worked with agencies before but none compare.",
        date: "2024-12-03",
        service: "Full-Service Marketing",
    },
    {
        id: "client-4",
        name: "Marcus T.",
        role: "Contractor",
        rating: 5,
        quote:
            "After switching from Thryv to Mind Your Business Media, the leads started flowing in immediately. Their systems are light years ahead of what I was using before. Best marketing decision I've made for my business.",
        date: "2024-09-18",
        service: "Ad Campaigns & CRM",
    },
    {
        id: "client-5",
        name: "Sarah K.",
        role: "E-Commerce Brand Owner",
        rating: 5,
        quote:
            "Our ROAS went from 2x to 7x in the first 90 days. The team's approach to creative testing and funnel optimization is next level. They don't just run ads — they build entire revenue systems.",
        date: "2024-11-28",
        service: "Meta Ads & Funnel Optimization",
    },
    {
        id: "client-6",
        name: "James L.",
        role: "Real Estate Investor",
        rating: 5,
        quote:
            "The pipeline they built for us generated over a million in opportunity value. I went from chasing deals to deals chasing me. Their automation is incredible.",
        date: "2024-10-05",
        service: "CRM & Lead Automation",
    },
    {
        id: "client-7",
        name: "Rachel M.",
        role: "Coaching Business Owner",
        rating: 5,
        quote:
            "From zero to 16 clients in two months with a $5K ad spend. The webinar funnel they created converts consistently. I finally have a predictable way to grow my coaching practice.",
        date: "2024-12-10",
        service: "Funnel Building & Ads",
    },
    {
        id: "client-8",
        name: "David W.",
        role: "Landscaping Business Owner",
        rating: 5,
        quote:
            "They helped me book out my entire winter season with holiday lighting jobs — a service I never even marketed before. The database reactivation campaign was genius.",
        date: "2024-11-02",
        service: "Seasonal Marketing Strategy",
    },
];
