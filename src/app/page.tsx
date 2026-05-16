'use client';
import { useState } from 'react';

const FEATURES = ["Get instant AI\u2011driven positional and technical feedback from match or training video captured on any smartphone", "Receive adaptive, age\u2011appropriate drill recommendations that evolve with each player\u2019s performance trends", "Eliminate hardware costs\u2014no wearables or specialized cameras needed, just a phone and the app"];
const PRICING = [{"name": "Starter", "price": "Free", "features": ["Basic video upload and analysis", "Community access and shared drills", "Limited skill challenges and badges"]}, {"name": "Pro", "price": "$19/mo", "features": ["Advanced AI analytics (tactical positioning, decision\u2011making)", "Adaptive drill engine with personalized progression", "Full gamification suite (badges, leaderboards, rewards)", "Priority support and exportable progress reports"], "highlighted": true}, {"name": "Enterprise", "price": "Custom", "features": ["Team and club management dashboards", "API access for custom integrations", "White\u2011label branding and dedicated account manager", "Unlimited video storage and advanced ROI reporting"]}];
const PAIN_POINTS = ["Generic, one\u2011size\u2011fits\u2011all training plans that do not address specific player weaknesses", "Need for expensive hardware (wearables, cameras) to get AI\u2011driven insights", "Delay between training session and feedback, limiting timely skill correction"];

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen" style={{background: '#0a0a0f'}} >

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg" style={{background: 'linear-gradient(135deg, #2563EB, #10B981)'}}></div>
            <span className="text-xl font-bold">Skill Sphere</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
          </div>
          <button
            className="px-5 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105"
            style={{background: 'linear-gradient(135deg, #2563EB, #F97316)'}}
          >
            Get Early Access
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{background: `radial-gradient(ellipse 80% 50% at 50% -20%, #2563EB40, transparent)`}}
        />
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8 text-white/70">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{background: '#10B981'}}></span>
            Now in Early Access — Join 2,000+ teams
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="gradient-text">Skill Sphere</span>
            <br />
            <span className="text-white/90">AI coaching that fits in your pocket</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Skill Sphere turns any smartphone video into instant, personalized soccer feedback—positional, technical, and tactical—so youth players improve faster without expensive wearables. Coaches receive adaptive drill recommendations and can share session plans, track progress, and earn badges within a supportive community. The platform scales from parent‑coaches to academy directors, delivering affordable, AI‑powered development for every level of the game.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your work email"
              className="flex-1 px-5 py-3 rounded-xl glass text-white placeholder:text-white/30 outline-none focus:border-[#2563EB] border border-white/10"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 whitespace-nowrap"
              style={{background: 'linear-gradient(135deg, #2563EB, #F97316)'}}
            >
              {submitted ? "🎉 You're in!" : 'Start Free'}
            </button>
          </form>

          <p className="text-sm text-white/30 mt-4">No credit card required · Cancel anytime</p>

          {/* Floating orbs */}
          <div className="absolute -left-20 top-20 w-72 h-72 rounded-full opacity-10 float" style={{background: `radial-gradient(circle, #2563EB, transparent)`}}></div>
          <div className="absolute -right-20 bottom-0 w-96 h-96 rounded-full opacity-10 float" style={{background: `radial-gradient(circle, #10B981, transparent)`, animationDelay: '3s'}}></div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-10">
              Sound familiar? <span className="gradient-text">We fix this.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {PAIN_POINTS.map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-2xl mt-1">😤</span>
                  <p className="text-white/70">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Everything you need, <span className="gradient-text">nothing you don't</span>
            </h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto">Built for teams that move fast and demand results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((feat, i) => (
              <div key={i} className="glass rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{background: '#2563EB20'}}>
                  <span className="text-2xl">{['🚀','⚡','🎯','💡','🔥','✨'][i % 6]}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feat}</h3>
                <p className="text-white/50 text-sm leading-relaxed">Powered by advanced AI to transform how you work.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6" style={{background: 'rgba(255,255,255,0.01)'}}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">
            Loved by <span className="gradient-text">forward-thinking teams</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {name: 'Sarah K.', role: 'CTO at Nexus', quote: 'This transformed our entire workflow. ROI was visible within the first week.'},
              {name: 'Marcus T.', role: 'Founder, FlowCo', quote: 'Finally, an AI tool that actually delivers. Our team is 3x more productive.'},
              {name: 'Priya M.', role: 'Head of Ops, Vertex', quote: 'The automation alone saved us 20 hours per week. Absolutely game-changing.'},
            ]].map((t, i) => (
              <div key={i} className="glass rounded-2xl p-6">
                <p className="text-white/70 mb-6 leading-relaxed italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold" style={{background: 'linear-gradient(135deg, #2563EB, #F97316)'}}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Simple, <span className="gradient-text">transparent pricing</span>
            </h2>
            <p className="text-white/50 text-lg">Start free. Scale as you grow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING.map((tier, i) => (
              <div key={i} className={'glass rounded-2xl p-8 transition-all duration-300 relative ' + (tier.highlighted ? 'glow' : 'hover:border-white/20')}>
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold" style={{background: '#2563EB'}}>
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                  <div className="text-3xl font-black gradient-text">{tier.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features?.map((f: string, j: number) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-white/70">
                      <span style={{color: '#2563EB'}}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 rounded-xl font-semibold transition-all hover:scale-105"
                  style={{background: tier.highlighted ? 'linear-gradient(135deg, #2563EB, #F97316)' : 'rgba(255,255,255,0.08)'}}
                >
                  {tier.price === 'Free' ? 'Start Free' : tier.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 md:p-16" style={{background: `linear-gradient(135deg, #2563EB15, #10B98110)`}}>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Ready to <span className="gradient-text">transform</span> your workflow?
            </h2>
            <p className="text-white/60 text-xl mb-10">Join thousands of teams already using Skill Sphere.</p>
            <button
              className="px-10 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 glow"
              style={{background: 'linear-gradient(135deg, #2563EB, #F97316)'}}
              onClick={() => window.scrollTo(0,0)}
            >
              Get Started for Free →
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded" style={{background: 'linear-gradient(135deg, #2563EB, #10B981)'}}></div>
            <span className="font-bold">Skill Sphere</span>
          </div>
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Skill Sphere. Built with AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
