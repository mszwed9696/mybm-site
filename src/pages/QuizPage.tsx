import { QuizWizard } from "@/components/quiz/QuizWizard";
import { Layout } from "@/components/layout";

export default function QuizPage() {
    return (
        <Layout>
            <main className="container-wide py-16 md:py-24">
                {/* Header */}
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                        Free Growth Assessment
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">
                        Discover Your{" "}
                        <span className="text-accent">Growth Bottleneck</span>
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Answer 7 quick questions and we'll identify exactly what's holding
                        your supplement brand back — with a personalized growth plan to fix
                        it.
                    </p>
                </div>

                {/* Quiz */}
                <QuizWizard />

                {/* Trust Signals */}
                <div className="text-center mt-12 space-y-2">
                    <p className="text-sm text-muted-foreground">
                        🔒 Your information is secure and will never be shared.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Takes less than 2 minutes • 100% free • No strings attached
                    </p>
                </div>
            </main>
        </Layout>
    );
}
