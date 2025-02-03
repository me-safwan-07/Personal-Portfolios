import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

const socialData = [
  {
    id: 1,
    name: "LinkedIn",
    designation: "Software Engineer",
    image:
      "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    link: "https://www.linkedin.com/in/muhammedsafwan07/",
  },
  {
    id: 2,
    name: "GitHub",
    designation: "Software Engineer",
    image:
      "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg",
    link: "https://github.com/me-safwan-07",
  },
  {
    id: 3,
    name: "Twitter",
    designation: "Software Engineer",
    image:
      "https://cdn.worldvectorlogo.com/logos/twitter-logo-2.svg",
    link: "https://twitter.com/me_safwan_07",
  },
];

function Social() {
  return (
    <div className="flex flex-row items-center justify-center mt-10  w-full">
      <AnimatedTooltip items={socialData} />
    </div>
  );
}

export { Social };
