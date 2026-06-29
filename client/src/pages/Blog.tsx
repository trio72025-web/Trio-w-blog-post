import { Link } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

// ============================================================
// ADD NEW POSTS HERE — copy one blog post object and fill it in
// ============================================================
const blogPosts = [
  {
    id: 'what-is-an-ai-avatar',
    title: 'What Is an AI Avatar and Why Does Your Business Need One?',
    excerpt:
      'AI avatars are no longer science fiction. Discover how interactive AI avatars can greet website visitors, answer questions, and book meetings — 24/7, without a human agent.',
    date: 'June 30, 2026',
    readTime: '5 min read',
    category: 'AI Avatars',
    slug: '/blog/what-is-an-ai-avatar',
  },
  // ↓ PASTE NEW POST OBJECTS BELOW THIS LINE
];
// ============================================================

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-transparent to-violet-100/30 -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-violet-300/20 rounded-full blur-3xl -z-10" />

        <div className="container text-center space-y-6 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
            <Tag size={14} />
            Triohub Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tips, guides, and insights on AI, automation, cybersecurity, and modern tech — written by the Triohub team.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container">
          {blogPosts.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No posts yet — check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={post.slug} className="group block">
                  <article className="h-full bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100/50 transition-all duration-300 group-hover:-translate-y-1">
                    {/* Category Badge */}
                    <span className="inline-flex self-start items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all duration-200">
                        Read <ArrowRight size={12} />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
