import ReactLogo from '../assets/svg/react-logo.svg';
import TypescriptLogo from '../assets/svg/TS-Logo.svg';
import VercelLogo from '../assets/svg/Vercel-Logo.svg';

export const logos = [
  
  { src: ReactLogo, alt: 'React Logo', name: 'React', width: 30, height: 30 },
  {
    src: VercelLogo,
    alt: 'Vercel Logo',
    name: 'Next.js',
    width: 30,
    height: 30,
  },
  {
    src: TypescriptLogo,
    alt: 'TypeScript Logo',
    name: 'TypeScript',
    width: 30,
    height: 30,
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    alt: 'Tailwind CSS Logo',
    name: 'Tailwind CSS',
    width: 30,
    height: 30,
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    alt: "JavaScript Logo",
    name: "JavaScript",
    width: 30,
    height: 30,
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    alt: "Node.js Logo",
    name: "Node.js",
    width: 30,
    height: 30,
  },
//   {
//     src: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
//     alt: "Express Logo",
//     name: "Express",
//     width: 40,
//     height: 40,
//   },
  {
    src: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    alt: "MongoDB Logo",
    name: "MongoDB",
    width: 40,
    height: 40,
  },
//   prisma
  {
    src: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
    alt: "Prisma Logo",
    name: "Prisma",
    width: 40,
    height: 40,
  },
//   vite
  {
    src: "https://cdn.worldvectorlogo.com/logos/vitejs.svg",
    alt: "Vite Logo",
    name: "Vite",
    width: 40,
    height: 40,
  },
//   framer motion
  {
    src: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    alt: "Framer Motion Logo",
    name: "Framer Motion",
    width: 40,
    height: 40,
  },
//   GitBranch
  {
    src: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    alt: "Git Logo",
    name: "Git",
    width: 40,
    height: 40,
  },
];

interface LogoProps {
  src: string | string[];
  alt: string | string[];
  name: string;
  width?: number | number[];
  height?: number | number[];
}

const Logo = ({ src, alt, name, width = 30, height = 30 }: LogoProps) => (
  <div className="flex items-center gap-2 self-center lg:items-center lg:gap-2">
    {Array.isArray(src) ? (
      <div className="flex items-center gap-2">
        <div className="flex w-[60px] items-center justify-center">
          <img
            src={src[0]}
            alt={Array.isArray(alt) ? alt[0] : alt}
            width={Array.isArray(width) ? width[0] : width}
            height={Array.isArray(height) ? height[0] : height}
            className="scale-150 invert [&>path]:fill-white"
          />
        </div>
        <img
          src={src[1]}
          alt={Array.isArray(alt) ? alt[1] : alt}
          width={Array.isArray(width) ? width[1] : width}
          height={Array.isArray(height) ? height[1] : height}
        />
      </div>
    ) : (
      <div className="flex w-[60px] items-center justify-center">
        <img
          src={src}
          alt={alt as string}
          width={width as number}
          height={height as number}
        />
      </div>
    )}
    {name && <div className="text-sm font-semibold lg:text-base">{name}</div>}
  </div>
);

export const LogoList = ({ startIndex = 0 }: { startIndex?: number }) => (
  <div className="flex items-center">
    {Array.from({ length: 2 }, (_, i) =>
      logos.map((logo, index) => (
        <div
          key={`logo-${startIndex}-${i}-${index}`}
          className="inline-flex items-center px-6"
        >
          <Logo {...logo} />
        </div>
      )),
    ).flat()}
  </div>
);

export function Skill() {
  return (
    <div className="lg:mt-22 sm:-mb-13 relative z-40 mx-auto mb-[-5px] mt-[50px] flex flex-col gap-3 lg:mb-0 lg:max-w-[1080px] lg:gap-6">
      <h2 className="mx-auto mb-3 w-full px-8 text-center text-xl lg:mb-0 lg:max-w-none lg:px-0 lg:text-xl">
        Leveraging state-of-the-art technologies
      </h2>

      <div
        className="relative flex w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)',
        }}
      >
        <div className="flex animate-marquee-scroll whitespace-nowrap py-6">
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-1-${i}`} startIndex={i} />
          ))}
        </div>
        <div
          className="flex animate-marquee-scroll whitespace-nowrap py-6"
          style={{ animationDelay: '-20s' }}
          aria-hidden="true"
        >
          {Array.from({ length: 2 }, (_, i) => (
            <LogoList key={`list-2-${i}`} startIndex={i + 2} />
          ))}
        </div>
      </div>

      {/* <p className="mx-auto w-full max-w-[250px] text-center text-sm opacity-60 lg:max-w-none">
        Staying ahead of the curve and surfing the waves of innovation
      </p> */}
    </div>
  );
}