/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
interface FrameworkLogosProps {
  variant?: "standard" | "tech";
}

export default function FrameworkLogos({ variant = "standard" }: FrameworkLogosProps) {
  const renderStandardLogos = () => (
    <>
      <div className="flex items-center gap-2 text-[#d11141] font-bold text-2xl tracking-tighter shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="flex gap-0.5">
          <div className="w-1 h-5 bg-[#d11141]" />
          <div className="w-1 h-5 bg-[#d11141]" />
          <div className="w-1 h-5 bg-[#d11141]" />
          <div className="w-1 h-5 bg-[#d11141]" />
        </div>
        UOB
      </div>
      <div className="flex items-center gap-2 text-[#00a859] font-medium text-lg leading-tight text-left shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="w-6 h-6 rounded-tl-lg rounded-br-lg bg-[#00a859] rotate-45" />
        standard
        <br />
        chartered
      </div>
      <div className="bg-[#244b8a] text-white px-4 py-1.5 font-serif text-lg tracking-widest shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
        BROWN
      </div>
      <div className="text-[#e2231a] font-black italic text-3xl tracking-tighter lowercase shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
        ntuc
      </div>
      <div className="text-[#00a3e0] font-sans font-bold text-2xl tracking-wider lowercase shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
        eNGie
      </div>
      <div className="text-[#e3000f] font-black text-2xl tracking-tighter shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
        TDOT
      </div>
      <div className="text-black font-black text-2xl tracking-wide shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
        SAMSUNG
      </div>
    </>
  );

  const renderTechLogos = () => (
    <>
      <div className="flex items-center gap-2 text-[#d11141] font-bold text-2xl tracking-tighter shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="flex gap-0.5">
          <div className="w-1 h-5 bg-[#d11141]" />
          <div className="w-1 h-5 bg-[#d11141]" />
          <div className="w-1 h-5 bg-[#d11141]" />
          <div className="w-1 h-5 bg-[#d11141]" />
        </div>
        UOB
      </div>
      <div className="text-[#004aad] font-bold text-2xl tracking-tighter shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
        Visa
      </div>
      <div className="text-[#2b2b2b] font-bold text-2xl tracking-tighter shrink-0 cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
        Google
      </div>
      <div className="text-[#da291c] font-bold text-2xl tracking-tighter shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
        BMW
      </div>
      <div className="text-[#0076be] font-bold text-2xl tracking-tighter shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
        FedEx
      </div>
      <div className="text-[#00b140] font-bold text-2xl tracking-tighter shrink-0 cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
        AWS
      </div>
      <div className="text-[#000] font-bold text-2xl tracking-tighter shrink-0 cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        Stripe
      </div>
    </>
  );

  return (
    <div className="w-full overflow-hidden mb-24 relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-x-12 md:gap-x-16">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-x-12 md:gap-x-16 shrink-0 pr-12 md:pr-16"
          >
            {variant === "standard" ? renderStandardLogos() : renderTechLogos()}
          </div>
        ))}
      </div>
    </div>
  );
}
