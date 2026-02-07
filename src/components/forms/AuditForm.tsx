import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const revenueOptions = [
  "Under $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000 - $500,000",
  "$500,000 - $1,000,000",
  "$1,000,000+",
];

const adSpendOptions = [
  "Under $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000+",
];

const platformOptions = [
  { id: "meta", label: "Meta (Facebook/Instagram)" },
  { id: "google", label: "Google Ads" },
  { id: "tiktok", label: "TikTok Ads" },
  { id: "youtube", label: "YouTube Ads" },
  { id: "other", label: "Other" },
];

export function AuditForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const { toast } = useToast();

  const handlePlatformChange = (platformId: string, checked: boolean) => {
    setSelectedPlatforms((prev) =>
      checked ? [...prev, platformId] : prev.filter((p) => p !== platformId)
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Audit Request Submitted!",
      description: "We'll review your information and send your custom audit within 48 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="card-elevated p-10 md:p-14 text-center">
        <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-8 h-8 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="heading-subsection mb-5">Your Audit is On The Way!</h3>
        <p className="text-body text-muted-foreground max-w-md mx-auto">
          We've received your request and will deliver a custom performance audit 
          to your inbox within 48 hours. This will include actionable insights on 
          wasted ad spend, funnel leaks, and ROAS opportunities.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-elevated p-8 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input
            id="fullName"
            name="fullName"
            required
            className="input-glow"
            placeholder="John Smith"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="input-glow"
            placeholder="john@supplement.com"
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            className="input-glow"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Company Name */}
        <div className="space-y-2">
          <Label htmlFor="company">Company Name *</Label>
          <Input
            id="company"
            name="company"
            required
            className="input-glow"
            placeholder="Supplement Co."
          />
        </div>

        {/* Website */}
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="website">Company Website *</Label>
          <Input
            id="website"
            name="website"
            type="url"
            required
            className="input-glow"
            placeholder="https://yoursupplement.com"
          />
        </div>

        {/* Monthly Revenue */}
        <div className="space-y-2">
          <Label htmlFor="revenue">Current Monthly Revenue *</Label>
          <Select name="revenue" required>
            <SelectTrigger className="input-glow">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {revenueOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Monthly Ad Spend */}
        <div className="space-y-2">
          <Label htmlFor="adSpend">Current Monthly Ad Spend *</Label>
          <Select name="adSpend" required>
            <SelectTrigger className="input-glow">
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {adSpendOptions.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Advertising Platforms */}
        <div className="space-y-4 md:col-span-2">
          <Label>Primary Advertising Platforms *</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {platformOptions.map((platform) => (
              <div key={platform.id} className="flex items-center space-x-3">
                <Checkbox
                  id={platform.id}
                  checked={selectedPlatforms.includes(platform.id)}
                  onCheckedChange={(checked) =>
                    handlePlatformChange(platform.id, checked as boolean)
                  }
                  className="border-border data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                />
                <Label
                  htmlFor={platform.id}
                  className="text-sm font-normal cursor-pointer"
                >
                  {platform.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <Button
          type="submit"
          variant="glow"
          size="xl"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            "Request My Free Audit"
          )}
        </Button>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Your information is secure and will only be used to prepare your audit.
        </p>
      </div>
    </form>
  );
}
