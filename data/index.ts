import { profile } from "console";
import { Container } from "postcss";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "About", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Defining My Essence",
    description:
      "A critical thinker with a keen eye for detail, I’m skilled at planning and executing with precision.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Internet of Things",
    description: "I love developing IoT & Embedded Firmware.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack",
    description: "constantly trying to improve...",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "IoT Fire Alarm",
    description: "Currently I am working on an",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "I always prioritize the visual aspect of my projects just as much as their functionality.",
    description: "Form or Functionality?",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Wanna Connect?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Smart Medicine Box",
    des: "A smart IoT device with an intuitive UI/UX that reminds users to take their medicine on time.",
    img: "/p1.png",
    iconLists: [
      "/platformio.svg",
      "/node-red.png",
      "/cpp.png",
      "/wokwi.png",
      "/arduino.png",
    ],
    link: "https://github.com/chathura-de-silva/Smart-Medibox",
  },
  {
    id: 2,
    title: "AcademEase",
    des: "A Multiplatform University Workload Management Application Frontend with Material You",
    img: "/p2.png",
    iconLists: [
      "/dart.png",
      "/flutter.png",
      "/material3.png",
      "/androidstudio.svg",
      "/firestore.png",
    ],
    link: "https://this_one_is_closed_source🤭",
  },
  {
    id: 3,
    title: "Single Vendor E-Commerce Platform",
    des: "Uses Server side rendering with flask micro-framework, focused on database design and security",
    img: "/p3.png",
    iconLists: [
      "/python.png",
      "/flask.png",
      "/mysql.svg",
      "/js.png",
      "/css.png",
    ],
    link: "https://github.com/chathura-de-silva/E-Commerce-Platform",
  },
  {
    id: 4,
    title: "Barnsley Fractal",
    des: "Highly configurable visualization of the Barnsley Fern fractal implemented in both Pythona and Julia.",
    img: "/p4.png",
    iconLists: [
      "/python.png",
      "/vscode.png",
      "/julia.png",
      "/turtle.png",
      "/makie.svg",
    ],
    link: "https://github.com/chathura-de-silva/Barnsley-Fractal",
  },
];

export const testimonials = [
  {
    quote:
      "I had the pleasure of working with Alex Johnson during our time at TechSolutions, and I can confidently say that his expertise in computer engineering is unparalleled. Alex's ability to tackle complex problems with innovative solutions consistently impressed our team. His strong analytical skills, coupled with his deep understanding of software architecture, made him an invaluable asset to our projects. Beyond his technical skills, Alex's dedication and collaborative spirit were key factors in driving our success. I highly recommend Alex for any position that requires a top-notch engineer with a passion for excellence.",
    name: "Emily Carter",
    title: "Project Manager, TechSolutions Inc., Silicon Valley",
    profileImg: "/profiledummy.png",
  },
  {
    quote:
      "I had the pleasure of working with Alex Johnson during our time at TechSolutions, and I can confidently say that his expertise in computer engineering is unparalleled. Alex's ability to tackle complex problems with innovative solutions consistently impressed our team. His strong analytical skills, coupled with his deep understanding of software architecture, made him an invaluable asset to our projects. Beyond his technical skills, Alex's dedication and collaborative spirit were key factors in driving our success. I highly recommend Alex for any position that requires a top-notch engineer with a passion for excellence.",
    name: "Emily Carter",
    title: "Project Manager, TechSolutions Inc., Silicon Valley",
    profileImg: "/profiledummy.png",
  },
  {
    quote:
      "I had the pleasure of working with Alex Johnson during our time at TechSolutions, and I can confidently say that his expertise in computer engineering is unparalleled. Alex's ability to tackle complex problems with innovative solutions consistently impressed our team. His strong analytical skills, coupled with his deep understanding of software architecture, made him an invaluable asset to our projects. Beyond his technical skills, Alex's dedication and collaborative spirit were key factors in driving our success. I highly recommend Alex for any position that requires a top-notch engineer with a passion for excellence.",
    name: "Emily Carter",
    title: "Project Manager, TechSolutions Inc., Silicon Valley",
    profileImg: "/profiledummy.png",
  },
  {
    quote:
      "I had the pleasure of working with Alex Johnson during our time at TechSolutions, and I can confidently say that his expertise in computer engineering is unparalleled. Alex's ability to tackle complex problems with innovative solutions consistently impressed our team. His strong analytical skills, coupled with his deep understanding of software architecture, made him an invaluable asset to our projects. Beyond his technical skills, Alex's dedication and collaborative spirit were key factors in driving our success. I highly recommend Alex for any position that requires a top-notch engineer with a passion for excellence.",
    name: "Emily Carter",
    title: "Project Manager, TechSolutions Inc., Silicon Valley",
    profileImg: "/profiledummy.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "CSE Undergraduate",
    desc: "B.sc.(Eng) Computer Science & Engineering - Specializing in Integrated Computer Engineering.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Math tutor",
    desc: "helping students grasp math concepts and develop strong problem-solving skills.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Dendrophile",
    desc: "I love spending time in natural environments and scientific study of both flora & fauna.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Musician",
    desc: "I play the violin and the piano, and I love to compose music in my free time.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const workPhase = [
  {
    id:1,
    title: "Think",
    order: "Think",
    description: "First of all I think and understand the problem and the problem environment.",
    animSpeed: 5.1,
    classes: "bg-emerald-900",
  },
  {
    id:2,
    title: "Plan",
    order: "Plan",
    description: "Secondly I plan a solution to the problem and study the feasibility of the solution.",
    animSpeed: 3,
    classes: "bg-black",
    particleSize: 2,
    colorList: [[236, 72, 153],[232, 121, 249],],
  },
  {
    id:3,
    title: "Execute",
    order: "Execute",
    description: "Then I start executing the plan and develop the solution, going back to previoues stages whenever needed.",
    animSpeed: 3,
    classes: "bg-sky-600",
    colorList: [[125, 211, 252]],
  },
];
