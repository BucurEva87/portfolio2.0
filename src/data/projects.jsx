import { FaCalendarAlt } from "react-icons/fa"
import { FaClipboardList } from "react-icons/fa"
import { FaChalkboard } from "react-icons/fa"
import { FaCalculator } from "react-icons/fa"
import { FaRegChartBar } from "react-icons/fa"
import { FaPencilAlt } from "react-icons/fa"
import { FaUtensils } from "react-icons/fa"
import { FaRocket } from "react-icons/fa"
import { FaFilm } from "react-icons/fa"
import spaceTravelersImage from '../assets/image/space-travelers.png'
import mathMagiciansImage from '../assets/image/math-magicians.png'
import cinemaImage from '../assets/image/cinema.png'
import leaderboardImage from '../assets/image/leaderboard.png'
import minimalistTodoListImage from '../assets/image/minimalist-todo-list.png'
import conferenceImage from '../assets/image/conference.png'

export default [
  {
    name: 'Conference',
    github: 'https://github.com/BucurEva87/capstone-project',
    description: 'This project presents a website for a programming course gathering. It features educators and courses and allows people to enrol in those courses.',
    livePreview: 'https://bucureva87.github.io/capstone-project/',
    tags: ['javascript', 'html5', 'css3'],
    createdAt: '2022-07-26T10:11:47Z',
    endedAt: '2022-08-02T10:11:47Z',
    title: 'Author',
    image: conferenceImage,
    icon: <FaCalendarAlt />
  },
  {
    name: 'Minimalist ToDo List',
    github: 'https://github.com/BucurEva87/to-do-list',
    description: 'A simple application used to organize your day-to-day activity. You can add and remove from this list.',
    livePreview: 'https://bucureva87.github.io/to-do-list/dist/',
    tags: ['javascript', 'html5', 'css3', 'node'],
    createdAt: '2022-08-11T14:14:15Z',
    endedAt: '2022-08-18T14:14:15Z',
    title: 'Author',
    image: minimalistTodoListImage,
    icon: <FaClipboardList />
  },
  {
    name: 'Leaderboard',
    github: 'https://github.com/BucurEva87/leaderboard',
    description: 'The project consists in a leaderboard which retrieves scores from an external API and allows players to submit their scores.',
    livePreview: 'https://bucureva87.github.io/leaderboard/dist/',
    tags: ['javascript', 'html5', 'css3'],
    createdAt: '2022-08-31T19:07:29Z',
    endedAt: '2022-09-07T19:07:29Z',
    title: 'Author',
    image: leaderboardImage,
    icon: <FaChalkboard />
  },
  {
    name: 'Math magicians',
    github: 'https://github.com/BucurEva87/math-magicians',
    description: 'Project suited for math and React enthusiasts. This application does basic math calculations and features the single-page application paradigm.',
    livePreview: 'https://math-magicians-eva.netlify.app/',
    tags: ['javascript', 'html5', 'sass', 'react'],
    createdAt: '2022-09-12T08:46:01Z',
    endedAt: '2022-09-19T08:46:01Z',
    title: 'Author',
    image: mathMagiciansImage,
    icon: <FaCalculator />
  },
  {
    name: 'Covid statistics',
    github: 'https://github.com/BucurEva87/covid-capstone',
    description: 'An API-based project centred around the infection and curing rate of SARS-COV-2 globally.',
    livePreview: null,
    tags: ['javascript', 'html5', 'css3', 'react', 'redux'],
    createdAt: '2019-11-29T18:00:16Z',
    endedAt: '2019-12-06T18:00:16Z',
    title: 'Author',
    icon: <FaRegChartBar />
  },
  {
    name: 'Blog App',
    github: 'https://github.com/BucurEva87/blog-app',
    description: 'Blog App is an application written in Ruby on Rails that allows users to write posts, leave comments and reaction with likes.',
    livePreview: null,
    tags: ['html5', 'scss', 'ruby', 'rails'],
    createdAt: '2023-02-24T18:26:25Z',
    endedAt: '2023-03-03T18:26:25Z',
    title: 'Coauthor',
    icon: <FaPencilAlt />
  },
  {
    name: 'Recipe App',
    github: 'https://github.com/BucurEva87/recipe-app',
    description: 'Recipe App is an application that allows you to keep track of recipes, inventory and ingredients, generate shopping lists for items you lack for a recipe and share your recipes (depending on their public or private status).',
    livePreview: null,
    tags: ['html5', 'scss', 'ruby', 'rails'],
    createdAt: '2023-03-13T05:29:12Z',
    endedAt: '2023-03-20T05:29:12Z',
    title: 'Coauthor',
    icon: <FaUtensils />
  },
  {
    name: 'Space Travelers Hub',
    github: 'https://github.com/BucurEva87/space-travelers-hub',
    description: 'Come and book a rocket, join a mission or reserve your very dragon here! Our spaceships going to stars and beyond are ready to take you on your life\'s journey. It is a project for any space lover!',
    livePreview: 'https://deploy-preview-33--space-travellers-hub-desta-eva-peter.netlify.app/',
    tags: ['javascript', 'html5', 'scss'],
    createdAt: '2022-10-03T08:59:54Z',
    endedAt: '2022-10-10T08:59:54Z',
    title: 'Coauthor',
    image: spaceTravelersImage,
    icon: <FaRocket />
  },
  {
    name: 'Cinema',
    github: 'https://github.com/BucurEva87/cinema',
    description: 'An application that retrieves movie details from an API associated with a database. Cinema allows users to comment on their favourite movies and show appreciation through a like (or more).',
    livePreview: 'https://bucureva87.github.io/cinema/dist/',
    tags: ['javascript', 'html5', 'css3', 'node'],
    createdAt: '2022-09-05T14:03:30Z',
    endedAt: '2022-09-12T14:03:30Z',
    title: 'Coauthor',
    image: cinemaImage,
    icon: <FaFilm />
  },
];
