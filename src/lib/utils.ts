import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export const services = [
    {
      id: 1,
      title: 'AI & ML Solutions',
      image: '/rectangle-8.png',
      icon: '/group-2.png',
      iconAlt: 'Group',
      col_id: 1,
    },
    {
      id: 2,
      title: 'Data Engineering',
      image: '/dataEng.svg',
      icon: '/ri-apps-2-ai-line.svg',
      iconAlt: 'Ri apps ai line',
      col_id: 2,
    },
    {
      id: 3,
      title: 'Blockchain Services',
      image: '/rectangle-10.png',
      icon: '/eos-icons-blockchain.svg',
      iconAlt: 'Eos icons blockchain',
      col_id: 3,
    },
    {
      id: 4,
      title: 'Software & Web Development',
      image: '/rectangle-20.png',
      icon: '/eos-icons-service-outlined.svg',
      iconAlt: 'Eos icons service',
      col_id: 1,
    },
    {
      id: 5,
      title: 'Consulting & Custom Development',
      image: '/consultCustom.svg',
      icon: '/hugeicons-blockchain-02.svg',
      iconAlt: 'Hugeicons blockchain',
      col_id: 2,
    },
    {
      id: 6,
      title: 'Managed Services',
      image: '/rectangle-22.png',
      icon: '/carbon-service-id.svg',
      iconAlt: 'Carbon service id',
      col_id: 3,
    },
  ]