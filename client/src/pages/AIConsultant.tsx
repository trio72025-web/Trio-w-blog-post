import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Bot, Mic, Zap, MessageCircle } from 'lucide-react';

export default function AIConsultant() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 via-transparent to-violet-100/30 -z-10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-56 h-56 bg-violet-300/15 rounded-full blur-3xl -z-10" />

        <div className="container text-center space-y-5 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/80 text-purple-700 text-sm font-medium border border-purple-200/60 mb-2">
            <Bot size={16} />
            AI-Powered Live Consultation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Talk to Our <span className="gradient-text">AI Technology</span>
            <br />Consultant
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Get instant, expert guidance on AI automation, web solutions, and digital transformation — available 24/7, powered by our intelligent avatar technology.
          </p>
        </div>
      </section>

      {/* Feature Pills */}
      <section className="pb-10">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Mic, label: 'Voice & Text Interaction' },
              { icon: Zap, label: 'Instant AI Responses' },
              { icon: MessageCircle, label: 'Real-Time Consultation' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border-glow text-sm font-medium text-foreground/80 shadow-sm">
                <Icon size={15} className="text-purple-600" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avatar Embed */}
      <section className="py-10 md:py-16 flex-1">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden border-glow bg-white/80 backdrop-blur-sm shadow-2xl shadow-purple-200/40 animate-slide-up">
              {/* Top bar accent */}
              <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-violet-500 to-purple-400" />
              
              <div className="p-4 md:p-6">
                <div className="w-full rounded-xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    src="https://embed.liveavatar.com/v1/50135e91-c9d3-48c3-b04b-5320d7f1f94b?orientation=horizontal"
                    allow="microphone"
                    title="LiveAvatar Embed"
                    style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                  />
                </div>
              </div>

              {/* Bottom hint */}
              <div className="px-6 pb-5 text-center">
                <p className="text-xs text-foreground/50 flex items-center justify-center gap-1.5">
                  <Mic size={12} />
                  Click the microphone or type to start your consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="gradient-text">What Can Our AI Consultant Help With?</span>
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto text-sm md:text-base">
              Ask anything about our services, pricing, or how AI can work for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Service Guidance', desc: 'Discover which AI automation or web solutions best fit your specific business needs.' },
              { title: 'Pricing & Plans', desc: 'Get transparent pricing details and find a package that suits your budget.' },
              { title: 'Strategy & Roadmap', desc: 'Learn how to implement AI step-by-step to reduce overhead and boost conversions.' },
            ].map((card, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border-glow-hover bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 text-center"
              >
                <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center text-white mx-auto mb-4">
                  <Bot size={20} />
                </div>
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-purple-dark text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to Take the Next Step?</h2>
          <p className="text-white/80 max-w-xl mx-auto">
            After chatting with our AI consultant, connect with a human expert for a deeper dive.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg bg-white text-purple-600 font-semibold hover:glow-purple transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Human Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
