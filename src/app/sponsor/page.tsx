import { MenuBar } from "@/components/MenuBar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function SponsorPage() {
  return (
    <>
      <MenuBar />
      <main className="min-h-screen bg-[#001002] pt-32 pb-24 px-4 sm:px-8 relative overflow-hidden">
        {/* Background glow elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(62,192,94,0.4)]">
              Sponsorship Package
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto font-medium">
              Join us in empowering the next generation of STEM talent at the WOSS Triple Olympiad.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:wosstriolympiad@gmail.com?subject=Triple%20Olympiad%20Sponsorship"
                className="btn-gradient text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 glow-green group transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(62,192,94,0.3)]"
              >
                Become a Sponsor
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <section className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[32px] backdrop-blur-md shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About the Event</h2>
              <p className="text-white/80 leading-relaxed mb-8 text-lg">
                The Triple Olympiad brings together Halton's brightest students to collaborate, solve problems, and compete in Mathematics, Science, and Computer Programming. With over a hundred interested participants spanning grades 9 to 12, it showcases the strongest and most diverse STEM talent at the largest high school in Oakville.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-emerald-400 mb-1">100+</div>
                  <div className="text-sm text-white/60">Participants</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-emerald-400 mb-1">9–12</div>
                  <div className="text-sm text-white/60">Grades</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-emerald-400 mb-1">3</div>
                  <div className="text-sm text-white/60">Disciplines</div>
                </div>
              </div>
            </section>

            <section className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[32px] backdrop-blur-md shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Us?</h2>
              <p className="text-white/80 leading-relaxed mb-8 text-lg">
                For our sponsors, it is a unique chance to showcase your brand directly to motivated, STEM-focused students, their families, and our alumni community. It allows you to position your organization as a supporter of education, innovation, and the next generation of technical talent.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-white/80 text-lg">Support local students and future innovators</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-white/80 text-lg">Demonstrate commitment to youth and education</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-white/80 text-lg">Connect with dedicated math, science and CS students at the largest high school in Oakville</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16 tracking-tight">Sponsorship Tiers</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Vector */}
              <div className="group relative bg-[#091a07]/70 border border-[#ffc93c]/30 p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,201,60,0.15)] flex flex-col h-full">
                <div className="absolute inset-x-0 -top-24 h-40 bg-[#ffc93c]/20 blur-3xl rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
                <h3 className="text-3xl font-extrabold tracking-tight mb-2 text-[#ffc93c] drop-shadow-[0_0_15px_rgba(255,201,60,0.4)]">Vector</h3>
                <div className="text-4xl font-bold text-white mb-6">$100</div>
                <p className="text-white/70 mb-8 flex-grow text-[15px]">Get your name in front of the room.</p>
                <ul className="space-y-3 mb-8 text-sm text-white/80 flex-grow">
                  <li className="flex items-start gap-2"><span className="text-[#ffc93c]">✦</span> Logo on Event Website (XS)</li>
                  <li className="flex items-start gap-2"><span className="text-[#ffc93c]">✦</span> Logo on Main Stage Slides</li>
                  <li className="flex items-start gap-2"><span className="text-[#ffc93c]">✦</span> Logo on Participant Stickers</li>
                  <li className="flex items-start gap-2"><span className="text-[#ffc93c]">✦</span> Sponsored Discord Announcements</li>
                </ul>
                <a href="mailto:wosstriolympiad@gmail.com?subject=Vector%20Sponsorship" className="inline-flex items-center text-[#ffc93c] font-semibold hover:text-white transition-colors">
                  Sponsor at Vector <span className="ml-2">→</span>
                </a>
              </div>

              {/* Matrix */}
              <div className="group relative bg-[#091a07]/70 border border-[#2fe8c0]/30 p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(47,232,192,0.15)] flex flex-col h-full">
                <div className="absolute inset-x-0 -top-24 h-40 bg-[#2fe8c0]/20 blur-3xl rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
                <h3 className="text-3xl font-extrabold tracking-tight mb-2 text-[#2fe8c0] drop-shadow-[0_0_15px_rgba(47,232,192,0.4)]">Matrix</h3>
                <div className="text-4xl font-bold text-white mb-6">$250</div>
                <p className="text-white/70 mb-8 flex-grow text-[15px]">Stage time, socials, and a line to every participant.</p>
                <ul className="space-y-3 mb-8 text-sm text-white/80 flex-grow">
                  <li className="flex items-start gap-2"><span className="text-[#2fe8c0]">✦</span> Logo on Event Website (S)</li>
                  <li className="flex items-start gap-2"><span className="text-[#2fe8c0]">✦</span> Shoutouts on Social Media</li>
                  <li className="flex items-start gap-2"><span className="text-[#2fe8c0]">✦</span> Shoutout at opening/closing ceremony</li>
                  <li className="flex items-start gap-2"><span className="text-[#2fe8c0]">✦</span> Dedicated Email to all Participants</li>
                  <li className="flex items-start gap-2 text-white/50 text-xs italic">Plus all previous benefits</li>
                </ul>
                <a href="mailto:wosstriolympiad@gmail.com?subject=Matrix%20Sponsorship" className="inline-flex items-center text-[#2fe8c0] font-semibold hover:text-white transition-colors mt-auto">
                  Sponsor at Matrix <span className="ml-2">→</span>
                </a>
              </div>

              {/* Tensor */}
              <div className="group relative bg-[#091a07]/70 border border-[#f331f9]/30 p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(243,49,249,0.15)] flex flex-col h-full">
                <div className="absolute inset-x-0 -top-24 h-40 bg-[#f331f9]/20 blur-3xl rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
                <h3 className="text-3xl font-extrabold tracking-tight mb-2 text-[#f331f9] drop-shadow-[0_0_15px_rgba(243,49,249,0.4)]">Tensor</h3>
                <div className="text-4xl font-bold text-white mb-6">$500</div>
                <p className="text-white/70 mb-8 flex-grow text-[15px]">Speak at closing, hand out swag, own a prize.</p>
                <ul className="space-y-3 mb-8 text-sm text-white/80 flex-grow">
                  <li className="flex items-start gap-2"><span className="text-[#f331f9]">✦</span> Logo on Event Website (M)</li>
                  <li className="flex items-start gap-2"><span className="text-[#f331f9]">✦</span> Distribute company swag</li>
                  <li className="flex items-start gap-2"><span className="text-[#f331f9]">✦</span> Speaking Slot at Closing Ceremony</li>
                  <li className="flex items-start gap-2 text-white/50 text-xs italic">Plus all previous benefits</li>
                </ul>
                <a href="mailto:wosstriolympiad@gmail.com?subject=Tensor%20Sponsorship" className="inline-flex items-center text-[#f331f9] font-semibold hover:text-white transition-colors mt-auto">
                  Sponsor at Tensor <span className="ml-2">→</span>
                </a>
              </div>

              {/* Singularity */}
              <div className="group relative bg-[#091a07]/70 border border-[#0fb1fc]/30 p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(15,177,252,0.15)] flex flex-col h-full">
                <div className="absolute inset-x-0 -top-24 h-40 bg-[#0fb1fc]/20 blur-3xl rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
                <h3 className="text-3xl font-extrabold tracking-tight mb-2 text-[#0fb1fc] drop-shadow-[0_0_15px_rgba(15,177,252,0.4)]">Singularity</h3>
                <div className="text-4xl font-bold text-white mb-6">$1,500</div>
                <p className="text-white/70 mb-8 flex-grow text-[15px]">Everything we have: booth, judging seat, trophy.</p>
                <ul className="space-y-3 mb-8 text-sm text-white/80 flex-grow">
                  <li className="flex items-start gap-2"><span className="text-[#0fb1fc]">✦</span> Logo on Event Website (XL)</li>
                  <li className="flex items-start gap-2"><span className="text-[#0fb1fc]">✦</span> Dedicated Sponsor Booth</li>
                  <li className="flex items-start gap-2"><span className="text-[#0fb1fc]">✦</span> Seat on Judging Panel</li>
                  <li className="flex items-start gap-2"><span className="text-[#0fb1fc]">✦</span> Logo on Winner Trophy</li>
                  <li className="flex items-start gap-2"><span className="text-[#0fb1fc]">✦</span> Dedicated Social Media Post</li>
                  <li className="flex items-start gap-2 text-white/50 text-xs italic">Plus all previous benefits</li>
                </ul>
                <a href="mailto:wosstriolympiad@gmail.com?subject=Singularity%20Sponsorship" className="inline-flex items-center text-[#0fb1fc] font-semibold hover:text-white transition-colors mt-auto">
                  Sponsor at Singularity <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
