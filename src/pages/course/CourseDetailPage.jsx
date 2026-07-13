import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { Star, ChevronDown, Check, Play, Clock, Globe, Award, HelpCircle, ArrowLeft } from "lucide-react";

// Master database of all courses mapped to IDs 1 to 16
const coursesDb = {
  // Trending Courses (1-8)
  1: {
    title: "The Complete 2026 Web Development Bootcamp",
    subtitle: "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps",
    instructor: "Dr. Angela Yu",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "298,340 ratings",
    students: "1,204,502 students",
    price: "₹3,499.00",
    lastUpdated: "January 2026",
    language: "English",
    duration: "65.5 hours",
    lectures: "380 lectures",
    level: "All Levels",
    description: "Welcome to the Complete Web Development Bootcamp, the only course you need to learn to code and become a full-stack web developer. With over 150,000 ratings and a 4.8 average, my Web Development course is one of the HIGHEST RATED courses in history!",
    learnItems: [
      "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
      "Learn the latest technologies, including Javascript, React, Node.js, Express, and MongoDB.",
      "Master frontend development with HTML5, CSS3, Flexbox, Grid, and Tailwind CSS.",
      "Develop secure, scalable backend applications and APIs from scratch."
    ]
  },
  2: {
    title: "Machine Learning A-Z: AI, Python & R in Data Science",
    subtitle: "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
    instructor: "Kirill Eremenko, Hadelin de Ponteves",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    ratingsCount: "175,402 ratings",
    students: "950,432 students",
    price: "₹3,199.00",
    lastUpdated: "December 2025",
    language: "English",
    duration: "44.5 hours",
    lectures: "280 lectures",
    level: "Beginner to Intermediate",
    description: "Interested in the field of Machine Learning? Then this course is for you! Designed by two professional Data Scientists, this course covers all elements of Regression, Classification, Clustering, NLP, and Deep Learning.",
    learnItems: [
      "Master Machine Learning on Python & R.",
      "Have a great intuition of many Machine Learning models.",
      "Make accurate predictions and build robust models.",
      "Use Machine Learning for personal purpose or business decisions."
    ]
  },
  3: {
    title: "Ultimate AWS Certified Solutions Architect Associate",
    subtitle: "Full Course & Practice Exam. Pass the AWS Certified Solutions Architect Associate Certification SAA-C03.",
    instructor: "Stephane Maarek",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "115,201 ratings",
    students: "620,119 students",
    price: "₹2,799.00",
    lastUpdated: "February 2026",
    language: "English",
    duration: "27.5 hours",
    lectures: "190 lectures",
    level: "Intermediate",
    description: "Welcome! I'm Stephane Maarek. I will prepare you to pass the AWS Solutions Architect Associate exam. This course covers all the AWS services and architectures you need to master to ace your exam.",
    learnItems: [
      "Pass the AWS Certified Solutions Architect Associate Exam.",
      "Design serverless and scalable applications on AWS.",
      "Understand all core AWS services: EC2, S3, RDS, Lambda, DynamoDB.",
      "Master AWS security, IAM, networking, and VPC architecture."
    ]
  },
  4: {
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    subtitle: "Master Python by building 100 projects in 100 days. Learn data science, automation, games, and web development.",
    instructor: "Dr. Angela Yu",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "215,904 ratings",
    students: "1,104,210 students",
    price: "₹3,299.00",
    lastUpdated: "January 2026",
    language: "English",
    duration: "56 hours",
    lectures: "410 lectures",
    level: "All Levels",
    description: "Welcome to the 100 Days of Code Bootcamp - the only course you need to learn to code with Python. Through 100 days of interactive projects, you will learn to build games, scraping scripts, web apps, and data analysis models.",
    learnItems: [
      "Master Python programming from absolute scratch.",
      "Build 100 unique Python projects ranging from basic games to complex data scraping scripts.",
      "Learn automation, data science, machine learning, and game development using libraries like Selenium and Pygame.",
      "Understand OOP (Object-Oriented Programming) principles and clean coding practices."
    ]
  },
  5: {
    title: "The Complete Digital Marketing Course - 12 Courses in 1",
    subtitle: "Master Digital Marketing, SEO, Social Media Marketing, Google Analytics, Email Marketing, Facebook Ads, WordPress.",
    instructor: "Rob Percival, Daragh Walsh",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    rating: "4.5",
    ratingsCount: "198,340 ratings",
    students: "850,000 students",
    price: "₹3,299.00",
    lastUpdated: "November 2025",
    language: "English",
    duration: "22.5 hours",
    lectures: "240 lectures",
    level: "All Levels",
    description: "Accelerate your career with this complete, highly interactive marketing training program. Learn SEO, YouTube, Facebook marketing, Google AdWords, and analytics from industry veterans.",
    learnItems: [
      "Grow a business from scratch online.",
      "Make money as an affiliate marketer or freelance consultant.",
      "Get a high-paying job in digital marketing.",
      "Drive high-quality traffic to any website or landing page."
    ]
  },
  6: {
    title: "The Ultimate Drawing Course - Beginner to Advanced",
    subtitle: "Learn to draw landscapes, portraits, figures, and environments like a professional artist.",
    instructor: "Jillian Howell, Remington Markham",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    ratingsCount: "115,402 ratings",
    students: "520,340 students",
    price: "₹2,299.00",
    lastUpdated: "October 2025",
    language: "English",
    duration: "11 hours",
    lectures: "65 lectures",
    level: "Beginner to Advanced",
    description: "Unleash your inner artist! The Ultimate Drawing Course will show you how to create advanced art that will stand out as professional work. This course will take you from absolute scratch to drawing masterfully.",
    learnItems: [
      "Draw realistic portraits, figures, and objects.",
      "Understand perspective, shading, values, and composition.",
      "Use drawing tools like a professional artist.",
      "Build a portfolio of sketches and colored artwork."
    ]
  },
  7: {
    title: "Java Programming Masterclass for Software Developers",
    subtitle: "Learn Java 17/21, Spring Boot, Hibernate, Unit Testing, and OOP to become a professional backend engineer.",
    instructor: "Tim Buchalka · 800,000+ Students, Academy",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    ratingsCount: "185,021 ratings",
    students: "830,000 students",
    price: "₹3,399.00",
    lastUpdated: "January 2026",
    language: "English",
    duration: "80 hours",
    lectures: "520 lectures",
    level: "All Levels",
    description: "Welcome to the premier Java programming bootcamp. This course will teach you modern Java features, object-oriented concepts, functional programming, data structures, and database connectivity.",
    learnItems: [
      "Learn industry-standard Java coding conventions and tools.",
      "Prepare for Oracle Java certification exams.",
      "Develop web services and APIs using Spring Boot.",
      "Understand complex topics like multithreading, concurrency, and performance tuning."
    ]
  },
  8: {
    title: "Product Management 101: Quickstart Guide",
    subtitle: "Learn the fundamentals of product management, product lifecycle, strategy, and release coordination.",
    instructor: "Todd Birzer · 120,000+ Students",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    rating: "4.5",
    ratingsCount: "32,410 ratings",
    students: "128,000 students",
    price: "₹1,999.00",
    lastUpdated: "August 2025",
    language: "English",
    duration: "8.5 hours",
    lectures: "45 lectures",
    level: "Beginner",
    description: "Get started in Product Management! Learn the essential tasks, framework, and strategy that define successful product managers in the tech industry today.",
    learnItems: [
      "Understand the entire product lifecycle from ideation to sunset.",
      "Perform market analysis, customer discovery, and competitor research.",
      "Create product requirements documents (PRDs) and user stories.",
      "Collaborate effectively with engineering, UX/UI, and sales teams."
    ]
  },

  // Recent Searches (9-16)
  9: {
    title: "The Complete JavaScript Course 2026: From Zero to Expert!",
    subtitle: "The modern JavaScript course for everyone! Master JS with projects, challenges, theory, and ES6+ features.",
    instructor: "Jonas Schmedtmann",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "189,432 ratings",
    students: "820,000 students",
    price: "₹3,199.00",
    lastUpdated: "January 2026",
    language: "English",
    duration: "69 hours",
    lectures: "320 lectures",
    level: "All Levels",
    description: "Welcome to the ultimate JavaScript masterclass. Master JS using modern ES6+ paradigms, asynchronous programming, APIs, modules, and deep under-the-hood engine concepts.",
    learnItems: [
      "Master modern JavaScript (ES6 to ES15) from scratch.",
      "Understand complex JavaScript engine details (execution context, scoping, closures).",
      "Learn asynchronous JavaScript (Promises, async/await, AJAX calls).",
      "Build complex object-oriented and module-based architectures."
    ]
  },
  10: {
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    subtitle: "Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, and best practices.",
    instructor: "Maximilian Schwarzmüller",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    ratingsCount: "192,804 ratings",
    students: "900,000 students",
    price: "₹3,499.00",
    lastUpdated: "February 2026",
    language: "English",
    duration: "48.5 hours",
    lectures: "390 lectures",
    level: "All Levels",
    description: "This is the most comprehensive React guide available. Learn the core library, state management with Redux/Zustand, routing with React Router, and backend rendering with Next.js.",
    learnItems: [
      "Build responsive, modern single-page applications (SPAs) with React.",
      "Master state management, side-effects, and context hooks.",
      "Integrate styling using Tailwind CSS and CSS modules.",
      "Understand routing, nested views, loaders, and actions."
    ]
  },
  11: {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    subtitle: "Master Node.js by building a real-world RESTful API and web application (Natours) with security, authentication, and payments.",
    instructor: "Jonas Schmedtmann",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "43,210 ratings",
    students: "190,000 students",
    price: "₹3,299.00",
    lastUpdated: "December 2025",
    language: "English",
    duration: "42 hours",
    lectures: "220 lectures",
    level: "Intermediate",
    description: "Welcome to the ultimate Node.js bootcamp. Here, you will learn to build secure APIs, perform database modeling with Mongoose, configure Stripe payments, and deploy backend systems.",
    learnItems: [
      "Build robust, production-ready RESTful APIs using Express and Node.js.",
      "Master database modeling, queries, and relations using MongoDB and Mongoose.",
      "Implement JWT authentication, password resets, and route protections.",
      "Process card payments securely using Stripe."
    ]
  },
  12: {
    title: "User Experience Design Essentials - Adobe XD UI UX",
    subtitle: "Use Adobe XD to create stunning, interactive user interfaces and build your design career.",
    instructor: "Daniel Walter Scott",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    ratingsCount: "75,340 ratings",
    students: "220,000 students",
    price: "₹2,799.00",
    lastUpdated: "July 2025",
    language: "English",
    duration: "13 hours",
    lectures: "90 lectures",
    level: "Beginner",
    description: "Learn to design premium web and mobile layouts using Adobe XD. Master wireframing, interactive prototyping, user testing, and developer handoffs.",
    learnItems: [
      "Master Adobe XD UI/UX design workflow.",
      "Build high-fidelity, interactive prototypes and micro-interactions.",
      "Learn wireframing, color theory, grid systems, and typography.",
      "Prepare design specs and assets for developers."
    ]
  },
  13: {
    title: "Figma UI/UX Design Essentials",
    subtitle: "Learn Figma design and prototyping from absolute scratch. Build modern web/app interfaces and landing pages.",
    instructor: "Daniel Walter Scott",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "58,920 ratings",
    students: "170,000 students",
    price: "₹3,199.00",
    lastUpdated: "January 2026",
    language: "English",
    duration: "15.5 hours",
    lectures: "115 lectures",
    level: "Beginner to Advanced",
    description: "Learn Figma like a pro! Design responsive websites, mobile app UI/UX, and component libraries with Auto Layout, Components, and Variables.",
    learnItems: [
      "Master Figma's interface, tools, and vector operations.",
      "Design complex layouts using Auto Layout, constraints, and grids.",
      "Create scalable design systems with reusable components and variants.",
      "Build lifelike interactive prototypes with Smart Animate."
    ]
  },
  14: {
    title: "The Complete SQL Bootcamp: Go from Zero to Hero",
    subtitle: "Learn SQL from scratch, run complex queries, manage databases, and analyze data like a professional.",
    instructor: "Jose Portilla",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "165,402 ratings",
    students: "740,000 students",
    price: "₹2,999.00",
    lastUpdated: "November 2025",
    language: "English",
    duration: "9 hours",
    lectures: "85 lectures",
    level: "All Levels",
    description: "Welcome to the best SQL course on the web! Learn SQL commands, JOINs, groupings, subqueries, and table creation with PostgreSQL.",
    learnItems: [
      "Write complex SQL queries to extract data from databases.",
      "Master joins, aggregate functions, filtering, and groupings.",
      "Create tables, databases, and insert records.",
      "Understand database optimization and database architectures."
    ]
  },
  15: {
    title: "Next.js 15 & React - The Complete Guide",
    subtitle: "Build production-ready React apps with Next.js 15. Master App Router, Server Components, SSR, and API routes.",
    instructor: "Maximilian Schwarzmüller",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    ratingsCount: "23,120 ratings",
    students: "125,000 students",
    price: "₹3,299.00",
    lastUpdated: "February 2026",
    language: "English",
    duration: "30.5 hours",
    lectures: "185 lectures",
    level: "Advanced",
    description: "Master React frameworks with Next.js. Learn file-based routing, server actions, metadata optimization, image component tuning, and server-side operations.",
    learnItems: [
      "Master Next.js 15 App Router structure and nested routing.",
      "Build highly performant server-side rendered (SSR) applications.",
      "Implement server-side database actions and secure API endpoints.",
      "Optimize SEO, image loading, static site generation, and pre-rendering."
    ]
  },
  16: {
    title: "CSS - The Complete Guide 2026 (incl. Flexbox, Grid & Sass)",
    subtitle: "Master CSS, Flexbox, CSS Grid, animations, variables, transitions, and advanced layouts to design beautiful web sites.",
    instructor: "Maximilian Schwarzmüller",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "92,804 ratings",
    students: "310,000 students",
    price: "₹2,599.00",
    lastUpdated: "September 2025",
    language: "English",
    duration: "23 hours",
    lectures: "170 lectures",
    level: "All Levels",
    description: "Master writing modern, maintainable CSS. Learn CSS Grid, Flexbox, animations, media queries, CSS variables, preprocessors like Sass, and responsive layouts.",
    learnItems: [
      "Master basic to advanced CSS properties, layouts, and structures.",
      "Understand Flexbox and CSS Grid layouts in-depth.",
      "Create beautiful micro-interactions, responsive menus, and visual transitions.",
      "Organize styles using CSS variables and modern layout paradigms."
    ]
  }
};

// Curriculum curriculum data
const curriculumData = [
  {
    title: "Section 1: Course Introduction & Getting Started",
    lectures: "5 lectures • 32m",
    items: [
      "Welcome to the Course! (05:24)",
      "How to get the most out of the course (08:12)",
      "Setting up your development tools (11:45)",
      "Troubleshooting common setup issues (04:10)",
      "Quiz: Introduction & Fundamentals"
    ]
  },
  {
    title: "Section 2: Deep Dive into Core Concepts",
    lectures: "8 lectures • 1h 15m",
    items: [
      "Understanding Core Architecture (12:30)",
      "Hands-on Project Part 1 (18:45)",
      "Mastering Variables and Logic structures (14:10)",
      "Asynchronous patterns and listeners (15:20)",
      "Code challenge: Build your first functional prototype"
    ]
  },
  {
    title: "Section 3: Advanced Workflows and Production Features",
    lectures: "12 lectures • 2h 45m",
    items: [
      "Security best practices and validation (22:15)",
      "State management & component interactions (25:40)",
      "API integrations & data modeling (28:10)",
      "Performance optimization & image loading (18:40)",
      "Final review: Deploying to live server"
    ]
  }
];

function CourseDetailPage() {
  const { id } = useParams();
  const course = coursesDb[id] || coursesDb[1]; // fallback to course 1 if not found
  const [activeSection, setActiveSection] = React.useState(0);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? -1 : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Dark Slate Hero Banner */}
      <div className="bg-slate-900 text-white py-16 px-6 sm:px-12 lg:px-16 border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl space-y-4">
            <span className="inline-flex items-center justify-center rounded-md bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-sm">
              Bestseller
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white leading-tight">
              {course.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl">
              {course.subtitle}
            </p>
            
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-2 text-xs sm:text-sm">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="size-4 fill-current" />
                <span className="font-bold text-white">{course.rating}</span>
              </div>
              <span className="text-slate-400 underline">{course.ratingsCount}</span>
              <span className="text-slate-400">{course.students}</span>
            </div>
            
            <div className="pt-2 text-xs sm:text-sm text-slate-400 flex flex-wrap gap-x-6 gap-y-1.5">
              <p>Created by <span className="text-primary hover:underline font-semibold cursor-pointer">{course.instructor}</span></p>
              <p>Last updated {course.lastUpdated}</p>
              <div className="flex items-center gap-1.5">
                <Globe className="size-4" />
                <span>{course.language}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details and Purchase Sidebar Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What you'll learn card */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-6">
                What you'll learn
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.learnItems.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Check className="size-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Curriculum Accordion */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-6">
                Course content
              </h2>
              <div className="space-y-3">
                {curriculumData.map((section, idx) => {
                  const isOpen = activeSection === idx;
                  return (
                    <div key={idx} className="border border-slate-200/60 rounded-2xl overflow-hidden transition-all duration-200 bg-white">
                      <button
                        onClick={() => toggleSection(idx)}
                        className="w-full flex items-center justify-between p-5 bg-slate-50/50 hover:bg-slate-50 transition-colors text-left cursor-pointer"
                      >
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-slate-900">{section.title}</h3>
                          <p className="text-xs text-slate-400 mt-1">{section.lectures}</p>
                        </div>
                        <ChevronDown className={`size-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] border-t border-slate-100" : "max-h-0"}`}>
                        <div className="p-5 space-y-4 bg-white">
                          {section.items.map((lecture, lIdx) => (
                            <div key={lIdx} className="flex items-center justify-between text-xs sm:text-sm text-slate-600">
                              <div className="flex items-center gap-3">
                                <Play className="size-4 text-slate-400 flex-shrink-0" />
                                <span className="hover:text-primary transition-colors cursor-pointer">{lecture}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Requirements & Description */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-4">
                  Requirements
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 leading-relaxed">
                  <li>No prior knowledge required. Absolute beginners are welcome.</li>
                  <li>A computer (Windows, Mac, or Linux) with an internet connection.</li>
                  <li>All software, packages, and code assets will be provided in the course downloads.</li>
                </ul>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-4">
                  Description
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {course.description}
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-4">
                  Join a community of over a million successful students worldwide. With a 30-day money-back guarantee, you can enroll completely risk-free and begin upgrading your skills today!
                </p>
              </div>
            </div>

            {/* Instructor Bio */}
            <div className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-6">
                Instructor
              </h2>
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" 
                  alt={course.instructor}
                  className="size-20 rounded-full object-cover border-2 border-slate-100"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 underline decoration-primary decoration-2 cursor-pointer">
                    {course.instructor}
                  </h3>
                  <p className="text-xs text-slate-400">Senior Industry Expert & Educator</p>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Known for clear explanations, practical code-alongs, and real-world project portfolios. Helping thousands of learners upskill and land roles at tech companies globally.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column Sticky Purchase Card */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-md sticky top-6">
              <div className="relative aspect-video">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                  <span className="size-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                    <Play className="size-6 text-slate-900 fill-current translate-x-0.5" />
                  </span>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-slate-900">{course.price}</span>
                  <span className="text-sm text-slate-400 line-through">₹8,499.00</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">60% OFF</span>
                </div>

                <div className="space-y-3">
                  <button className="w-full py-3.5 bg-primary text-white font-bold rounded-2xl hover:bg-primary/95 transition-colors active:scale-[0.98] shadow-[0_4px_12px_rgba(37,99,235,0.2)] cursor-pointer text-sm tracking-wide">
                    Buy now
                  </button>
                  <button className="w-full py-3.5 border border-slate-200 bg-white text-slate-700 font-bold rounded-2xl hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98] transition-colors cursor-pointer text-sm">
                    Add to cart
                  </button>
                </div>

                <p className="text-center text-[11px] text-slate-400">
                  30-Day Money-Back Guarantee • Lifetime Access
                </p>

                <div className="border-t border-slate-100 pt-6 space-y-3.5">
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">This course includes:</h4>
                  
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                    <Clock className="size-4 text-slate-400 flex-shrink-0" />
                    <span>{course.duration} on-demand video</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                    <Play className="size-4 text-slate-400 flex-shrink-0" />
                    <span>{course.lectures} downloadable lectures</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                    <Award className="size-4 text-slate-400 flex-shrink-0" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                    <HelpCircle className="size-4 text-slate-400 flex-shrink-0" />
                    <span>Full lifetime access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CourseDetailPage;
