import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#053aa3] pt-24 pb-8" id="site-footer">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Top Header */}
        <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-serif text-white tracking-tight leading-[1.1] mb-20 max-w-[600px]">
          Where ideas become <br /> AI products
        </h2>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-16 border-t border-white/20 pt-16 pb-20">
          
          {/* Left Column (Newsletter & Badges) */}
          <div className="flex flex-col pr-8 lg:border-r border-white/20 min-h-[300px]">
            <h3 className="text-white text-[1.15rem] font-medium mb-6">
              Don't miss out on Suvrin updates.
            </h3>
            
            <form className="flex w-full mb-4 max-w-[340px]">
              <input 
                type="email" 
                placeholder="john@mail.com" 
                className="bg-[#1c50c0] text-white placeholder-blue-200/70 px-4 py-3.5 flex-1 rounded-l text-[0.95rem] border-none focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-white text-[#053aa3] px-5 py-3.5 rounded-r flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Subscribe"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </form>
            
            <p className="text-white/60 text-[0.85rem] leading-[1.6] mb-12 max-w-[340px]">
              By completing this form you are signing up to receive our emails and can unsubscribe at any time.
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-auto">
               {/* Badges */}
               <div className="h-14 w-20 flex items-center justify-center bg-white/10 rounded overflow-hidden p-2 border border-white/10">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Clutch_logo.png/798px-Clutch_logo.png" alt="Clutch" className="max-h-full invert brightness-0 opacity-80" />
               </div>
               <div className="h-14 w-14 rounded-full border border-white/30 flex items-center justify-center text-white/70 text-[10px] text-center leading-tight">ISO<br/>27001</div>
               <div className="h-[52px] px-3 border border-white/30 rounded flex items-center gap-2">
                 <span className="text-white/80 font-serif font-bold text-[1.1rem]">BBB</span>
                 <div className="h-full py-2"><div className="h-full w-px bg-white/30"></div></div>
                 <span className="text-white/80 text-[0.55rem] font-sans font-semibold tracking-wider leading-[1.1]">ACCREDITED<br/>BUSINESS</span>
               </div>
            </div>
          </div>

          {/* Right Column (Links Grid) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            
            {/* Column 1 */}
            <div className="flex flex-col">
              <h4 className="text-white text-[1.15rem] font-serif mb-6 tracking-wide">Company</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Team</Link></li>
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Careers</Link></li>
              </ul>
              
              <h4 className="text-white text-[1.15rem] font-serif mt-12 mb-6 tracking-wide">General</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 2 - Case Studies */}
            <div className="flex flex-col">
              <h4 className="text-white text-[1.15rem] font-serif mb-6 tracking-wide">Case Studies</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Strategy & Advisory</Link></li>
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">AI Products & Platforms</Link></li>
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Commercialization & Growth</Link></li>
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Agents</Link></li>
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Knowledge Systems</Link></li>
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Automation & Integration</Link></li>
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">AI Infrastructure</Link></li>
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Governance & Risk</Link></li>
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">LLM Fine-Tuning</Link></li>
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Web-Scraping</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col">
              <h4 className="text-white text-[1.15rem] font-serif mb-6 tracking-wide">Services</h4>
              <ul className="flex flex-col gap-4 mb-12">
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Startup</Link></li>
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Business</Link></li>
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Enterprise</Link></li>
              </ul>
              
              <h4 className="text-white text-[1.15rem] font-serif mb-6 tracking-wide">Resources</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-white/80 text-[0.95rem] hover:text-white transition-colors">Case Studies</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Top Row Logo & Icons */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center border-t border-white/20 pt-10 pb-16 gap-8">
           
           {/* Logo block */}
           <div className="flex items-center gap-6">
             {/* Square Block Logo */}
             <div className="w-[60px] h-[60px] bg-[#ffffff] rounded-sm flex flex-col items-center justify-center text-[#053aa3] font-black text-[1.3rem] leading-[1] tracking-wide shadow-sm py-2">
               <span>S U</span>
               <span>V R</span>
             </div>
             {/* Brand text */}
             <div className="text-[2rem] font-sans font-medium text-white tracking-tight">
               Suvrin Labs
             </div>
           </div>

           {/* Policy Links */}
           <div className="flex items-center gap-8 text-[0.95rem] text-white/80 font-medium">
              <Link href="#" className="hover:text-white transition-colors">Privacy policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of service</Link>
           </div>

           {/* Social Icons */}
           <div className="flex items-center gap-3">
              <Link href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/90 hover:bg-white hover:text-[#053aa3] transition-colors"><span className="font-bold text-[0.9rem]">in</span></Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/90 hover:bg-white hover:text-[#053aa3] transition-colors"><span className="text-[1.1rem]">𝕏</span></Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/90 hover:bg-white hover:text-[#053aa3] transition-colors"><span className="font-bold text-[1.1rem]">C</span></Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/90 hover:bg-white hover:text-[#053aa3] transition-colors"><span className="font-bold text-[0.8rem]">up</span></Link>
           </div>
        </div>

        {/* Absolute Bottom Copyright */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-white/70 text-[0.85rem] font-medium pb-2">
           <p>415 Mission St, San Francisco,<br className="md:hidden" /> CA 94105, United States</p>
           <p className="mt-4 md:mt-0">© 2026 Suvrin Technologies. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
