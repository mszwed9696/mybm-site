/**
 * LogoCarousel — Auto-scrolling marquee of partner/integration logos.
 * Inspired by Stripe's logo carousel with seamless infinite scroll.
 * Pauses on hover, grayscale → color on hover per logo.
 */
export function LogoCarousel({
    logos,
    speed = 30,
    className = "",
}: {
    logos: { name: string; icon: React.ReactNode }[];
    speed?: number;
    className?: string;
}) {
    return (
        <div className={`logo-carousel ${className}`}>
            <div
                className="logo-carousel__track"
                style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
            >
                <ul className="logo-carousel__list">
                    {logos.map((logo, i) => (
                        <li key={`a-${i}`} className="logo-carousel__item">
                            <div className="logo-carousel__icon">{logo.icon}</div>
                            <span className="logo-carousel__name">{logo.name}</span>
                        </li>
                    ))}
                </ul>
                {/* Duplicate for seamless loop */}
                <ul className="logo-carousel__list" aria-hidden="true">
                    {logos.map((logo, i) => (
                        <li key={`b-${i}`} className="logo-carousel__item">
                            <div className="logo-carousel__icon">{logo.icon}</div>
                            <span className="logo-carousel__name">{logo.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
