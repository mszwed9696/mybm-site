import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute("content", "noindex, nofollow");

    document.title = "Page Not Found | Mind Your Business Media";

    return () => {
      if (robotsMeta) {
        robotsMeta.setAttribute("content", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
      }
      document.title = "Mind Your Business Media | Performance Marketing Agency for Supplement Brands";
    };
  }, [location.pathname]);

  return (
    <Layout>
      <section className="section-padding min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-accent font-medium mb-4">404 Error</p>
          <h1 className="heading-xl mb-6 glow-text">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild variant="glow" size="lg">
            <Link to="/">
              <ArrowLeft className="mr-2" />
              Return to Home
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
