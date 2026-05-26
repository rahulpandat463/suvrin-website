/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function ImpactSection() {
  return (
    <section className="bg-white pt-16 pb-20" id="impact">
      <div className="max-w-[1440px] w-full mx-auto border-x border-[#e5e5e5] border-dashed px-6">
        <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] text-text-primary tracking-tight font-serif mb-16">
          Our Impact — By the Numbers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4 md:gap-6 w-full">
          {/* ROW 1 — 2 stat cards + 3 images */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 bg-[#f8f8f8] rounded-[24px] p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[140px] aspect-auto md:aspect-[2/1] hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-[2.5rem] lg:text-[3.5rem] font-serif tracking-tight leading-none text-black">
              $10M+
            </h3>
            <p className="text-[#444] font-medium text-[0.9rem] lg:text-[0.95rem] mt-4 md:mt-0">
              Business Value Created for clients
            </p>
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 bg-[#f8f8f8] rounded-[24px] p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[140px] aspect-auto md:aspect-[2/1] hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-[2.5rem] lg:text-[3.5rem] font-serif tracking-tight leading-none text-black">
              3x
            </h3>
            <p className="text-[#444] font-medium text-[0.9rem] lg:text-[0.95rem] mt-4 md:mt-0">
              Faster Time-to-Market vs. in-house AI teams
            </p>
          </div>
          <Link href="/services/support-services" className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-300 hidden sm:block relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" alt="Architecture" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-[#0F52BA]/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10" />
            <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
              <span className="text-white font-serif text-2xl md:text-3xl font-medium tracking-tight text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-300 delay-0">
                Support Service
              </span>
            </div>
          </Link>
          <Link href="/services/app-development" className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-300 hidden md:block relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" alt="Tech Lab" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-green-600/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10" />
            <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
              <span className="text-white font-serif text-2xl md:text-3xl font-medium tracking-tight text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-300 delay-0">
                App Development
              </span>
            </div>
          </Link>
          <Link href="/services/digital-transformation" className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-300 hidden md:block relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80" alt="Cyber" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10" />
            <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
              <span className="text-black font-serif text-2xl md:text-3xl font-medium tracking-tight text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-300 delay-0">
                Digital Transformation
              </span>
            </div>
          </Link>

          {/* ROW 2 — 2 stat cards + 3 images */}
          <div className="col-span-1 sm:col-span-1 md:col-span-2 bg-[#f8f8f8] rounded-[24px] p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[140px] aspect-auto md:aspect-[2/1] hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-[2.5rem] lg:text-[3.5rem] font-serif tracking-tight leading-none text-black">
              50+
            </h3>
            <p className="text-[#444] font-medium text-[0.9rem] lg:text-[0.95rem] mt-4 md:mt-0">
              Companies Supported across 3 continents
            </p>
          </div>
          <div className="col-span-1 sm:col-span-1 md:col-span-2 bg-[#f8f8f8] rounded-[24px] p-6 sm:p-7 md:p-8 flex flex-col justify-between min-h-[140px] aspect-auto md:aspect-[2/1] hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-[2.5rem] lg:text-[3.5rem] font-serif tracking-tight leading-none text-black">
              30+
            </h3>
            <p className="text-[#444] font-medium text-[0.9rem] lg:text-[0.95rem] mt-4 md:mt-0">
              Years of Collective AI & Technology Expertise
            </p>
          </div>
          <Link href="/services/enterprise-applications" className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-300 hidden sm:block relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80" alt="Blueprint" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-[#0F52BA]/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10" />
            <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
              <span className="text-white font-serif text-2xl md:text-3xl font-medium tracking-tight text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-300 delay-0">
                Enterprise Applications
              </span>
            </div>
          </Link>
          <Link href="/services/software-engineering" className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-300 hidden md:block relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" alt="Abstract" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-green-600/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10" />
            <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
              <span className="text-white font-serif text-2xl md:text-3xl font-medium tracking-tight text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-300 delay-0">
                Software Engineering
              </span>
            </div>
          </Link>
          <Link href="/services/startup" className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-300 hidden md:block relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80" alt="Screens" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10" />
            <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
              <span className="text-black font-serif text-2xl md:text-3xl font-medium tracking-tight text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-300 delay-0">
                Startup Services
              </span>
            </div>
          </Link>

          {/* ROW 3 — 7 images filling the full width - hidden on mobile/tablet */}
          {[
            { src: "https://images.unsplash.com/photo-1531366936337-7785443115cf?auto=format&fit=crop&w=600&q=80", link: "/tech-stack/front-end", title: "Front-End", color: "bg-[#0F52BA]/90", text: "text-white" },
            { src: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=600&q=80", link: "/tech-stack/back-end", title: "Back-End", color: "bg-green-600/90", text: "text-white" },
            { src: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=600&q=80", link: "/tech-stack/mobile", title: "Mobile", color: "bg-white/90", text: "text-black" },
            { src: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=600&q=80", link: "/services/business", title: "Business", color: "bg-[#0F52BA]/90", text: "text-white" },
            { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80", link: "/services/enterprise", title: "Enterprise", color: "bg-green-600/90", text: "text-white" },
            { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80", link: "/tech-stack/front-end", title: "Web Apps", color: "bg-white/90", text: "text-black" },
            { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80", link: "/tech-stack/back-end", title: "API Services", color: "bg-[#0F52BA]/90", text: "text-white" }
          ].map((item, idx) => (
            <Link key={idx} href={item.link} className="col-span-1 rounded-[24px] overflow-hidden aspect-square shadow-sm hover:shadow-xl transition-all duration-300 hidden md:block relative group cursor-pointer">
              <img
                src={item.src}
                alt={`Decorative tech aspect ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 ${item.color} translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10`} />
              <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
                <span className={`${item.text} font-serif text-xl md:text-2xl font-medium tracking-tight text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:delay-300 delay-0`}>
                  {item.title}
                </span>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}
