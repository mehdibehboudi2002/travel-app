import person1 from "../public/images/person-1.png";
import person2 from "../public/images/person-2.png";
import person3 from "../public/images/person-3.png";
import person4 from "../public/images/person-4.png";
import map from "../public/images/map.svg";
import calender from "../public/images/calendar.svg";
import tech from "../public/images/tech.svg";
import location from "../public/images/location.svg";
import facebook from "../public/images/facebook.svg";
import instagram from "../public/images/instagram.svg";
import twitter from "../public/images/twitter.svg";
import youtube from "../public/images/youtube.svg";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/about-Hilink", key: "how_hilink_work", label: "How Hilink Work?" },
  { href: "/services", key: "services", label: "Services" },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

export const SERVICES = {
  title: 'Our Services',
  sections: [
    {
      title: "Offline Maps",
      description:
        "Access maps without an internet connection, perfect for traveling in areas with limited connectivity. Download your maps in advance and navigate seamlessly, even when offline.",
    },
    {
      title: "Real-Time Navigation",
      description:
        "Get step-by-step navigation with real-time traffic updates, ensuring you reach your destination efficiently. Plan your routes with live traffic data and alternative paths.",
    },
    {
      title: "Custom Travel Guides",
      description:
        "Create personalized travel guides for specific destinations. Tailor your itinerary to your preferences and have all your travel plans in one easy-to-access place.",
    },
  ],
};

// CAMP SECTION
export const PEOPLE_URL = [person1, person2, person3, person4];

export const EVERY_MAP = [
  {
    id: "Putuk Truno Camp",
    backgroundImage: "/images/img-1.png",
    title: "Putuk Truno Camp",
    subtitle: "Prigen, Pasuruan",
    peopleJoined: "50+ Joined",
  },
  {
    id: "Mountain View Camp",
    backgroundImage: "/images/img-2.png",
    title: "Mountain View Camp",
    subtitle: "Somewhere in the Wilderness",
    peopleJoined: "70+ Joined",
  },
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: map,
    variant: "#30AF5B",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: calender,
    variant: "#ef4444",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: tech,
    variant: "#3b82f6",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: location,
    variant: "#ff863b",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = {
  title: "Learn More",
  links: [
    { label: "About Hilink", href: "/about-Hilink" },
    { label: "Press Releases", href: "/press-releases" },
    { label: "Environment", href: "/environment" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@gmail.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [facebook, instagram, twitter, youtube],
};

//PRESS-RELEASES
export const ABOUT_HILINK = {
  title: "About Hilink",
  sections: [
    {
      description:
        "At Hilink, we are dedicated to revolutionizing the way people experience the outdoors through cutting-edge technology. Our platform provides seamless access to essential tools like offline maps, real-time navigation, and location-based services to empower adventurers and travelers. From casual explorers to outdoor enthusiasts, Hilink is designed to enhance every journey, ensuring you stay connected, informed, and prepared, no matter where the road leads. Our mission is to blend technology with adventure, making exploration accessible and safe for everyone.",
    },
  ],
};

export const RELEASES = {
  title: "Our Releases",
  sections: [
    { title: "New Feature Launch: Offline Maps", date: "September 18, 2024" },
    { title: "Partnership with Adventure Tech Co.", date: "August 22, 2024" },
    { title: "Hilink Wins Best Innovation Award", date: "July 15, 2024" },
  ],
};

export const ENVIROMENT_COMMITMENTS = {
  title: "Our Environmental Commitments",
  sections: [
    {
      title: "Reducing Carbon Footprint",
      description:
        "Utilizing green technologies and optimizing energy consumption at Hilink.",
    },
    {
      title: "Nature Conservation",
      description:
        "Preserving natural landscapes and minimizing the impact of hiking activities on the environment.",
    },
    {
      title: "Environmental Projects",
      description:
        "Participating in tree planting projects and trail cleanups.",
    },
    {
      title: "Sustainable Practices",
      description:
        "Encouraging eco-friendly practices among our community of adventurers.",
    },
  ],
};

export const PRIVACY_CONTENT = {
  title: "Privacy Policy",
  sections: [
    {
      title: "1. Information We Collect",
      description:
        "We collect personal data you provide directly, such as your name, email address, and payment information. We also collect information automatically through cookies and other tracking technologies.",
    },
    {
      title: "2. How We Use Your Information",
      description:
        "We use your information to provide services, process payments, improve our offerings, and communicate with you about updates and promotions.",
    },
    {
      title: "3. Data Security",
      description:
        "We take reasonable measures to protect your data from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.",
    },
    {
      title: "4. Your Rights",
      description:
        "You have the right to access, update, or delete your personal information. Please contact us if you wish to exercise any of these rights.",
    },
    {
      title: "5. Contact Us",
      description:
        "If you have any questions about this Privacy Policy, please contact us at privacy@hilink.com.",
    },
  ],
};
