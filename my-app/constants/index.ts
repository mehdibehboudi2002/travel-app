import person1 from "../public/images/person-1.png";
import person2 from "../public/images/person-2.png";
import person3 from "../public/images/person-3.png";
import person4 from "../public/images/person-4.png";
import camp1 from "../public/images/img-1.png";
import camp2 from "../public/images/img-2.png";
import map from "../public/images/map.svg";
import calender from "../public/images/calendar.svg";
import tech from "../public/images/tech.svg";
import location from "../public/images/location.svg";

// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
    { href: '/', key: 'services', label: 'Services' },
    { href: '/', key: 'pricing ', label: 'Pricing ' },
    { href: '/', key: 'contact_us', label: 'Contact Us' },
  ];
  
  // CAMP SECTION
  export const PEOPLE_URL = [
    person1,
    person2,
    person3,
    person4,
  ];

  export const EVERY_MAP = [
    {
      backgroundImage: camp1,
      title: "Putuk Truno Camp",
      subtitle: "Prigen, Pasuruan",
      peopleJoined: "50+ Joined",
    },
    {
      backgroundImage: camp2,
      title: "Mountain View Camp",
      subtitle: "Somewhere in the Wilderness",
      peopleJoined: "70+ Joined",
    }
  ]
  
  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Real maps can be offline',
      icon: map,
      variant: '#30AF5B',
      description:
        'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
    },
    {
      title: 'Set an adventure schedule',
      icon: calender,
      variant: '#ef4444',
      description:
        "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
    },
    {
      title: 'Technology using augment reality',
      icon: tech,
      variant: '#3b82f6',
      description:
        'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
    },
    {
      title: 'Many new locations every month',
      icon: location,
      variant: '#ff863b',
      description:
        'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About Hilink',
        'Press Releases',
        'Environment',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],
    },
    {
      title: 'Our Community',
      links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'hilink@akinthil.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };
  