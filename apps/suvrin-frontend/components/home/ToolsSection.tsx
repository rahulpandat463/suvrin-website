/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
export default function ToolsSection() {
  return (
    <section
      className="bg-white py-12 border-t border-[#e5e5e5] border-dashed overflow-hidden"
      id="tools"
    >
      <div className="max-w-[1440px] w-full mx-auto border-x border-[#e5e5e5] border-dashed relative z-10">
        <p className="text-center font-bold text-[#888] text-[0.95rem] font-medium mb-10">
          Tools & Technologies
        </p>
        <div className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-x-20">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-x-20 shrink-0 text-[1.4rem] font-bold font-sans text-gray-800 pb-2"
              >
                <div className="flex items-center gap-2">
                  <div className="text-[#61DAFB]">
                    <svg
                      width="28"
                      height="28"
                      viewBox="-11.5 -10.23174 23 20.46348"
                    >
                      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                      <g stroke="#61dafb" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                      </g>
                    </svg>
                  </div>
                  React
                </div>
                <div className="font-black tracking-tighter text-3xl">
                  NEXT<span className="font-light text-xl">.js</span>
                </div>
                <div className="flex items-center gap-2 text-[#3776AB]">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 118 118"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M58.3093 3.63004C43.515 3.63004 39.5413 10.3121 39.5413 10.3121L39.4678 25.1385H77.6749V28.1887H33.2764C18.6657 28.1887 13.5645 36.6346 13.5645 52.8875C13.5645 69.1404 17.5 76.5447 28.98 77.2847H38.257V66.2411C38.257 56.548 46.223 48.582 55.9161 48.582H78.9327C88.6258 48.582 96.5918 40.616 96.5918 30.9229V15.2533C96.5918 15.2533 91.5471 3.63004 58.3093 3.63004ZM44.2057 11.2335C46.8523 11.2335 48.997 13.3782 48.997 16.0248C48.997 18.6714 46.8523 20.816 44.2057 20.816C41.5591 20.816 39.4144 18.6714 39.4144 16.0248C39.4144 13.3782 41.5591 11.2335 44.2057 11.2335Z"
                      fill="#387EB8"
                    />
                    <path
                      d="M59.6274 114.37C74.4218 114.37 78.3955 107.688 78.3955 107.688L78.4689 92.8615H40.2619V89.8113H84.6603C99.2711 89.8113 104.372 81.3654 104.372 65.1125C104.372 48.8596 100.437 41.4553 88.9568 40.7153H79.6797V51.7589C79.6797 61.452 71.7138 69.418 62.0207 69.418H39.0041C29.311 69.418 21.3449 77.384 21.3449 87.0771V102.747C21.3449 102.747 26.3897 114.37 59.6274 114.37ZM73.7311 106.767C71.0845 106.767 68.9398 104.622 68.9398 101.975C68.9398 99.3286 71.0845 97.184 73.7311 97.184C76.3777 97.184 78.5224 99.3286 78.5224 101.975C78.5224 104.622 76.3777 106.767 73.7311 106.767Z"
                      fill="#FFE052"
                    />
                  </svg>{" "}
                  Python
                </div>
                <div className="flex flex-col items-start leading-[0.8]">
                  <span className="font-bold text-xl">LLaMA</span>
                  <span className="text-[0.6rem] text-gray-500 font-semibold tracking-wider uppercase">
                    by Meta
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-gradient-to-tr from-purple-600 to-blue-500 rounded flex items-center justify-center text-white text-[10px]">
                    🦙
                  </div>
                  LlamaIndex
                </div>
                <div className="font-medium flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.28 11.5c.06-.52.09-1.04.1-1.57-.26-3.8-3.03-6.9-6.79-7.58-.2-.04-.42-.06-.63-.07-1.12-.08-2.26.11-3.3.56-1 .44-1.92 1.05-2.68 1.83C7.26 3.1 5.07 2.44 2.8 3.2 0 4.29-1 7.15-.35 9.87c.2.86.58 1.66 1.12 2.37-1.07 1.55-1.56 3.42-1.38 5.3.36 3.73 3.23 6.72 6.94 7.24 1.15.16 2.31 0 3.38-.45 1.05-.44 2-.1 2.8-1.85 1.67 1.62 3.96 2.37 6.27 1.67 2.82-1.13 3.8-4.04 3.08-6.79-.19-.77-.52-1.5-1-2.14 1.25-.97 2-2.3 2.14-3.72zm-12.75-8.4c1.86.13 3.53 1.25 4.3 2.92L8.2 8.52c-.6-1.18-.8-2.5-.58-3.8l.64.08c.6-.9 1.4-1.63 2.3-2.12.57-.3 1.22-.44 1.86-.48h.01zm-5.18 2.6c1.17 0 2.3.43 3.2 1.2-.5 1.4-1.25 2.7-2.17 3.8-1.44-.06-2.82.35-3.95 1.16v-.66c-.03-2.3 1.42-4.32 3.6-5.02.43-.13.88-.22 1.34-.23zm-.67 16l4.63-2.53-2.65-4.52C4.54 15.65 3.32 16.5 2 17.1c-.04-.37-.06-.75-.06-1.13 0-1.87.97-3.5 2.5-4.47 1.2-.75 2.6-1.05 3.9-1v.7c0 1.25.32 2.45.9 3.53l.3.62L5 19.86l-1.3-.15zm10.74 1.15c-1.86-.12-3.53-1.24-4.3-2.92l5.64-2.5c.6 1.18.8 2.5.58 3.8-.2-.02-.4-.05-.58-.08-.63.9-1.44 1.62-2.36 2.1-.56.3-1.2.45-1.84.5h-.02v-.02zm3.36-4.9c-.8.56-1.74.88-2.73.9V14.6c1.44.02 2.8-.4 3.94-1.2v.63c.02 2.3-1.44 4.32-3.6 5.04-.43.15-.9.23-1.36.24l.5-.5-1.2-1.95zm2.74-5.32c-.1.35-.15.72-.2 1.07 0 1.87-1 3.53-2.5 4.5h-1c-1.05.65-2.28.94-3.5 1h-.6l2.12-3.52c.98-.32 1.83-.94 2.45-1.78l1.32-.4" />
                  </svg>
                  OpenAI
                </div>
                <div className="flex items-center gap-2 text-xl font-semibold">
                  <span className="text-[1.5rem]">🤗</span> HuggingFace
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
