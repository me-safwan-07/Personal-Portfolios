import { StickyScroll } from "../components/ui/StickyScroll";
const content = [
  {
    title: "PlayerForm",
    description:
      "PlayerForm is an online platform that allows users to submit player details digitally, eliminating the need for paper forms. Responses are securely sent to the form creator, streamlining data collection and management.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img src="/project1.png" alt="PlayerForm" className="h-full w-full" />
      </div>
    ),
  },
  {
    title: "Kannada Nudi News",
    description:
      "Kannada Nudi is a dynamic platform that delivers live, custom news updates in Kannada, tailored to users' interests. It also enables users to create web stories with detailed analysis, offering a personalized and comprehensive news experience.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="/project2.png"
          width={300}
          height={300}
          className="h-full w-full"
          alt="linear board demo"
        />
      </div>
    ),
  },
//   {
//     title: "Version control",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//         Version control
//       </div>
//     ),
//   },
//   {
//     title: "Running out of content",
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Running out of content
//       </div>
//     ),
//   },
];
export function Projects() {
  return (
    <div className="p-10 bg-black">
        <h1 className="text-white text-4xl font-bold flex justify-center items-center">Projects</h1>
      <StickyScroll content={content} />
    </div>
  );
}
