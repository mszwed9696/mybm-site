import { Layout } from "@/components/layout";
import { PageMeta } from "@/components/seo";
import { useState } from "react";
import { ArrowRight, ArrowLeft, Check, Phone, Mail, MapPin } from "lucide-react";

/* ═══════════════════════════════════════════
   Multi-step intake form — ALL multiple choice
   ═══════════════════════════════════════════ */

interface Question {
  id: string;
  title: string;
  subtitle?: string;
  options: string[];
  multiple?: boolean; // allow selecting more than one
}

const steps: Question[] = [
  {
    id: "industry",
    title: "What industry are you in?",
    subtitle: "Select the option that best describes your business.",
    options: [
      "Home Services (HVAC, Plumbing, Electrical, etc.)",
      "Medical & Wellness (Dentist, Med Spa, Chiropractor, etc.)",
      "Real Estate",
      "Life Insurance",
      "Law Firm",
      "E-Commerce / Online Retail",
      "Supplement Brand",
      "Fitness / Gym",
      "Restaurant / Food Service",
      "Automotive",
      "Franchise / Multi-Location",
      "Other",
    ],
  },
  {
    id: "business_size",
    title: "How large is your team?",
    subtitle: "This helps us recommend the right service level.",
    options: [
      "Just me (solo operator)",
      "2–5 employees",
      "6–20 employees",
      "21–50 employees",
      "50+ employees",
    ],
  },
  {
    id: "revenue",
    title: "What's your approximate monthly revenue?",
    options: [
      "Under $10,000",
      "$10,000 – $25,000",
      "$25,000 – $50,000",
      "$50,000 – $100,000",
      "$100,000 – $250,000",
      "$250,000+",
      "Prefer not to say",
    ],
  },
  {
    id: "current_marketing",
    title: "What marketing are you currently doing?",
    subtitle: "Select all that apply.",
    multiple: true,
    options: [
      "Google Ads / Search Ads",
      "Meta Ads (Facebook / Instagram)",
      "TikTok Ads",
      "SEO / Organic Search",
      "Social Media (organic posts)",
      "Email Marketing",
      "Direct Mail / Print",
      "Word of mouth / Referrals only",
      "Nothing right now",
    ],
  },
  {
    id: "monthly_spend",
    title: "How much are you currently spending on marketing per month?",
    options: [
      "Nothing / $0",
      "Under $1,000",
      "$1,000 – $3,000",
      "$3,000 – $5,000",
      "$5,000 – $10,000",
      "$10,000 – $25,000",
      "$25,000+",
    ],
  },
  {
    id: "current_results",
    title: "How would you rate your current marketing results?",
    options: [
      "Not doing any marketing",
      "Not working at all — wasting money",
      "Getting some leads, but not enough",
      "Decent results, but want to scale",
      "Good results, looking to optimize",
    ],
  },
  {
    id: "biggest_challenge",
    title: "What's your biggest marketing challenge right now?",
    options: [
      "Not getting enough leads or customers",
      "Getting leads, but they're low quality",
      "Don't know what's working and what's not",
      "Spending too much money for too few results",
      "No online presence / outdated website",
      "Can't compete with bigger companies",
      "Managing reviews and reputation",
      "Don't have time to manage marketing",
    ],
  },
  {
    id: "goals",
    title: "What's your primary goal for the next 6 months?",
    options: [
      "Get more leads / customers",
      "Increase revenue",
      "Reduce marketing costs / improve ROI",
      "Build brand awareness",
      "Launch a new product or service",
      "Expand to new locations or markets",
      "Get a professional website",
      "All of the above",
    ],
  },
  {
    id: "services_interested",
    title: "Which services are you most interested in?",
    subtitle: "Select all that apply.",
    multiple: true,
    options: [
      "Ad Campaigns (Google, Meta, TikTok)",
      "SEO & Organic Marketing",
      "AI Solutions & Automations",
      "Website Design & Development",
      "Social Media Marketing",
      "Reviews Management",
      "Not sure — I want a full audit first",
    ],
  },
  {
    id: "timeline",
    title: "When are you looking to get started?",
    options: [
      "Immediately — I'm ready now",
      "Within 2 weeks",
      "Within a month",
      "Within 3 months",
      "Just exploring right now",
    ],
  },
  {
    id: "contact_method",
    title: "How would you prefer we reach out?",
    options: [
      "Phone call",
      "Email",
      "Text / SMS",
      "Video call (Zoom/Google Meet)",
    ],
  },
];

export default function FreeAuditPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = steps.length + 1; // +1 for contact info step
  const isLastQuestionStep = currentStep === steps.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const currentQuestion = currentStep < steps.length ? steps[currentStep] : null;

  const selectOption = (option: string) => {
    const q = steps[currentStep];
    const current = answers[q.id] || [];

    if (q.multiple) {
      // Toggle for multi-select
      if (current.includes(option)) {
        setAnswers({ ...answers, [q.id]: current.filter((o) => o !== option) });
      } else {
        setAnswers({ ...answers, [q.id]: [...current, option] });
      }
    } else {
      // Single select
      setAnswers({ ...answers, [q.id]: [option] });
      // Auto-advance after a brief delay
      setTimeout(() => setCurrentStep((s) => s + 1), 300);
    }
  };

  const canProceed = () => {
    if (isLastQuestionStep) {
      return contactInfo.name && contactInfo.email;
    }
    if (!currentQuestion) return false;
    return (answers[currentQuestion.id] || []).length > 0;
  };

  const handleSubmit = () => {
    // In production, this would POST to an API / webhook
    console.log("Audit request submitted:", { answers, contactInfo });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <PageMeta
          title="Audit Requested | Mind Your Business Media"
          description="Your free marketing audit request has been received."
          canonicalPath="/free-audit"
        />
        <section
          className="min-h-[70vh] flex items-center justify-center"
          style={{ backgroundColor: "#edf2f4" }}
        >
          <div className="max-w-lg mx-auto px-6 text-center">
            <div
              className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: "#22c55e20" }}
            >
              <Check size={32} style={{ color: "#22c55e" }} />
            </div>
            <h1
              className="text-3xl font-black mb-4"
              style={{ color: "#0a0908" }}
            >
              Audit request received!
            </h1>
            <p className="text-base mb-2" style={{ color: "#546a7b" }}>
              Thank you, <strong>{contactInfo.name}</strong>. We'll review your
              responses and reach out within <strong>1 business day</strong>{" "}
              with your personalized marketing audit.
            </p>
            <p className="text-sm" style={{ color: "#9ca3af" }}>
              Check your inbox at{" "}
              <strong style={{ color: "#374151" }}>{contactInfo.email}</strong>{" "}
              for a confirmation.
            </p>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageMeta
        title="Request a Free Marketing Audit | Mind Your Business Media"
        description="Answer a few quick questions about your business and current marketing. We'll deliver a personalized audit with actionable recommendations — no retainers, no obligations."
        canonicalPath="/free-audit"
      />

      <section
        className="pt-28 pb-16 min-h-screen"
        style={{ backgroundColor: "#edf2f4" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs mb-2">
              <span style={{ color: "#546a7b" }}>
                Step {currentStep + 1} of {totalSteps}
              </span>
              <span className="font-bold" style={{ color: "#af3e4d" }}>
                {Math.round(progress)}%
              </span>
            </div>
            <div
              className="h-1.5 rounded-full"
              style={{ backgroundColor: "#d1d5db" }}
            >
              <div
                className="h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  backgroundColor: "#af3e4d",
                }}
              />
            </div>
          </div>

          {/* Question card */}
          <div
            className="rounded-2xl border p-8 md:p-10"
            style={{ backgroundColor: "#fff", borderColor: "#e5e7eb" }}
          >
            {currentQuestion ? (
              <>
                <h2
                  className="text-xl md:text-2xl font-bold mb-1"
                  style={{ color: "#0a0908" }}
                >
                  {currentQuestion.title}
                </h2>
                {currentQuestion.subtitle && (
                  <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
                    {currentQuestion.subtitle}
                  </p>
                )}
                {!currentQuestion.subtitle && <div className="mb-6" />}

                <div className="space-y-2.5">
                  {currentQuestion.options.map((option) => {
                    const selected = (
                      answers[currentQuestion.id] || []
                    ).includes(option);
                    return (
                      <button
                        type="button"
                        key={option}
                        onClick={() => selectOption(option)}
                        className={`w-full text-left px-5 py-3.5 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${selected
                          ? "border-[#af3e4d] bg-[#af3e4d]/5 text-[#af3e4d]"
                          : "border-gray-200 hover:border-gray-300 text-gray-700"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-${currentQuestion.multiple ? "md" : "full"
                              } border-2 flex items-center justify-center shrink-0 transition-colors ${selected
                                ? "border-[#af3e4d] bg-[#af3e4d]"
                                : "border-gray-300"
                              }`}
                          >
                            {selected && (
                              <Check size={12} className="text-white" />
                            )}
                          </div>
                          {option}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Multi-select needs explicit next button */}
                {currentQuestion.multiple && (
                  <button
                    onClick={() => setCurrentStep((s) => s + 1)}
                    disabled={!canProceed()}
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
                    style={{ backgroundColor: "#af3e4d" }}
                  >
                    Continue
                    <ArrowRight size={14} />
                  </button>
                )}
              </>
            ) : (
              /* ── Contact info step ── */
              <>
                <h2
                  className="text-xl md:text-2xl font-bold mb-1"
                  style={{ color: "#0a0908" }}
                >
                  Almost done! How can we reach you?
                </h2>
                <p className="text-sm mb-6" style={{ color: "#9ca3af" }}>
                  We'll never share your info or put you on a sales list.
                </p>

                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: "#374151" }}
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={contactInfo.name}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm focus:outline-none focus:border-[#af3e4d] transition-colors"
                      style={{ borderColor: "#e5e7eb" }}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: "#374151" }}
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={contactInfo.email}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm focus:outline-none focus:border-[#af3e4d] transition-colors"
                      style={{ borderColor: "#e5e7eb" }}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: "#374151" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={contactInfo.phone}
                      onChange={(e) =>
                        setContactInfo({ ...contactInfo, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm focus:outline-none focus:border-[#af3e4d] transition-colors"
                      style={{ borderColor: "#e5e7eb" }}
                      placeholder="(856) 350-4733"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: "#374151" }}
                    >
                      Website URL
                    </label>
                    <input
                      type="url"
                      value={contactInfo.website}
                      onChange={(e) =>
                        setContactInfo({
                          ...contactInfo,
                          website: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-xl border-2 text-sm focus:outline-none focus:border-[#af3e4d] transition-colors"
                      style={{ borderColor: "#e5e7eb" }}
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="mt-8 w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold text-white transition-all hover:scale-105 disabled:opacity-40 disabled:hover:scale-100"
                  style={{ backgroundColor: "#af3e4d" }}
                >
                  Submit My Audit Request
                  <ArrowRight size={14} />
                </button>
              </>
            )}
          </div>

          {/* Nav buttons */}
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep((s) => s - 1)}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#af3e4d]"
              style={{ color: "#546a7b" }}
            >
              <ArrowLeft size={14} />
              Back
            </button>
          )}

          {/* Contact sidebar info */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone size={18} style={{ color: "#af3e4d" }} />
              <p className="text-xs font-semibold" style={{ color: "#374151" }}>
                (856) 350-4733
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail size={18} style={{ color: "#af3e4d" }} />
              <p className="text-xs font-semibold" style={{ color: "#374151" }}>
                hello@mindyourbusiness.media
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin size={18} style={{ color: "#af3e4d" }} />
              <p className="text-xs font-semibold" style={{ color: "#374151" }}>
                Serving Clients Nationwide
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
