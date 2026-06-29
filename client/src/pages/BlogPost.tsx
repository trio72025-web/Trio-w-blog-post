import { Link, useParams } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';

// ============================================================
// ADD FULL POST CONTENT HERE — copy one post object and fill it in.
// The `id` must match the slug used in Blog.tsx.
// Write content as an array of paragraph strings, or use HTML via dangerouslySetInnerHTML.
// ============================================================
const allPosts: Record<string, {
  title: string;
  date: string;
  readTime: string;
  category: string;
  intro: string;
  sections: { heading: string; body: string }[];
}> = {
  'what-is-an-ai-avatar': {
    title: 'What Is an AI Avatar and Why Does Your Business Need One?',
    date: 'June 30, 2026',
    readTime: '5 min read',
    category: 'AI Avatars',
    intro:
      'AI avatars are interactive, human-like digital agents that live on your website and can talk to your visitors in real time — 24 hours a day, 7 days a week. They combine conversational AI, natural language processing, and (in advanced versions) lifelike video to create an experience that feels like talking to a real person.',
    sections: [
      {
        heading: 'How do AI avatars work?',
        body: 'An AI avatar is powered by a large language model (LLM) trained on your business data — your FAQs, services, pricing, and tone of voice. When a visitor lands on your site and types or speaks a question, the avatar responds instantly with accurate, on-brand answers. It can also collect lead information, qualify prospects, and even book appointments directly into your calendar.',
      },
      {
        heading: 'Why does your business need one?',
        body: 'Most businesses lose potential clients simply because no one was available to answer a question at the right moment. An AI avatar fills that gap. It greets every visitor, handles common questions without human intervention, and escalates complex inquiries to your team — so your staff focuses on high-value tasks while the avatar handles the volume.',
      },
      {
        heading: 'What makes Triohub\'s AI Avatars different?',
        body: 'At Triohub, we build custom AI avatars trained specifically on your business, not generic chatbot templates. We integrate them with your CRM and booking tools so every conversation turns into a trackable lead. And because we handle the full setup and ongoing management, you get all the benefits without the technical headache.',
      },
      {
        heading: 'Ready to get started?',
        body: 'Whether you\'re a small business wanting to look more professional, or a growing company trying to handle more inquiries without hiring, an AI avatar is one of the highest-ROI investments you can make today. Reach out to the Triohub team and we\'ll show you exactly what it would look like on your site.',
      },
    ],
  },
  // ↓ PASTE NEW POST OBJECTS BELOW THIS LINE
};
// ============================================================

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const post = allPosts[params.slug ?? ''];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <div className="flex-1 flex items-center justify-center text-center py-32">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Post not found</h1>
            <p className="text-muted-foreground">This post doesn't exist or may have been moved.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-transparent to-violet-100/30 -z-10" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl -z-10" />

        <div className="container max-w-3xl animate-slide-up">
          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          {/* Category */}
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
              <Tag size={11} /> {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <article className="py-8 pb-20">
        <div className="container max-w-3xl">
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-purple-200 via-violet-200 to-transparent mb-10" />

          {/* Intro */}
          <p className="text-lg text-foreground/80 leading-relaxed mb-10">
            {post.intro}
          </p>

          {/* Sections */}
          <div className="space-y-10">
            {post.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold mb-3 text-foreground">
                  {section.heading}
                </h2>
                <p className="text-foreground/75 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-100 text-center space-y-4">
            <h3 className="text-xl font-semibold">Want to learn more?</h3>
            <p className="text-muted-foreground text-sm">
              Talk to our AI Technology Consultant or get in touch with the Triohub team.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link
                href="/ai-consultant"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-purple-400 text-purple-700 font-medium text-sm hover:bg-purple-50 transition-colors"
              >
                Talk to our AI Consultant
              </Link>
              <Link
                href="/contact"
                className="inline-block px-5 py-2.5 rounded-lg gradient-purple text-white font-medium text-sm hover:glow-purple transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
