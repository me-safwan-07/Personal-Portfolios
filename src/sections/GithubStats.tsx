// import { google } from 'googleapis';
// import { Octokit } from '@octokit/rest';
    import NumberTicker from '../components/ui/NumberTicker';
// import { cache } from 'react';

// Types for our stats
// interface Stat {
//   value: number;
//   label: string;
// }

// Debug flag for local testing
// const DEBUG = process.env.NODE_ENV === 'development';

// Server Component
// const getCachedChannelInfo = cache(
//   async (channelId: string): Promise<Stat[]> => {
//     if (DEBUG) {
//       return [
//         { value: 10000000, label: 'Youtube Views' },
//         { value: 100000, label: 'Youtube Subscribers' },
//       ];
//     }

//     const youtube = google.youtube({
//       version: 'v3',
//       auth: process.env.YOUTUBE_API_KEY,
//     });

//     try {
//       const response = await youtube.channels.list({
//         part: ['statistics'],
//         id: [channelId],
//       });

//       if (response.data.items && response.data.items.length > 0) {
//         const channel = response.data.items[0];
//         return [
//           {
//             value: Number(channel.statistics?.viewCount) || 0,
//             label: 'Youtube Views',
//           },
//           {
//             value: Number(channel.statistics?.subscriberCount) || 0,
//             label: 'Youtube Subscribers',
//           },
//         ];
//       } else {
//         console.log('Channel not found');
//         return [];
//       }
//     } catch (error) {
//       console.error('Error fetching channel info:', error);
//       return [];
//     }
//   },
// );

// const getCachedGitHubStars = cache(
//   async (username: string): Promise<number> => {
//     if (DEBUG) {
//       return 528;
//     }

//     const octokit = new Octokit({
//       auth: process.env.GITHUB_ACCESS_TOKEN,
//     });

//     try {
//       const { data: repos } = await octokit.repos.listForUser({
//         username,
//         per_page: 100, // Adjust if you have more than 100 repos
//       });

//       const totalStars = repos.reduce(
//         (sum, repo) => sum + (repo.stargazers_count ?? 0),
//         0,
//       );
//       return totalStars;
//     } catch (error) {
//       console.error('Error fetching GitHub stars:', error);
//       return 0;
//     }
//   },
// );

export const GithubStats =  () => {
//   const YOUR_CHANNEL_ID = 'UCkwRYP1J1hjRXwo5lyBRWdQ';
//   const YOUR_GITHUB_USERNAME = '0xAquaWolf';

//   let youtubeStats: Stat[] = [];
//   let githubStars = 0;

//   try {
//     [youtubeStats, githubStars] = await Promise.all([
//       getCachedChannelInfo(YOUR_CHANNEL_ID),
//       getCachedGitHubStars(YOUR_GITHUB_USERNAME),
//     ]);
//   } catch (error) {
//     console.error('Error fetching stats:', error);
//     // Provide fallback data in case of errors
//     youtubeStats = [
//       { value: 0, label: 'Youtube Views' },
//       { value: 0, label: 'Youtube Subscribers' },
//     ];
//     githubStars = 0;
//   }

//   const statsData: Stat[] = [
//     ...youtubeStats,
//     { value: githubStars, label: 'Github Stars' },
//   ];

    const githubStars = [
       {
        name: "contributions",
        value: 1020,
        label: "Contributions"
       },
       {
        name: "contributions",
        value: 84,
        label: "Longest Streak"
       },
       {
        name: "Pull Requests",
        value: 15,
        label: "Pull Requests"
       }
    ]

  return (
    <section className="mx-auto mb-20 max-w-[1440px] px-4 py-1 lg:mb-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-base font-semibold text-white lg:text-2xl">
          Github Stats 
        </h2>
        <div className="flex flex-col items-center justify-center md:flex-row">
          {githubStars.map((stat, index) => (
            <div
              key={index}
              className="mb-8 w-full px-6 text-center md:mb-0 md:w-1/3"
            >
              <p className="mb-2 text-4xl font-bold text-white lg:text-5xl">
                <NumberTicker value={stat.value} className='text-white'/>
                <span className='text-white space-x-4'>+</span>
              </p>
              <p className="text-sm text-gray-400 lg:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
