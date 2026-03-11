import React, { useState } from 'react';
import { Layout } from '@/components/layout';
import { PageMeta } from '@/components/seo/PageMeta';
import { PageHero } from '@/components/sections/PageHero';
import { AlertCircle, Download, Image as ImageIcon, Loader2, Sparkles, Wand2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { generateImage, GenerateImageOptions } from '@/lib/gemini';
import { toast } from "react-hot-toast";

export default function ImageGeneratorPage() {
    const [prompt, setPrompt] = useState('');
    const [aspectRatio, setAspectRatio] = useState<GenerateImageOptions['aspectRatio']>('16:9');
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedImages, setGeneratedImages] = useState<string[]>([]);

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) {
            toast.error('Please enter a prompt');
            return;
        }

        setIsGenerating(true);
        setGeneratedImages([]);

        try {
            const images = await generateImage({
                prompt: prompt.trim(),
                aspectRatio,
                numberOfImages: 1, // Gemini API via genai currently mostly supports 1, but we can extend this later.
            });
            setGeneratedImages(images);
            toast.success('Image generated successfully!');
        } catch (error: any) {
            console.error(error);
            toast.error(error.message || 'Failed to generate image. Please check your API key and try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <Layout noPaddingTop>
            <PageMeta
                title="AI Image Generator | Mind Your Business Media"
                description="Generate stunning, high-quality images using Google's state-of-the-art Imagen 3 model via the Gemini API."
                canonicalPath="/image-generator"
            />

            <PageHero
                label="Internal Tool"
                title="AI Image Generator"
                description="Powered by Google's Imagen 3 and the Gemini Ecosystem."
            />

            <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419] min-h-screen pb-24">
                <section className="py-24" style={{ backgroundColor: "#141419" }}>
                    <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-12 gap-12">

                        {/* Input Form Area */}
                        <div className="lg:col-span-5 p-8 rounded-3xl shadow-xl glass-panel inner-glow card-3d relative overflow-hidden bg-[#1A1A22]/50" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                            <div className="gradient-border-top" />
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                                <Sparkles className="text-[#af3e4d]" /> Creative Brief
                            </h2>

                            <form onSubmit={handleGenerate} className="space-y-6 relative z-10">
                                <div>
                                    <label htmlFor="prompt" className="block text-sm font-medium text-gray-400 mb-2">
                                        Describe your image
                                    </label>
                                    <textarea
                                        id="prompt"
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        placeholder="E.g., A cinematic shot of a mob boss looking over the city skyline at night..."
                                        rows={5}
                                        className="w-full bg-[#141419] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#af3e4d] focus:ring-1 focus:ring-[#af3e4d] resize-none transition-all placeholder:text-white/20"
                                    />
                                    <p className="text-xs text-gray-500 mt-2">
                                        Be descriptive. Include details like lighting, style, and mood.
                                    </p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">
                                        Aspect Ratio
                                    </label>
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                        {(['1:1', '4:3', '16:9', '9:16'] as const).map((ratio) => (
                                            <button
                                                key={ratio}
                                                type="button"
                                                onClick={() => setAspectRatio(ratio)}
                                                className={`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${aspectRatio === ratio
                                                    ? 'bg-[#af3e4d]/20 border-[#af3e4d] text-[#af3e4d]'
                                                    : 'bg-[#141419] border-white/10 text-gray-400 hover:border-white/20'
                                                    }`}
                                            >
                                                {ratio}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button
                                        type="submit"
                                        disabled={isGenerating || !prompt.trim()}
                                        className="w-full flex items-center justify-center gap-2 py-6 text-lg"
                                        variant="default"
                                    >
                                        {isGenerating ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Generating...
                                            </>
                                        ) : (
                                            <>
                                                Generate Image <ArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </div>

                        {/* Output Display Area */}
                        <div className="lg:col-span-7 relative z-10">
                            <div className="rounded-3xl h-full min-h-[500px] flex items-center justify-center p-6 shadow-xl glass-panel inner-glow card-3d relative overflow-hidden bg-[#1A1A22]/50" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                <div className="gradient-border-top" />
                                {isGenerating ? (
                                    <div className="text-center">
                                        <div className="w-16 h-16 border-4 border-white/10 border-t-[#af3e4d] rounded-full animate-spin mx-auto mb-4" />
                                        <p className="text-gray-400 font-medium">Summoning pixels from the ether...</p>
                                    </div>
                                ) : generatedImages.length > 0 ? (
                                    <div className="w-full h-full flex flex-col items-center gap-4">
                                        {generatedImages.map((imgSrc, idx) => (
                                            <div key={idx} className="relative group w-full h-full flex items-center justify-center">
                                                <img
                                                    src={imgSrc}
                                                    alt={`Generated iteration ${idx + 1}`}
                                                    className="rounded-2xl max-h-[600px] object-contain shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl backdrop-blur-sm">
                                                    <a
                                                        href={imgSrc}
                                                        download={`myb-generated-${Date.now()}.jpg`}
                                                        className="bg-[#af3e4d] hover:bg-[#90303d] text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-transform transform hover:scale-105"
                                                    >
                                                        <Download size={20} />
                                                        Download High-Res
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center text-gray-500">
                                        <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                        <p>Your generated masterpiece will appear here.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </Layout>
    );
}
