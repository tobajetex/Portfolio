import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact, FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import ebook from './assets/ebook.png'
import exp from './assets/exp.png'
import menu from './assets/menu.png'
import mix from './assets/mix.png'
import nobleman from './assets/nobleman.png'
import mindset from './assets/mindset.png'
export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
    {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
    {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Next',
    icon: <TbBrandNextjs className="h-16 w-16 text-emerald-500" />,
    text: 'Navigating the realm of Next.js, I engineer seamless React applications. From server-side rendering to effortless deployment, I harness Next.js to build performant and scalable web solutions with precision.',
  },
  {
    id: nanoid(),
    title: 'Bootstrap',
    icon: <FaBootstrap className="h-16 w-16 text-emerald-500" />,
    text: "Incorporating Bootstrap into my toolkit, I elevate design aesthetics with pre-built components and responsive layouts. Proficient in harnessing Bootstrap's versatility, I create visually appealing and user-friendly interfaces for modern web applications.",
  },

  {
    id: nanoid(),
    title: 'Tailwind',
    icon: <SiTailwindcss className="h-16 w-16 text-emerald-500" />,
    text: 'Mastering Tailwind CSS, I excel in crafting dynamic and responsive user interfaces. Leveraging utility-first principles, I bring precision to styling, ensuring visually appealing and efficient web designs.',
  },
]

export const projects = [
    {
    id: nanoid(),
    img: nobleman,
    url: 'http://nobleman.rf.gd/',
    github: '#',
    title: 'Nobleman',
    text: 'Nobleman is an online destination for modern men, featuring stylish apparel, premium footwear, and signature fragrances designed to elevate your lifestyle',
  },
    {
    id: nanoid(),
    img: mindset,
    url: 'https://mindset.rf.gd/?i=1',
    github: '#',
    title: 'Solvatech',
    text: 'At Solvatect, we transform ideas into powerful digital solutions. We help businesses grow with modern design, smart technology, and result-driven marketing. Our services are tailored to enhance brand identity, boost performance, and deliver exceptional user experiences.',
  },
  {
    id: nanoid(),
    img: mix,
    url: 'https://cocktailbing.netlify.app/',
    github: 'https://github.com/tobajetex/Mixmaster/tree/master',
    title: 'MixMaster',
    text: 'Mixmaster, your cocktail haven, curates a stylish collection of tantalizing drinks from a dynamic API. Discover a world of mixology through an alluring grid of cocktails, each enticing with vibrant visuals. Dive into detailed pages for a closer look at ingredients, making Mixmaster the go-to platform for both novices and seasoned cocktail aficionados.',
  },
  {
    id: nanoid(),
    img: menu,
    url: 'https://gourmetpalette.netlify.app/',
    github: 'https://github.com/tobajetex/Menu',
    title: 'Gourmet Palette',
    text: "Indulge your senses with our culinary showcase, a dynamic website featuring an array of food menus elegantly displayed in a captivating grid. Effortlessly navigate through 'All,' 'Breakfast,' 'Lunch,' and 'Dinner' options with user-friendly filter buttons. Elevate your dining experience and explore a world of flavors at your fingertips.",
  },
  {
    id: nanoid(),
    img: exp,
    url: 'https://expeditionforall.netlify.app/',
    github: 'https://github.com/tobajetex/my-Backroad-app',
    title: 'Explorer',
    text: "Embark on a journey of exploration with 'Explorer,' your ultimate travel companion. This web app invites you to discover enchanting destinations worldwide for your next vacation or excursion. Each location is thoughtfully curated and beautifully presented in cards, complete with vivid descriptions. Unleash your wanderlust and find the perfect getaway on Explorer.",
  },
  {
    id: nanoid(),
    img: ebook,
    url: 'https://ebookdownload.netlify.app/',
    github: 'https://github.com/tobajetex/Ebook',
    title: 'Blog Mastery',
    text: 'Are you ready to take your blogging journey to new height? Blog Mastery is your ultimate guide to creating and managing and drives engagement',
  },
]
