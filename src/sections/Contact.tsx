const data = {
    label: "Contact",
    title: "Get in Touch",
    description: "If you're interested in working with me or if you have any questions about my projects, feel free to reach out. I'd be more than happy to help.",
    linkedin: "https://www.linkedin.com/in/muhammedsafwan07/",
    mail: "mailto:mesafwan07@gmail.com?subject=Hello&body=I want to connect with you.",
}

export const Contact = () => {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <div className="space-y-3">
          {/* <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
            {data.label}
            </div> */}
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {data.title}
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {data.description}
            </p>
            <div className="space-x-4">
              <a
                href={data.linkedin}
                className="text-blue-500 hover:underline"
              >
                LinkedIn
              </a>{" "}
              <a
                href={data.mail}
                className="text-blue-500 hover:underline"
              >
                Mail
              </a>{" "}
            </div>
          </div>
      </div>
    </section>
  );
};