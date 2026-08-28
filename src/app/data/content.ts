export interface Project {
  id: string;
  index: string;
  name: string;
  product: string;
  year: string;
  role: string;
  stack: string[];
  cover: string;
  images: string[];
  summary: string;
  body: string[];
  highlights: string[];
}

export const profile = {
  name: 'Swadeep Singh',
  mark: 'SS',
  title: 'Software engineer',
  location: 'New Delhi, India',
  phone: '+91 8851249134',
  phoneHref: 'tel:+918851249134',
  email: 'swadeepskb@gmail.com',
  emailHref: 'mailto:swadeepskb@gmail.com',
  linkedinLabel: 'linkedin.com/in/swadeep-singh-skb',
  linkedin: 'https://www.linkedin.com/in/swadeep-singh-skb',
  githubLabel: 'github.com/developerSWADEEP',
  github: 'https://github.com/developerSWADEEP',
  started: 'January 2022',
  startedDate: new Date(2022, 0, 1),
  lede:
    'I build mobile products that have to survive real use — marketplaces, delivery, hiring, and the internal tools sitting behind them. Flutter and native Android for the client. Node, Spring Boot, or Django when the server has to keep up.',
};

export function tenureLabel(from: Date, to = new Date()): string {
  const months =
    (to.getFullYear() - from.getFullYear()) * 12 +
    (to.getMonth() - from.getMonth());
  const years = Math.floor(months / 12);
  const rem = months % 12;
  if (rem === 0) return `${years}+ years`;
  return `${years} yrs ${rem} mos`;
}

export const projects: Project[] = [
  {
    id: 'easyfare',
    index: '01',
    name: 'B2B Taxi Market',
    product: 'Easy Fare Taxi',
    year: '2026',
    role: 'Mobile · marketplace',
    stack: ['Flutter', 'Node.js', 'PostgreSQL', 'Google Maps', 'Firebase', 'Payments'],
    cover: 'projects/easyfare-3.png',
    images: [
      'projects/easyfare-1.png',
      'projects/easyfare-3.png',
      'projects/easyfare-2.png',
      'projects/easyfare-5.png',
      'projects/easyfare-4.png',
    ],
    summary:
      'A B2B marketplace for travel agents, fleet owners, and drivers — not a passenger cab app.',
    body: [
      'Easy Fare Taxi sits in the gap WhatsApp groups still occupy: intercity bookings, spare vehicles, and commission that used to live in screenshots. Operators browse live demand, post their own trips, quote a price or take a fixed fare, and settle the split in the same thread.',
      'The operator app is built around a market feed, posted and received bookings, assignment chat, and a profile that actually runs a small fleet — drivers, vehicles, subscriptions, and payouts.',
    ],
    highlights: [
      'Market feed for bookings and free vehicles, with search, filters, and route alerts',
      'Fixed fare with commission split, or a “quote best price” bid on open trips',
      'One-way and round-trip cards, trip notes, and extra requirements on every lead',
      'Posted / received bookings with confirmed, secured, and assigned states',
      'In-app chat for assignment and payment updates, plus a help line from every screen',
      'Fleet profile: drivers, vehicles, subscriptions, payment methods, and network',
    ],
  },
  {
    id: 'zofanso',
    index: '02',
    name: 'Zofanso.com',
    product: 'Food & grocery delivery',
    year: '2024',
    role: 'Mobile · consumer',
    stack: ['Flutter', 'Firebase', 'Google Maps', 'Razorpay', 'Push notifications'],
    cover: 'projects/zofanso-4.png',
    images: [
      'projects/zofanso-1.png',
      'projects/zofanso-3.png',
      'projects/zofanso-4.png',
      'projects/zofanso-2.png',
    ],
    summary:
      'One app for nearby restaurants and grocery essentials — location first, then order, track, and pay.',
    body: [
      'Zofanso (by Safemaxx Deliv) merges food and kirana into a single delivery surface: pick a drop-off, search stores and dishes, work through category grids, and check out with UPI, cards, wallets, or cash on delivery.',
      'The product work covered onboarding on the map, scheduled orders, live tracking, an in-app wallet for instant refunds, and the usual cart / favourites / orders shell. It is one of several live apps I have shipped — government, travel, logistics, and retail sit on the same desk.',
    ],
    highlights: [
      'Current-location and saved-address onboarding on Google Maps',
      'Restaurant menus and grocery categories in the same home, with offers and search',
      'Order scheduling, live tracking, and support-side order edits',
      'Razorpay, Google Pay, Paytm, COD, and a wallet for cancellation refunds',
      'Push notifications across order states, plus Play Store release',
    ],
  },
  {
    id: 'rozgar',
    index: '03',
    name: 'Rozgar.com',
    product: 'Job portal',
    year: '2023',
    role: 'Mobile · marketplace',
    stack: ['Flutter', 'REST APIs', 'Firebase', 'Android', 'iOS'],
    cover: 'projects/rozgar-4.png',
    images: [
      'projects/rozgar-1.png',
      'projects/rozgar-2.png',
      'projects/rozgar-3.png',
      'projects/rozgar-4.png',
    ],
    summary:
      'India’s job portal — search, verified listings, company directories, and a feed of roles that actually match.',
    body: [
      'Rozgar.com is built for both sides of hiring: candidates looking for a fit, and recruiters posting volume. The app work sat on search (title, skills, city, salary), a recommended-jobs home, company discovery with ratings, and listing cards that carry verification, openings, and employment type without turning into noise.',
      'Premium and featured jobs, profile completion, and filters that have to stay honest when the catalogue is in the lakhs — not a brochure, a working board.',
    ],
    highlights: [
      'Job search with skill, location, and salary filters, plus a dedicated company search',
      'Recommended jobs from profile signals, with verified and premium badges',
      'Company grid with ratings, industry tags, and a path into open roles',
      'Candidate home: profile completion, connects, and top-company hiring strips',
      'Listing cards built for scan speed — title, firm, skills, experience, openings',
    ],
  },
  {
    id: 'hrms',
    index: '04',
    name: 'HRMS Portal',
    product: 'Employee HR',
    year: '2023',
    role: 'Mobile · internal',
    stack: ['Flutter', 'REST APIs', 'MySQL', 'Firebase'],
    cover: 'projects/hrms-2.png',
    images: [
      'projects/hrms-2.png',
      'projects/hrms-1.png',
      'projects/hrms-3.png',
      'projects/hrms-4.png',
    ],
    summary:
      'Day-to-day HR for employees — attendance, leave, and the holiday calendar, without a trip to the HR desk.',
    body: [
      'The HRMS app is the employee face of a workplace system: punch status on a dashboard, leave requests with a calendar, and a holiday list that leads with the next day off. Categories stay visible — gazetted, fixed, restricted — so people know what they can actually take.',
      'The work was less about a pretty dashboard and more about the flows HR gets asked about every Monday: am I marked present, can I apply leave, when is the next holiday.',
    ],
    highlights: [
      'Attendance dashboard with present / absent state and a monthly calendar',
      'Leave request with type, date range, and a reason field that actually submits',
      'Holiday list with a featured “next holiday” card and typed badges',
      'Employee self-serve for the payroll-adjacent questions that clog inboxes',
    ],
  },
];

export const moreWork = [
  { name: 'MoRTH', note: 'Ministry of Road Transport & Highways, Govt. of India' },
  { name: 'Grozee', note: 'Grocery commerce' },
  { name: 'Travel for Pennies', note: 'US — flights, hotels, car rentals' },
  { name: 'Resonance Frequency', note: 'Japan-based application' },
  { name: 'ERP suites', note: 'Internal operations' },
  { name: 'Real estate apps', note: 'Listing and enquiry products' },
  { name: 'Riyo Business', note: 'Logistics family — Business, Suraksha, Parivaar' },
  { name: 'Rhope', note: 'Consumer product' },
  { name: 'Jewellers Pro', note: 'Trade tool' },
  { name: 'In-app purchases', note: 'Android Play Billing & App Store' },
];

export const skillGroups = [
  {
    label: 'Language',
    items: ['Java', 'Dart', 'Kotlin', 'C++', 'JavaScript'],
  },
  {
    label: 'Frontend',
    items: ['Flutter', 'Android', 'iOS', 'Angular', 'React'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Spring Boot', 'Django'],
  },
  {
    label: 'Database',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Hive'],
  },
  {
    label: 'DevOps',
    items: [
      'Azure',
      'Docker',
      'Git',
      'Hostinger',
      'Render',
      'Netlify',
      'CI/CD pipelines',
      'Google Play Store',
      'Apple App Store',
    ],
  },
  {
    label: 'Tools',
    items: [
      'Payment gateways',
      'Postman',
      'Firebase',
      'Push notifications',
      'Google Maps',
    ],
  },
  {
    label: 'Architecture',
    items: ['MVC', 'MVVM', 'MVP'],
  },
];
