// Main navigation structure for EdukronWebsite
export const navigation = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Overview", href: "/#overview" },
      { label: "Highlights", href: "/#highlights" },
      { label: "Placements", href: "/#placements" },
      { label: "Student Journey", href: "/#student-journey" },
      { label: "Featured Courses", href: "/#featured-courses" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Success Stories", href: "/#success-stories" },
      { label: "Why Choose Us", href: "/#why-choose-us" },
      { label: "Learning Path", href: "/#learning-path" },
      { label: "Mentors", href: "/#mentors" },
      { label: "Demo Sessions", href: "/#demo-sessions" },
      { label: "Upcoming Batches", href: "/#upcoming-batches" },
      { label: "Achievements", href: "/#achievements" },
      { label: "Community", href: "/#community" },
      { label: "FAQs", href: "/#faqs" },
    ],
  },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "Full Stack AI", href: "/courses/full-stack-ai" },
      { label: "Gen AI & Agentic AI", href: "/courses/gen-ai-agentic-ai" },
      { label: "Data Engineering (Azure & AWS)", href: "/courses/data-engineering" },
      { label: "DevOps (Azure & AWS)", href: "/courses/devops" },
      { label: "Quantum Computing", href: "/courses/quantum-computing" },
      { label: "Digital Marketing", href: "/courses/digital-marketing" },
    ],
  },
  {
    label: "Super 40 Batches",
    href: "/super-40-batches",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];
