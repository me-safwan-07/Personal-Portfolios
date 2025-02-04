import { Timeline } from "@/components/ui/timeline";

export function TimelineSection() {
  const data = [
    {
      title: "2022 - 2025",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2">Bhandarkars' Arts And Science College</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-4">
            Currently pursuing a Bachelor's of Commerce with Computer Applications.
          </p>
          <ul className="list-disc list-inside text-sm space-y-2 mb-4">
            <li>Maintaining a 8.0 CGPA</li>
            <li>Media Controller</li>
            <li>Active member of the Computer Science Club</li>
            <li>Participated in various coding competitions</li>
          </ul>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/bck.jpeg"
              alt="University campus"
              width={500}
              height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/businessday.jpeg"
              alt="Coding competition"
              width={500}
              height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
        title: "October 2024", // Added October 2024
        content: (
          <div>
            {/* Full description about Hacktoberfest */}
            <h3 className="text-lg font-semibold mb-2">Hacktoberfest 2024 Contributor</h3>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-4">
              Hacktoberfest is a global event that encourages open-source contributions throughout October. 
              It’s an annual celebration of open-source software, where developers of all levels participate 
              by contributing to various repositories on GitHub and GitLab.
            </p>
            <ul className="list-disc list-inside text-sm space-y-2 mb-4">
              <li>Successfully contributed to multiple open-source projects.</li>
              <li>Worked on issues related to JavaScript, React, and MERN stack.</li>
              <li>Reviewed and merged pull requests from other contributors.</li>
              <li>Helped beginners understand open-source contribution.</li>
            </ul>
            <div className="">
              <img
                src="/hacketoberfestbadge.png"
                alt="Hacktoberfest Contributions"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                />
              {/* <img
                src="/placeholder.svg?height=500&width=500"
                alt="Open-source projects"
                width={500}
                height={500}
                className="rounded-lg object-cover h-40 w-full shadow-md"
              /> */}
            </div>
          </div>
        ),
      },      
      {
        title: "November 2024",
        content: (
          <div>
            <h3 className="text-lg font-semibold mb-2">Mercuria Hackathon India 2024 - Bengaluru</h3>
            <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-4">
              Selected to participate in the prestigious Mercuria Hackathon India 2024, held at the Hyatt Centric Hebbal Village Hotel in Bengaluru. The hackathon brought together top developers and innovators to collaborate on groundbreaking tech solutions.
            </p>
            <ul className="list-disc list-inside text-sm space-y-2 mb-4">
              <li>Worked in a dynamic team formed at the event</li>
              <li>Developed a project integrating MERN stack, blockchain, and AI</li>
              <li>Explored cutting-edge technologies to enhance project functionality</li>
              <li>Engaged in networking and mentorship sessions with industry experts</li>
            </ul>
            <div className="grid grid-cols-2 gap-4">
            <img
              src="/mercuria1.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/mercuria2.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/mercuria3.jpeg"
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="/certificate.jpeg"
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          </div>
        ),
      },
    {
        title: "2025 - Coming Soon",
        content: (
            <div>
                <h3 className="text-lg font-semibold mb-2">Exciting Opportunities Ahead!</h3>
                <p className="text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-4">
                    2025 is set to be an exciting year with new challenges, learning experiences, and professional growth. Looking forward to embarking on an <b>internship</b> journey, gaining real-world industry exposure, and working on impactful projects.
                </p>
                <ul className="list-disc list-inside text-sm space-y-2 mb-4">
                    <li>Exploring new technologies and frameworks</li>
                    <li>Building industry-level projects and collaborating with professionals</li>
                    <li>Enhancing problem-solving and technical skills</li>
                    <li>Networking with like-minded developers and industry leaders</li>
                </ul>
                {/* <div className="grid grid-cols-2 gap-4">
                    <img
                    src="/placeholder.svg?height=500&width=500"
                    alt="Internship Journey"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-40 w-full shadow-md"
                    />
                    <img
                    src="/placeholder.svg?height=500&width=500"
                    alt="Future Projects"
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-40 w-full shadow-md"
                    />
                </div> */}
            </div>
        ),
    }

  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900">
        <Timeline data={data} />
    </div>
  );
}
