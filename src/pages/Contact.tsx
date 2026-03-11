import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { PageMeta, JsonLd } from "@/components/seo";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
     const [isSubmitting, setIsSubmitting] = useState(false);
     const { toast } = useToast();

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setIsSubmitting(true);
          await new Promise((resolve) => setTimeout(resolve, 1500));
          setIsSubmitting(false);
          toast({
               title: "Message Sent!",
               description: "We'll get back to you within 24 hours.",
          });
          (e.target as HTMLFormElement).reset();
     };

     return (
          <Layout noPaddingTop>
               <PageMeta
                    title="Contact Us | Mind Your Business Media — Let's Talk Growth"
                    description="Get in touch with Mind Your Business Media. Have questions about scaling your supplement brand? We'll respond within 24 hours."
                    keywords="contact supplement marketing agency, supplement brand help, marketing agency contact, mind your business media contact"
                    canonicalPath="/contact"
               />
               <JsonLd
                    type="BreadcrumbList"
                    breadcrumbs={[
                         { name: "Home", path: "/" },
                         { name: "Contact", path: "/contact" },
                    ]}
               />
               {/* Hero */}
               <PageHero
                    label="Contact Us"
                    title={<>Let's Talk{" "} <span className="text-gradient-accent">Growth</span></>}
                    description="Have questions about working with us? Reach out and we'll get back
 to you within 24 hours."
               />

               {/* Main Content Wrapper for Sweep-Over Effect */}
               <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419]">

                    {/* Contact Form & Info */}
                    <section className="section-padding">
                         <div className="container-wide">
                              <div className="grid lg:grid-cols-2 gap-16">
                                   {/* Form */}
                                   <div className="p-8 md:p-12 glass-panel inner-glow card-3d relative overflow-hidden bg-[#1A1A22]/50" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                        <div className="gradient-border-top" />
                                        <h2 className="text-xl md:text-2xl font-bold mb-6 relative z-10" style={{ color: "white" }}>Send Us a Message</h2>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                  <div className="space-y-2">
                                                       <Label htmlFor="name">Full Name *</Label>
                                                       <Input
                                                            id="name"
                                                            name="name"
                                                            required
                                                            className="input-glow"
                                                            placeholder="John Smith"
                                                       />
                                                  </div>
                                                  <div className="space-y-2">
                                                       <Label htmlFor="email">Email *</Label>
                                                       <Input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            required
                                                            className="input-glow"
                                                            placeholder="john@company.com"
                                                       />
                                                  </div>
                                             </div>
                                             <div className="space-y-2">
                                                  <Label htmlFor="company">Company Name</Label>
                                                  <Input
                                                       id="company"
                                                       name="company"
                                                       className="input-glow"
                                                       placeholder="Your Supplement Brand"
                                                  />
                                             </div>
                                             <div className="space-y-2">
                                                  <Label htmlFor="message">Message *</Label>
                                                  <Textarea
                                                       id="message"
                                                       name="message"
                                                       required
                                                       className="input-glow min-h-[150px]"
                                                       placeholder="Tell us about your brand and what you're looking to achieve..."
                                                  />
                                             </div>
                                             <Button
                                                  type="submit"
                                                  variant="glow"
                                                  size="lg"
                                                  className="w-full"
                                                  disabled={isSubmitting}
                                             >
                                                  {isSubmitting ? (
                                                       <>
                                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                            Sending...
                                                       </>
                                                  ) : (
                                                       "Send Message"
                                                  )}
                                             </Button>
                                        </form>
                                   </div>

                                   {/* Contact Info */}
                                   <div className="space-y-8">
                                        <div>
                                             <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                                             <p className="text-muted-foreground mb-8">
                                                  Whether you're ready to scale or just exploring options,
                                                  we're here to help. Reach out through any of the channels below.
                                             </p>
                                        </div>

                                        <div className="space-y-6">
                                             <div className="p-6 flex items-start gap-4 glass-panel inner-glow card-3d relative overflow-hidden bg-[#1A1A22]/50" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                                  <div className="gradient-border-top" />
                                                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                                       <Mail className="text-accent" size={24} />
                                                  </div>
                                                  <div>
                                                       <h3 className="font-semibold mb-1">Email</h3>
                                                       <p className="text-muted-foreground">hello@mindyourbusiness.media</p>
                                                  </div>
                                             </div>

                                             <div className="p-6 flex items-start gap-4 glass-panel inner-glow card-3d relative overflow-hidden bg-[#1A1A22]/50" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                                  <div className="gradient-border-top" />
                                                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                                       <Phone className="text-accent" size={24} />
                                                  </div>
                                                  <div>
                                                       <h3 className="font-semibold mb-1">Phone</h3>
                                                       <p className="text-muted-foreground">Available upon request</p>
                                                  </div>
                                             </div>

                                             <div className="p-6 flex items-start gap-4 glass-panel inner-glow card-3d relative overflow-hidden bg-[#1A1A22]/50" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                                  <div className="gradient-border-top" />
                                                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                                                       <MapPin className="text-accent" size={24} />
                                                  </div>
                                                  <div>
                                                       <h3 className="font-semibold mb-1">Location</h3>
                                                       <p className="text-muted-foreground">Remote-first agency serving clients globally</p>
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="p-8 text-center glass-panel inner-glow card-3d relative overflow-hidden bg-[#1A1A22]/50" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                             <div className="gradient-border-top" />
                                             <p className="text-lg font-semibold mb-2">Prefer a Performance Audit?</p>
                                             <p className="text-muted-foreground mb-4">
                                                  Get actionable insights on your current marketing.
                                             </p>
                                             <Button asChild variant="glow-outline" size="lg">
                                                  <a href="/free-audit">Request Free Audit</a>
                                             </Button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
               </div>
          </Layout>
     );
}
