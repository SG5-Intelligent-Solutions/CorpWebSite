import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const services = [
  {
    id: 1,
    title: "AI & ML Solutions",
    image: "/rectangle-8.png",
    icon: "/group-2.png",
    iconAlt: "Group",
    col_id: 1,
  },
  {
    id: 2,
    title: "Data Engineering",
    image: "/dataEng.svg",
    icon: "/ri-apps-2-ai-line.svg",
    iconAlt: "Ri apps ai line",
    col_id: 2,
  },
  {
    id: 3,
    title: "Blockchain Services",
    image: "/rectangle-10.png",
    icon: "/eos-icons-blockchain.svg",
    iconAlt: "Eos icons blockchain",
    col_id: 3,
  },
  {
    id: 4,
    title: "Software & Web Development",
    image: "/rectangle-20.png",
    icon: "/eos-icons-service-outlined.svg",
    iconAlt: "Eos icons service",
    col_id: 1,
  },
  {
    id: 5,
    title: "Consulting & Custom Development",
    image: "/consultCustom.svg",
    icon: "/hugeicons-blockchain-02.svg",
    iconAlt: "Hugeicons blockchain",
    col_id: 2,
  },
  {
    id: 6,
    title: "Managed Services",
    image: "/rectangle-22.png",
    icon: "/carbon-service-id.svg",
    iconAlt: "Carbon service id",
    col_id: 3,
  },
];

export const cardsData = [
  {
    title: "Predictive Asset Management System: ",
    description:
      "Leverage predictive analytics to maximize asset lifespan, reduce maintenance costs, and improve operational efficiency.",
    tags: [
      [
        { text: "Efficiency", className: "w-40" },
        { text: "Predictive Analytics", className: "w-40" },
      ],
      [
        { text: "Asset Lifecycle", className: "w-40" },
        { text: "AI Integration", className: "w-40" },
      ],
      [{ text: "Maintenance Optimization", className: "w-40" }],
    ],
    iconSrc: "/write.svg",
  },
  {
    title: "Data-Driven Decision Support Platform:",
    description:
      "Provide real-time insights and predictive analytics to enhance business decision-making processes.",
    tags: [
      [
        { text: "Predictive Analytics", className: "w-36" },
        { text: "Business Intelligence", className: "w-40" },
      ],
      [
        { text: "Real-Time Insights", className: "w-36" },
        { text: "Decision-Making", className: "w-40" },
      ],
      [{ text: "Data Visualization", className: "w-36" }],
    ],
    iconSrc: "/write.svg",
  },
  {
    title: "EV Fleet Management Platform: ",
    description:
      "AI-driven platform for fleet optimization, predictive maintenance, route efficiency, and smart charging solutions, ideal for logistics and transportation sectors.",
    tags: [
      [
        { text: "Fleet Optimizationt", className: "w-40" },
        { text: "Route Efficiency", className: "w-40" },
      ],
      [
        { text: "Smart Charging", className: "w-40" },
        { text: "Predictive Maintenance", className: "w-36" },
      ],
      [{ text: "Logistics AI", className: "w-40" }],
    ],
    iconSrc: "/write.svg",
  },
  {
    title: "Smart Energy Management System:",
    description:
      "Utilize AI and blockchain to optimize solar park efficiency, manage dynamic energy pricing, and enhance asset management.",
    tags: [
      [
        { text: "GreenTech", className: "w-36" },
        { text: "Energy Optimization", className: "w-40" },
      ],
      [
        { text: "Solar Park Management", className: "w-40" },
        { text: "Dynamic Pricing", className: "w-44" },
        { text: "AI & Blockchain", className: "w-44" },
      ],
    ],
    iconSrc: "/write.svg",
  },
  {
    title: "Blockchain-Based Compliance Tool: ",
    description:
      "Target aviation, logistics, and healthcare industries by streamlining compliance processes, improving transparency, and reducing manual workloads.",
    tags: [
      [
        { text: "Blockchain", className: "w-36" },
        { text: "Regulatory Compliance", className: "w-36" },
      ],
      [
        { text: "Process Automation", className: "w-36" },
        { text: "Transparency", className: "w-40" },
        { text: "Risk Management", className: "w-40" },
      ],
    ],
    iconSrc: "/write.svg",
  },
];


export const  testimonials = [
    // First row
    {
      id: 1,
      rating: 5,
      text: "Cyntch has been an amazing investment partner for me. Their investment management services are easy to use.",
      author: "@Yury",
    },
    {
      id: 2,
      rating: 5,
      text: "I never realized how much money I was wasting on unnecessary expenses until I started using Cyntch.",
      author: "@Aryan",
    },
    {
      id: 3,
      rating: 5,
      text: "Such a clean, beautiful template and so easy to customise. Would highly recommend.",
      author: "@Arim",
    },
    // Second row
    {
      id: 4,
      rating: 5,
      text: "Cyntch has been an amazing investment partner for me. Their investment management services are easy to use.",
      author: "@Aryan",
    },
    {
      id: 5,
      rating: 5,
      text: "Such a clean, beautiful template and so easy to customise. Would highly recommend.",
      author: "@Arim",
    },
    {
      id: 6,
      rating: 4,
      text: "I accidentally discovered this while looking for something else, and I'm glad I did!",
      author: "@Sam",
    },
    {
      id: 7,
      rating: 5,
      text: "I never realized how much money I was wasting on unnecessary expenses until I started using Cyntch.",
      author: "@Aryan",
    },
    {
      id: 8,
      rating: 5,
      text: "Such a clean, beautiful template and so easy to customise. Would highly recommend.",
      author: "@Arim",
    },
    {
      id: 9,
      rating: 4,
      text: "I accidentally discovered this while looking for something else, and I'm glad I did!",
      author: "@Sam",
    },
    {
      id: 10,
      rating: 5,
      text: "I never realized how much money I was wasting on unnecessary expenses until I started using Cyntch.",
      author: "@Aryan",
    },
  ];
