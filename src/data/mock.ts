import tournamentImg from "@/assets/post-tournament.jpg";
import clipImg from "@/assets/post-clip.jpg";
import certificateImg from "@/assets/post-certificate.jpg";
import setupImg from "@/assets/post-setup.jpg";

export type PostKind =
  | "text"
  | "photo"
  | "video"
  | "achievement"
  | "certificate"
  | "milestone";

export interface Gamer {
  id: string;
  name: string;
  username: string;
  headline: string;
  specialization: string;
  games: string[];
  skills: string[];
  experience: string;
  about: string;
  quote: string;
  location: string;
  stats: { posts: number; followers: string; following: number };
  links: { label: string; handle: string; url: string }[];
}

export interface Post {
  id: string;
  authorId: string;
  kind: PostKind;
  text: string;
  image?: string;
  game?: string;
  tournament?: string;
  title?: string;
  createdAt: string;
  likes: number;
  comments: number;
  size: "sm" | "md" | "lg";
}

export const gamers: Gamer[] = [
  {
    id: "u1",
    name: "Alex Carter",
    username: "alexplays",
    headline: "Competitive FPS Gamer | Valorant | Strategy Enthusiast",
    specialization: "Competitive FPS",
    games: ["Valorant", "Counter-Strike", "Apex Legends"],
    skills: [
      "Team Communication",
      "Strategy",
      "Aim",
      "Game Analysis",
      "Competitive Gameplay",
    ],
    experience: "3+ Years",
    about:
      "Professional gamer focused on competitive FPS titles and strategic gameplay.",
    quote: "Every match is another opportunity to become better.",
    location: "Bengaluru, India",
    stats: { posts: 24, followers: "1.8K", following: 342 },
    links: [
      { label: "Twitch", handle: "twitch.tv/alexplays", url: "#" },
      { label: "YouTube", handle: "youtube.com/@alexplays", url: "#" },
      { label: "Discord", handle: "alexplays#2041", url: "#" },
      { label: "Steam", handle: "steamcommunity.com/id/alexplays", url: "#" },
      { label: "X", handle: "x.com/alexplays", url: "#" },
    ],
  },
  {
    id: "u2",
    name: "Maya Singh",
    username: "mayagaming",
    headline: "Strategy Gamer | Shotcaller | Draft Analyst",
    specialization: "Strategy Gamer",
    games: ["League of Legends", "Valorant", "Dota 2"],
    skills: ["Shotcalling", "Macro Play", "Draft Analysis", "Leadership"],
    experience: "4+ Years",
    about:
      "Mid-lane shotcaller who studies drafts, timings and team macro for collegiate esports squads.",
    quote: "Good macro wins more games than good aim.",
    location: "Pune, India",
    stats: { posts: 31, followers: "2.4K", following: 288 },
    links: [
      { label: "Twitch", handle: "twitch.tv/mayagaming", url: "#" },
      { label: "YouTube", handle: "youtube.com/@mayagaming", url: "#" },
      { label: "Discord", handle: "maya#7781", url: "#" },
      { label: "X", handle: "x.com/mayagaming", url: "#" },
    ],
  },
  {
    id: "u3",
    name: "Ryan Cole",
    username: "ryanclutch",
    headline: "FPS & Esports | Entry Fragger | Apex Predator",
    specialization: "FPS & Esports",
    games: ["Apex Legends", "Valorant", "Rainbow Six Siege"],
    skills: ["Entry Fragging", "Movement", "Clutch Play", "Aim Training"],
    experience: "5+ Years",
    about:
      "Entry fragger for Nova Syndicate. Movement-focused player with a habit of closing out 1v3 rounds.",
    quote: "Pressure is just another round to win.",
    location: "Manchester, UK",
    stats: { posts: 47, followers: "6.1K", following: 190 },
    links: [
      { label: "Twitch", handle: "twitch.tv/ryanclutch", url: "#" },
      { label: "Steam", handle: "steamcommunity.com/id/ryanclutch", url: "#" },
      { label: "X", handle: "x.com/ryanclutch", url: "#" },
    ],
  },
  {
    id: "u4",
    name: "Sarah Novak",
    username: "novaqueen",
    headline: "Support Main | Team Captain | Rocket League",
    specialization: "Team Support",
    games: ["Overwatch 2", "Rocket League", "Valorant"],
    skills: ["Team Communication", "Coaching", "Positioning", "Utility Usage"],
    experience: "2+ Years",
    about:
      "Support main and captain of a university roster. I build teams that communicate before they aim.",
    quote: "A calm comms channel is a competitive advantage.",
    location: "Prague, Czechia",
    stats: { posts: 18, followers: "980", following: 410 },
    links: [
      { label: "Discord", handle: "novaqueen#1122", url: "#" },
      { label: "YouTube", handle: "youtube.com/@novaqueen", url: "#" },
    ],
  },
  {
    id: "u5",
    name: "Jordan Mehta",
    username: "jordanhex",
    headline: "Speedrunner | Game Analyst | Content Creator",
    specialization: "Speedrunning & Analysis",
    games: ["Elden Ring", "Hollow Knight", "Counter-Strike"],
    skills: ["Frame Analysis", "Route Planning", "Editing", "Game Analysis"],
    experience: "6+ Years",
    about:
      "I break games down frame by frame and publish route breakdowns for the speedrunning community.",
    quote: "Mastery is repetition with attention.",
    location: "Toronto, Canada",
    stats: { posts: 62, followers: "12.3K", following: 145 },
    links: [
      { label: "YouTube", handle: "youtube.com/@jordanhex", url: "#" },
      { label: "Twitch", handle: "twitch.tv/jordanhex", url: "#" },
      { label: "X", handle: "x.com/jordanhex", url: "#" },
    ],
  },
];

export const posts: Post[] = [
  {
    id: "p1",
    authorId: "u1",
    kind: "achievement",
    title: "Tournament Victory",
    text: "Finished #1 in the Regional Valorant Championship.",
    image: tournamentImg,
    game: "Valorant",
    tournament: "Regional Valorant Championship 2026",
    createdAt: "2h ago",
    likes: 428,
    comments: 36,
    size: "lg",
  },
  {
    id: "p2",
    authorId: "u1",
    kind: "video",
    title: "Gaming Clip",
    text: "Clutch round from last night's ranked match.",
    image: clipImg,
    game: "Valorant",
    createdAt: "6h ago",
    likes: 212,
    comments: 18,
    size: "md",
  },
  {
    id: "p3",
    authorId: "u1",
    kind: "certificate",
    title: "Certificate",
    text: "Completed Advanced Competitive Gaming Workshop.",
    image: certificateImg,
    createdAt: "1d ago",
    likes: 96,
    comments: 7,
    size: "md",
  },
  {
    id: "p4",
    authorId: "u1",
    kind: "milestone",
    title: "Achievement",
    text: "Reached Immortal rank.",
    game: "Valorant",
    createdAt: "2d ago",
    likes: 341,
    comments: 24,
    size: "sm",
  },
  {
    id: "p5",
    authorId: "u1",
    kind: "text",
    title: "Text Update",
    text: "Grinding toward the next tournament. Scrims every evening this week.",
    createdAt: "3d ago",
    likes: 74,
    comments: 5,
    size: "sm",
  },
  {
    id: "p6",
    authorId: "u1",
    kind: "photo",
    title: "Gaming Photo",
    text: "New setup finally done. Cable management took longer than the ranked climb.",
    image: setupImg,
    createdAt: "5d ago",
    likes: 158,
    comments: 21,
    size: "md",
  },
  {
    id: "p7",
    authorId: "u2",
    kind: "achievement",
    title: "Tournament Achievement",
    text: "Top 4 finish at the Collegiate Rift Invitational as shotcaller.",
    image: tournamentImg,
    game: "League of Legends",
    tournament: "Collegiate Rift Invitational",
    createdAt: "8h ago",
    likes: 267,
    comments: 30,
    size: "md",
  },
  {
    id: "p8",
    authorId: "u3",
    kind: "video",
    title: "Gaming Clip",
    text: "1v3 retake on Ascent — utility first, aim second.",
    image: clipImg,
    game: "Valorant",
    createdAt: "11h ago",
    likes: 512,
    comments: 44,
    size: "lg",
  },
  {
    id: "p9",
    authorId: "u4",
    kind: "text",
    title: "Gaming Update",
    text: "Started coaching two rookies on comms discipline. Progress already visible.",
    createdAt: "1d ago",
    likes: 61,
    comments: 9,
    size: "sm",
  },
  {
    id: "p10",
    authorId: "u5",
    kind: "milestone",
    title: "Gaming Milestone",
    text: "New personal best: Elden Ring any% in 41:12.",
    game: "Elden Ring",
    createdAt: "2d ago",
    likes: 894,
    comments: 73,
    size: "sm",
  },
  {
    id: "p11",
    authorId: "u5",
    kind: "certificate",
    title: "Certificate",
    text: "Certified in Esports Performance Analysis by the Nova Academy.",
    image: certificateImg,
    createdAt: "4d ago",
    likes: 143,
    comments: 12,
    size: "md",
  },
  {
    id: "p12",
    authorId: "u2",
    kind: "photo",
    title: "Gaming Photo",
    text: "Bootcamp week with the roster. Twelve hours of scrims a day.",
    image: setupImg,
    createdAt: "6d ago",
    likes: 187,
    comments: 15,
    size: "md",
  },
];

export const currentUser = gamers[0];

export function getGamer(username: string) {
  return gamers.find((g) => g.username === username);
}

export function postsByAuthor(authorId: string) {
  return posts.filter((p) => p.authorId === authorId);
}

export interface Notification {
  id: string;
  actor: string;
  username: string;
  text: string;
  time: string;
  kind: "like" | "follow" | "comment" | "reaction";
  unread: boolean;
}

export const notifications: Notification[] = [
  {
    id: "n1",
    actor: "Alex Carter",
    username: "alexplays",
    text: "liked your post.",
    time: "12 minutes ago",
    kind: "like",
    unread: true,
  },
  {
    id: "n2",
    actor: "Sarah Novak",
    username: "novaqueen",
    text: "started following you.",
    time: "48 minutes ago",
    kind: "follow",
    unread: true,
  },
  {
    id: "n3",
    actor: "Glorix",
    username: "glorix",
    text: "Your tournament achievement received 24 reactions.",
    time: "3 hours ago",
    kind: "reaction",
    unread: true,
  },
  {
    id: "n4",
    actor: "Jordan Mehta",
    username: "jordanhex",
    text: "commented on your gaming clip.",
    time: "Yesterday, 9:41 PM",
    kind: "comment",
    unread: false,
  },
  {
    id: "n5",
    actor: "Maya Singh",
    username: "mayagaming",
    text: "mentioned you in a post about scrim schedules.",
    time: "Tuesday, 6:02 PM",
    kind: "comment",
    unread: false,
  },
  {
    id: "n6",
    actor: "Ryan Cole",
    username: "ryanclutch",
    text: "liked your certificate post.",
    time: "Monday, 11:15 AM",
    kind: "like",
    unread: false,
  },
];

export const allGames = [
  "Valorant",
  "Counter-Strike",
  "Apex Legends",
  "League of Legends",
  "Overwatch 2",
  "Rocket League",
  "Elden Ring",
  "Dota 2",
];

export const allSpecializations = [
  "Competitive FPS",
  "Strategy Gamer",
  "FPS & Esports",
  "Team Support",
  "Speedrunning & Analysis",
];

export const allSkills = [
  "Aim",
  "Strategy",
  "Team Communication",
  "Shotcalling",
  "Coaching",
  "Game Analysis",
  "Movement",
];

export const experienceLevels = ["2+ Years", "3+ Years", "4+ Years", "5+ Years", "6+ Years"];
