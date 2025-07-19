export interface Project {
  title: string;
  description: string;
  image: string;
  type: string;
  link: string;
  technologies?: string[];
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Resumin",
    description: 'A minimal, no-cost tool to create a public resume with a custom URL like resumin.link/yourname. Designed for developers, freelancers, and job seekers who want a simple way to showcase their profile online — without ads, clutter, or fees.',
    image: 'https://razin.imgix.net/6852f631bb1f972aaa45bbd8.jpg',
    type: 'WEB APPLICATION',
    link: 'https://resumin.link'
  },
  {
    title: "Zeba's Portfolio",
    description: 'A sleek and modern portfolio site showcasing web projects, designed for speed, responsiveness, and clarity.',
    image: 'https://razin.imgix.net/121.png',
    type: 'PORTFOLIO',
    link: 'https://zebakk.web.app'
  },
  {
    title: "Arshad Khader's Portfolio",
    description: ' A clean, professional website designed for Arshad Khader, showcasing his background and initiatives.',
    image: 'https://razin.imgix.net/arshad.png?auto=format&fit=crop&q=80&w=1200',
    type: 'PORTFOLIO',
    link: 'https://arshadk.pages.dev'
  },
  {
    title: 'Patch Property',
    description: 'Building a static modern renting platform with Patch to improve credit history, rent with a deposit, and find the perfect pad',
    image: 'https://razin.imgix.net/23.png?auto=format&fit=crop&q=80',
    type: 'PROJECT',
    link: 'https://patch.razinrayees.com'
  }
];