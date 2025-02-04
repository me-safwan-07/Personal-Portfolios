import type React from "react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-black lg:mt-18 relative  mx-auto  flex flex-col gap-3 text-white ">
      <div className="container px-4 md:px-6 mx-auto lg:mb-0 mb-[-75px] mt-[50px] lg:max-w-[1080px] lg:gap-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="text-neutral-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am currently pursuing a Bachelor of Commerce with Computer Applications from Mangalore University. I have developed strong skills in HTML, CSS, JavaScript, TypeScript, Node.js, Express, Next.js, Tailwind CSS, Git, Prisma, and MongoDB. With a solid foundation in web development, I am proficient in building full-stack applications and have a particular focus on the MERN stack.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center mb-10 lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]">
              <motion.img
                src="https://avatars.githubusercontent.com/u/167682973?v=4"
                alt="Profile picture"
                className="object-cover rounded-full border-4 border-neutral-800"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;