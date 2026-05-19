/* eslint-disable @next/next/no-img-element */
interface FrameworkLogosProps {
  variant?: "standard" | "tech";
}

const logos = [
  { src: "/DLF_logo.png", alt: "DLF" },
  { src: "/Apollo Dialysis.png", alt: "Apollo Dialysis" },
  { src: "/UDrive.png", alt: "UDrive" },
  { src: "/kpmg logo.jpg", alt: "KPMG" },
  { src: "/hitachi.png", alt: "Hitachi" },
  { src: "/Hazet logo.png", alt: "Hazet" },
  { src: "/Ficci Logo.png", alt: "FICCI" },
  { src: "/Ezma.png", alt: "EZMA" },
  { src: "/EY logo.png", alt: "EY" },
  { src: "/Douglas Eliman.png", alt: "Douglas Eliman" },
  { src: "/DeloitteNewLogo.png", alt: "Deloitte" },
  { src: "/Conic Automotive.webp", alt: "Conic Automotive" },
  { src: "/Charu Parashar Logo.png", alt: "Charu Parashar" },
  { src: "/Honda-Logo.png", alt: "Honda" }
];

export default function FrameworkLogos({ variant = "standard" }: FrameworkLogosProps) {
  const displayLogos = variant === "tech" ? logos : logos;

  return (
    <div className="w-full overflow-hidden mb-24 relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-x-12 md:gap-x-16">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-x-12 md:gap-x-16 shrink-0 pr-12 md:pr-16"
          >
            {displayLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain shrink-0 cursor-pointer hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}