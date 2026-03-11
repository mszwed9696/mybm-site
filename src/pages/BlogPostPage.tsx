import { Layout } from "@/components/layout";
import { PageHero } from "@/components/sections/PageHero";
import { PageMeta } from "@/components/seo";
import { useParams, Link } from "react-router-dom";
import { getBlogPostBySlug, blogPosts } from "@/data/blogData";
import { ArrowRight, ArrowLeft, Clock, User, Calendar, Tag } from "lucide-react";
import NotFound from "./NotFound";

/* ── simple markdown-to-html (handles ##, **, -, |tables|, ❌/✅, 🚩) ── */
function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const elements: JSX.Element[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // blank line
    if (line.trim() === "") { i++; continue; }

    // headings
    if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-xl md:text-2xl font-bold mt-12 mb-4 text-[#F4F4F5]">{formatInline(line.slice(4))}</h3>);
      i++; continue;
    }
    if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-2xl md:text-3xl font-extrabold mt-16 mb-6 text-[#F4F4F5]">{formatInline(line.slice(3))}</h2>);
      i++; continue;
    }

    // table row
    if (line.trim().startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        const raw = lines[i].trim();
        if (raw.match(/^\|[\s-|]+\|$/)) { i++; continue; } // separator
        const cells = raw.split("|").filter(Boolean).map(c => c.trim());
        rows.push(cells);
        i++;
      }
      if (rows.length > 0) {
        elements.push(
          <div key={key++} className="overflow-x-auto my-10 rounded-xl border border-white/10 bg-[#1A1A22]/50 p-4">
            <table className="w-full text-left text-sm md:text-base border-collapse">
              <thead>
                <tr>
                  {rows[0].map((c, ci) => (
                    <th key={ci} className="px-6 py-4 font-bold text-[#F4F4F5] border-b border-white/10">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.slice(1).map((row, ri) => (
                  <tr key={ri} className="hover:bg-white/5 transition-colors">
                    {row.map((c, ci) => (
                      <td key={ci} className="px-6 py-4 border-b border-white/5 text-[#9CA3AF]">{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // unordered list
    if (line.match(/^[-*✅❌🚩] /)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^[-*✅❌🚩] /)) {
        items.push(lines[i].replace(/^[-*✅❌🚩] /, ""));
        i++;
      }
      elements.push(
        <ul key={key++} className="space-y-4 my-8 pl-2">
          {items.map((item, ii) => (
            <li key={ii} className="flex items-start gap-4 text-base md:text-lg text-[#D1D5DB] leading-relaxed">
              <span className="shrink-0 mt-2.5 w-2 h-2 rounded-full bg-[#af3e4d] shadow-[0_0_10px_rgba(175,62,77,0.8)]" />
              <span>{formatInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // numbered list
    if (line.match(/^\d+\.\s/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s/)) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={key++} className="space-y-4 my-8 list-decimal list-outside ml-6">
          {items.map((item, ii) => (
            <li key={ii} className="text-base md:text-lg text-[#D1D5DB] leading-relaxed pl-2">{formatInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // paragraph
    elements.push(<p key={key++} className="text-base md:text-lg leading-relaxed my-6 text-[#9CA3AF]">{formatInline(line)}</p>);
    i++;
  }

  return elements;
}

function formatInline(text: string): React.ReactNode {
  // Bold
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1
      ? <strong key={i} className="font-bold text-[#F4F4F5]">{part}</strong>
      : <span key={i}>{part}</span>
  );
}

/* ── Article JSON-LD ── */
function ArticleSchema({ post }: { post: { title: string; excerpt: string; author: string; date: string; slug: string; coverImage?: string } }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage ? [`https://mindyourbusiness.media${post.coverImage}`] : [],
    author: { "@type": "Organization", name: post.author },
    datePublished: post.date,
    publisher: { "@type": "Organization", name: "Mind Your Business Media", url: "https://mindyourbusiness.media" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://mindyourbusiness.media/blog/${post.slug}` },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />;
}

/* ── Page Component ── */
export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  // Related posts: same category, excluding current, max 3
  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <Layout noPaddingTop>
      <PageMeta
        title={`${post.title} | Mind Your Business Media Blog`}
        description={post.metaDescription}
        canonicalPath={`/blog/${post.slug}`}
      />
      <ArticleSchema post={post} />

      {/* Hero */}
      <PageHero
        label={post.category}
        title={post.title}
        description={
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-[#9CA3AF] text-sm md:text-base">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#af3e4d]" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#af3e4d]" /> {post.readTime}</span>
            <span className="flex items-center gap-2"><User className="w-4 h-4 text-[#af3e4d]" /> {post.author}</span>
          </div>
        }
      />

      {/* Main Content Wrapper for Sweep-Over Effect */}
      <div className="relative z-10 mt-0 md:-mt-[100vh] bg-[#141419] min-h-screen pb-24">

        {/*  Gradient Spacer matching hero fade  */}
        <div className="h-[75vh]" />

        {/* Featured Cover Image pulling up over the hero */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 -mt-32 mb-16 fade-in-up">
          <div className="aspect-[21/9] md:aspect-[2.5/1] w-full rounded-2xl overflow-hidden glass-panel inner-glow multilayer-shadow">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A22] to-transparent z-10 opacity-60 mix-blend-multiply" />
            <img
              src={post.coverImage && post.coverImage.startsWith('http') ? post.coverImage : `https://source.unsplash.com/1200x600/?${encodeURIComponent(post.industryTags?.[0] || post.category)}`}
              alt={post.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200`;
              }}
              className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
            />
          </div>
        </div>

        {/* Article body */}
        <section className="py-8">
          <article className="max-w-3xl mx-auto px-6 font-medium">
            {/* Back Button */}
            <div className="mb-12">
              <Link to="/blog" className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-[#F4F4F5] transition-colors group text-sm font-semibold uppercase tracking-wider">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Insights
              </Link>
            </div>

            {renderMarkdown(post.body)}
          </article>
        </section>

        {/* Mid-article CTA / Bottom CTA */}
        <section className="py-24 mt-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="glass-panel inner-glow multilayer-shadow rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#af3e4d] to-transparent" />
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#F4F4F5] mb-6">Ready to put this into action?</h3>
              <p className="text-lg md:text-xl text-[#9CA3AF] mb-10 max-w-2xl mx-auto">
                Get a free marketing audit — results-driven strategies, no contracts, just a clear plan built for growth.
              </p>
              <Link
                to="/free-audit"
                className="btn-pill-primary inline-flex scale-110"
              >
                Request a Free Audit <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="pt-16 max-w-7xl mx-auto px-6 border-t border-white/5 mt-12">
            <h2 className="text-2xl font-bold mb-10 text-[#F4F4F5] flex items-center gap-3">
              <Tag className="w-5 h-5 text-[#af3e4d]" />
              More from the Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group block card-3d glass-panel inner-glow multilayer-shadow rounded-2xl p-6 flex flex-col h-full relative overflow-hidden bg-[#141419]/50 transition-all hover:-translate-y-1"
                >
                  <div className="gradient-border-top" />
                  <div className="relative z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#af3e4d] mb-3 block">
                      {r.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#F4F4F5] leading-snug mb-3 group-hover:text-[#af3e4d] transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-sm text-[#9CA3AF] line-clamp-2">
                      {r.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
