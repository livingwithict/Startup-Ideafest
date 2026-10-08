import type { IconName } from "../components/icons";

export const event = {
  name: "Startup & Idea Fest 2026",
  short: "Startup & Idea Fest",
  tagline: "Where ideas meet technology.",
  lead: "Nepal's largest startup and innovation festival. 150+ stalls, an AI and space conference, and a hands-on aerospace camp.",
  dates: "21-22 November 2026",
  datesBs: "Mangsir 4-5, 2083",
  venue: "Anupam Foodland",
  place: "Battisputali, Kathmandu",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Anupam+Foodland+Battisputali+Kathmandu",
  youtubeId: "_DTovidiPpk",
  registerUrl: "https://www.startupnepal.org",
};

export const stats = [
  { value: "150+", label: "Stalls" },
  { value: "15K+", label: "Visitors expected" },
  { value: "5+", label: "Parallel events" },
  { value: "10+", label: "Associated partners" },
] as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/exhibitors", label: "Exhibitors" },
  { href: "/past-events", label: "Past Events" },
  { href: "/news", label: "News & Media" },
  { href: "/contact", label: "Contact" },
];

/** `logo` is a real file in /public; entries without one render a generated monogram until logos are supplied. */
export type Partner = { name: string; mark: string; logo?: string };
export const organizers: Partner[] = [
  { name: "Living with ICT", mark: "LwICT", logo: "/logo/LWICT.png" },
  { name: "ICT Foundation Nepal", mark: "IFN", logo: "/logo/logo.png" },
  { name: "The Squad of ChangeMakers", mark: "TSCM", logo: "/logo/tscm.png" },
];
export const partners: { role: string; items: Partner[] }[] = [
  { role: "Cloud partner", items: [{ name: "Silver Lining", mark: "SL", logo: "/logo/silver%20lining.jpg" }] },
  { role: "Technology partner", items: [{ name: "Growphase Labs", mark: "GL", logo: "/logo/growphaselabs.jpg" }] },
  { role: "Event managed by", items: [{ name: "Global Spark", mark: "GS", logo: "/logo/globalSpark-main.svg" }] },
  // { role: "Supporting partners", items: [{ name: "Leapfrog Connect", mark: "LC", logo: "/logo/leapfrog.webp" }, { name: "InternSathi", mark: "IS", logo: "/logo/internsathi-dark.png" }] },
];

export const segments: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Startup Exhibition",
    body: "150+ startups and innovative products from all seven provinces, open to anyone walking the venue.",
    icon: "Storefront",
  },
  {
    title: "AI & Space Conference",
    body: "A one-day, two-hour conference where experts discuss the future of AI and space. Free to attend.",
    icon: "Microphone",
  },
  {
    title: "STEAM, Astronomy & Aerospace Camp",
    body: "Hands-on workshops for about 100 students from 20 schools and colleges.",
    icon: "RocketLaunch",
  },
];

export const objectives: { title: string; body: string; icon: IconName }[] = [
  { title: "Promote innovation", body: "Encourage young innovators to bring real-world solutions.", icon: "Lightbulb" },
  { title: "Connect the ecosystem", body: "Bridge startups, investors, academia, and policymakers.", icon: "Handshake" },
  { title: "Recognize provincial talent", body: "Highlight the best startups from each province for national recognition.", icon: "Medal" },
  { title: "Support digital transformation", body: "Strengthen Nepal's digital economy through tech-driven startups.", icon: "Cpu" },
  { title: "Create learning opportunities", body: "Offer bootcamps, mentorship, and expert sessions for startups.", icon: "GraduationCap" },
];

export const eventHighlights: { text: string; icon: IconName }[] = [
  { text: "150+ startups and innovative products", icon: "Storefront" },
  { text: "Aerospace and rocket showcase", icon: "Rocket" },
  { text: "Drone and robotics demos, including competitions", icon: "Drone" },
  { text: "Workshops and job fair opportunities", icon: "Briefcase" },
  { text: "Idea pitching and product demos after the fest", icon: "Presentation" },
  { text: "Pre-fest mentorship and bootcamp sessions", icon: "GraduationCap" },
  { text: "Investor and startup networking sessions", icon: "Handshake" },
  { text: "Top startups recognized at ICT Award 2026", icon: "Trophy" },
  { text: "Media coverage across TV, print, and digital", icon: "Newspaper" },
];

export const conferenceTopics: { text: string; icon: IconName }[] = [
  { text: "Building and operating data centers in space", icon: "Database" },
  { text: "Artificial Intelligence in space exploration", icon: "Brain" },
  { text: "AI-assisted spacecraft and mission operations", icon: "Robot" },
  { text: "Future applications of space-based computing", icon: "Cpu" },
  { text: "Nepal's aerospace and space-tech opportunities and challenges", icon: "Planet" },
];

export const workshops: { icon: IconName; title: string; body: string }[] = [
  { icon: "AirplaneTilt", title: "RC Aircraft", body: "Build and fly a remote-controlled fixed-wing aircraft." },
  { icon: "Broadcast", title: "FPV Drone", body: "Fly first-person-view through a live video feed." },
  { icon: "Binoculars", title: "Astronomy", body: "Observe the night sky and learn how telescopes work." },
  { icon: "Robot", title: "Advanced Robotics", body: "Design and program a working robotics system." },
  { icon: "Planet", title: "Nano Satellite", body: "Get hands-on with small-satellite design basics." },
];

export const highlights: { label: string; icon: IconName }[] = [
  { label: "Startup Exhibition", icon: "Storefront" },
  { label: "AI & Space Conference", icon: "Microphone" },
  { label: "STEAM Camp", icon: "Flask" },
  { label: "Mock Interview", icon: "ChatsCircle" },
  { label: "Aerospace Workshops", icon: "RocketLaunch" },
  { label: "Astronomy", icon: "Binoculars" },
  { label: "Robotics", icon: "Robot" },
  { label: "RC Aircraft", icon: "AirplaneTilt" },
  { label: "FPV Drones", icon: "Broadcast" },
  { label: "UAVs", icon: "Drone" },
  { label: "Satellites", icon: "Planet" },
  { label: "Rockets", icon: "Rocket" },
  { label: "Telescopes", icon: "Star" },
  { label: "IoT", icon: "Cpu" },
  { label: "Technology Demonstrations", icon: "Presentation" },
  { label: "On-Spot Games", icon: "GameController" },
];

export const exhibitorGroups: { title: string; icon: IconName }[] = [
  { title: "Semi-Finalists of Startup ICT Award 2026", icon: "Rocket" },
  { title: "Semi-Finalists of Product ICT Award 2026", icon: "Lightbulb" },
  { title: "Semi-Finalists of Rising Star Innovation ICT Award 2026", icon: "Star" },
  { title: "Semi-Finalists of Social Innovation ICT Award 2026", icon: "UsersThree" },
  { title: "Community Partners of ICT Award 2026", icon: "Handshake" },
  { title: "Industry Stalls", icon: "Storefront" },
];

export const showcase: { label: string; icon: IconName }[] = [
  { label: "Heavy-lift drones", icon: "Drone" },
  { label: "Agricultural drones", icon: "Drone" },
  { label: "FPV drones", icon: "Broadcast" },
  { label: "Fixed-wing UAVs", icon: "AirplaneTilt" },
  { label: "Robotics systems", icon: "Robot" },
  { label: "Satellites", icon: "Planet" },
  { label: "Rockets", icon: "Rocket" },
  { label: "Telescopes", icon: "Binoculars" },
  { label: "IoT devices", icon: "Cpu" },
];

export const impact = [
  { value: "750+", label: "startups showcased" },
  { value: "1,200+", label: "innovative projects" },
  { value: "7", label: "provinces represented" },
  { value: "2021", label: "running since" },
] as const;

export const pastEvents = [
  { year: "2025", title: "Sunway Startup & Idea Fest 2025", detail: "Kartik 27-28, 2082", note: "Anupam Foodland, Battisputali, Kathmandu" },
  { year: "2024", title: "Techsprie presents Startup & Idea Fest 2024" },
  { year: "2023", title: "Startup & Idea Fest 2023" },
  { year: "2022", title: "Startup & Idea Fest 2022", note: "Held across all 7 provinces" },
  { year: "2021", title: "Startup & Idea Fest 2021", note: "The first edition" },
];

export const contact = {
  org: "I C Tech Media Pvt. Ltd.",
  address: "Sankhmul, Kathmandu-31, Nepal",
  emails: ["admin@ictaward.org", "nomination@ictaward.org"],
  phones: ["+977 01-5315322", "+977 9851141348", "+977 9801263601", "+977 9801263604", "+977 9702151855"],
  webs: ["www.ictaward.org", "www.startupnepal.org"],
};

export const lwict =
  "Living with ICT (LwICT) is a prominent tech media organization and digital initiative in Nepal. Living with ICT and its flagship event ICT Award contributes significantly to the growth and recognition of Nepal's ICT sector, fostering a culture of innovation and excellence in technology-driven initiatives.";
