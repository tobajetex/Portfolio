import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
//import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import mix from "./assets/mix.png";
import movieview from "./assets/movieView.png";
import gift from "./assets/gift.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },

  {
    id: nanoid(),
    title: "Node Js",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Structuring applications into small, testable modules, managing dependencies with package.json, and understanding module resolution (local vs. core vs. node_modules).",
  },
  {
    id: nanoid(),
    title: "Express Js",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Built RESTful APIs and web servers using Express.js. Implemented middleware for logging, authentication, error handling, and request parsing. Structured routes with express.Router().",
  },
  {
    id: nanoid(),
    title: "Mongo DB",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Integrated MongoDB with Node.js applications using MongoClient and Mongoose. Managed connection pooling, error handling, and environment-based connection strings.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Built dynamic frontends with React — reusable components, state management via Hooks, JSX rendering, and event-driven user interfaces.",
  },
  {
    id: nanoid(),
    title: "Next js",
    icon: <TbBrandNextjs className="h-16 w-16 text-emerald-500" />,
    text: "Navigating the realm of Next.js, I engineer seamless React applications. From server-side rendering to effortless deployment, I harness Next.js to build performant and scalable web solutions with precision.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: movieview,
    url: "https://movieviews.netlify.app/",
    github: "#",
    title: "Movie View",
    text: "Built a movie discovery website using vanilla JavaScript that fetches popular and searched movies from a third-party API. Used async/await with fetch() to handle API requests and dynamically rendered movie cards to the DOM. Implemented a.Watch Later feature saving movies to localStorage with add/remove functionality",
  },
  {
    id: nanoid(),
    img: gift,
    url: "https://giftgenie-oceg.onrender.com/",
    github: "https://github.com/tobajetex/giftGenie.git",
    title: " Gift Genie AI — AI-Powered Gift Recommendation Engine",
    text: "Engineered a full-stack application that generates personalized gift suggestions using the OpenAI API, including a secure RESTful backend with Express to prevent client-side API key exposure — reducing gift search time from 30 minutes of browsing to under 10 seconds of AI generation.",
  },
  {
    id: nanoid(),
    img: mix,
    url: "https://cocktailbing.netlify.app/",
    github: "https://github.com/tobajetex/Mixmaster/tree/master",
    title: "MixMaster",
    text: "Mixmaster, your cocktail haven, curates a stylish collection of tantalizing drinks from a dynamic API. Discover a world of mixology through an alluring grid of cocktails, each enticing with vibrant visuals. Dive into detailed pages for a closer look at ingredients, making Mixmaster the go-to platform for both novices and seasoned cocktail aficionados.",
  },
];
