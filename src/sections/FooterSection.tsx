import { Button } from "@/components/ui/button";
import { Github, Hexagon, Linkedin, Twitter } from "lucide-react";

function Footer() {
  const  socialLinks=[
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://x.com/me_safwan_07",
      label: "Twitter",
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/me-safwan",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/muhammed-safwan-07/",
      label: "LinkedIn",
    }
  ];

  const mainLinks=[
    { href: "#", label: "Home" },
    { href: "#about ", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact ", label: "Contact" },
  ];
  
  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24">
    <div className="px-4 lg:px-8">
      <div className="md:flex md:items-start md:justify-between">
        <a
          href="/"
          className="flex items-center gap-x-2"
          aria-label={"Muhammed Safwan"}
        >
          <Hexagon className="h-10 w-10" /> 
          <span className="font-bold text-xl">{"<MS />"}</span>
        </a>
        <ul className="flex list-none mt-6 md:mt-0 space-x-3">
          {socialLinks.map((link, i) => (
            <li key={i}>
              <Button
                variant="secondary"
                size="icon"
                className="h-10 w-10 rounded-full"
                asChild
              >
                <a href={link.href} target="_blank" aria-label={link.label}>
                  {link.icon}
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
        <nav className="lg:mt-0 lg:col-[4/11]">
          <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
            {mainLinks.map((link, i) => (
              <li key={i} className="my-1 mx-2 shrink-0">
                <a
                  href={link.href}
                  className="text-sm text-primary underline-offset-4 hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-6 text-sm leading-6 text-muted-foreground whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
          <div>
            @ {new Date().getFullYear()} Muhammed Safwan
          </div>
          <div>
            All rights reserved
          </div>
        </div>
      </div>
        <div className=" w-full flex mt-4 items-center justify-center   ">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[8rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
            Muhammed Safwan
          </h1>
        </div>
    </div>
  </footer>
  );
}

export { Footer };
