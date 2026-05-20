/* eslint-disable @next/next/no-img-element */
interface FrameworkLogosProps {
  variant?: "standard" | "tech";
}

const logos = [
  { src: "/DLF_logo.png", alt: "DLF", scale: 1.75 },
  { src: "/Apollo Dialysis.png", alt: "Apollo Dialysis", scale: 1.25 },
  { src: "/UDrive.png", alt: "UDrive", scale: 0.85 },
  { src: "/kpmg logo.jpg", alt: "KPMG", scale: 1.55 },
  { src: "/hitachi.png", alt: "Hitachi", scale: 1.6 },
  { src: "/Hazet logo.png", alt: "Hazet", scale: 0.7 },
  { src: "/Ficci Logo.png", alt: "FICCI", scale: 1.05 },
  { src: "/EY logo.png", alt: "EY", scale: 0.85 },
  { src: "/Douglas Eliman.png", alt: "Douglas Eliman", scale: 0.8 },
  { src: "/DeloitteNewLogo.png", alt: "Deloitte", scale: 1.15 },
  { src: "/Conic Automotive.webp", alt: "Conic Automotive", scale: 0.75 },
  { src: "/Charu Parashar Logo.png", alt: "Charu Parashar", scale: 0.8 },
  { src: "/Honda-Logo.png", alt: "Honda", scale: 1.8 },
  { src: "/EZMA_logo.jpeg", alt: "EZMA", scale: 1.3 },
  { src: "/Suzuki_logo.png", alt: "Suzuki", scale: 1.0 }
];

export default function FrameworkLogos({ variant = "standard" }: FrameworkLogosProps) {
  const displayLogos = variant === "tech" ? logos : logos;

  return (
    <div className="w-full overflow-hidden mb-24 relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-0">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex items-center shrink-0 gap-0"
          >
            {displayLogos.map((logo, index) => (
              <div
                key={index}
                className="px-10 h-16 flex items-center justify-center shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ transform: `scale(${logo.scale})` }}
                  className={`h-9 w-auto object-contain shrink-0 cursor-pointer transition-all duration-300 opacity-60 mix-blend-multiply grayscale hover:grayscale-0 ${logo.alt === "FICCI" ? "contrast-200 brightness-125" : ""
                    }`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}