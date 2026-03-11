import { QuizWizard } from "@/components/quiz/QuizWizard";
import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";

export default function QuizPage() {
    return (
        <Layout noPaddingTop>
            <PageHero
                label="Free Growth Assessment"
                title={
                    <>
                        Discover Your{" "}
                        <span style={{ color: "#af3e4d" }}>Growth Bottleneck</span>
                    </>
                }
                description="Answer 7 quick questions and we'll identify exactly what's holding your supplement brand back — with a personalized growth plan to fix it."
            />

            {/* Main Content Wrapper for Sweep-Over Effect */}
            <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419] min-h-screen">
                <main className="container-wide py-16 md:py-24">
                    {/* Quiz */}
                    <QuizWizard />

                    {/* Trust Signals */}
                    <div className="text-center mt-12 space-y-2">
                        <p className="text-sm text-[rgba(244,244,245,0.7)]">
                            🔒 Your information is secure and will never be shared.
                        </p>
                        <p className="text-sm text-[rgba(244,244,245,0.7)]">
                            Takes less than 2 minutes • 100% free • No strings attached
                        </p>
                    </div>
                </main>
            </div>
        </Layout>
    );
}
