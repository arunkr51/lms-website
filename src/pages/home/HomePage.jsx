import * as React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const skillsData = [
  {
    id: 1,
    title: "Learn Generative AI",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Microsoft Excel",
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Cyber Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
  }
];

const trendingCoursesData = [
  {
    id: 1,
    title: "Microsoft Excel - Excel from Beginner to Advanced",
    instructor: "Kyle Pew · 2,000,000+ Students, Office Newb",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "538,395 ratings",
    price: "₹3,289.00"
  },
  {
    id: 2,
    title: "The Complete Full-Stack Web Development Bootcamp",
    instructor: "Dr. Angela Yu, Developer and Lead Instructor",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "472,077 ratings",
    price: "₹3,199.00"
  },
  {
    id: 3,
    title: "Ultimate AWS Certified Solutions Architect Associate 2026",
    instructor: "Stephane Maarek | AWS Certified Cloud...",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "293,232 ratings",
    price: "₹3,469.00"
  },
  {
    id: 4,
    title: "The Complete AI Guide: Learn ChatGPT, Claude & Generative AI",
    instructor: "Julian Melanson, Benza Maman, Leap Year Learning",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    rating: "4.5",
    ratingsCount: "62,058 ratings",
    price: "₹2,559.00"
  },
  {
    id: 5,
    title: "Python for Data Science and Machine Learning Bootcamp",
    instructor: "Jose Portilla · 1,500,000+ Students, Pierian Training",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "198,340 ratings",
    price: "₹3,299.00"
  },
  {
    id: 6,
    title: "The Ultimate Drawing Course - Beginner to Advanced",
    instructor: "Jillian Howell, Remington Markham",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    ratingsCount: "115,402 ratings",
    price: "₹2,299.00"
  },
  {
    id: 7,
    title: "Java Programming Masterclass for Software Developers",
    instructor: "Tim Buchalka · 800,000+ Students, Academy",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    ratingsCount: "185,021 ratings",
    price: "₹3,399.00"
  },
  {
    id: 8,
    title: "Product Management 101: Quickstart Guide",
    instructor: "Todd Birzer · 120,000+ Students",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    rating: "4.5",
    ratingsCount: "32,410 ratings",
    price: "₹1,999.00"
  }
];

const recentSearchesData = [
  {
    id: 9,
    title: "The Complete JavaScript Course 2026: From Zero to Expert!",
    instructor: "Jonas Schmedtmann · 800,000+ Students",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "189,432 ratings",
    price: "₹3,199.00"
  },
  {
    id: 10,
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    instructor: "Maximilian Schwarzmüller · 900,000+ Students",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    ratingsCount: "192,804 ratings",
    price: "₹3,499.00"
  },
  {
    id: 11,
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    instructor: "Jonas Schmedtmann · 150,000+ Students",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "43,210 ratings",
    price: "₹3,299.00"
  },
  {
    id: 12,
    title: "User Experience Design Essentials - Adobe XD UI UX",
    instructor: "Daniel Walter Scott · 200,000+ Students",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    ratingsCount: "75,340 ratings",
    price: "₹2,799.00"
  },
  {
    id: 13,
    title: "Figma UI/UX Design Essentials",
    instructor: "Daniel Walter Scott · 150,000+ Students",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "58,920 ratings",
    price: "₹3,199.00"
  },
  {
    id: 14,
    title: "The Complete SQL Bootcamp: Go from Zero to Hero",
    instructor: "Jose Portilla · 700,000+ Students",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "165,402 ratings",
    price: "₹2,999.00"
  },
  {
    id: 15,
    title: "Next.js 15 & React - The Complete Guide",
    instructor: "Maximilian Schwarzmüller · 120,000+ Students",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    ratingsCount: "23,120 ratings",
    price: "₹3,299.00"
  },
  {
    id: 16,
    title: "CSS - The Complete Guide 2026 (incl. Flexbox, Grid & Sass)",
    instructor: "Maximilian Schwarzmüller · 300,000+ Students",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "92,804 ratings",
    price: "₹2,599.00"
  }
];

function HomePage() {
  const [current, setCurrent] = React.useState(0);
  const [skillsPage, setSkillsPage] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState("right");
  const totalSlides = 3;

  const sectionRef = React.useRef(null);
  const isFirstReveal = React.useRef(true);
  const [hasEntered, setHasEntered] = React.useState(false);

  const trendingRef = React.useRef(null);
  const [trendingEntered, setTrendingEntered] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTrendingEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (trendingRef.current) {
      observer.observe(trendingRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const [trendingPage, setTrendingPage] = React.useState(0);

  const [recentPage, setRecentPage] = React.useState(0);
  const recentRef = React.useRef(null);
  const [recentEntered, setRecentEntered] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRecentEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (recentRef.current) {
      observer.observe(recentRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const changeSkillsPage = (index) => {
    isFirstReveal.current = false;
    if (index > skillsPage) {
      setSlideDirection("right");
    } else if (index < skillsPage) {
      setSlideDirection("left");
    }
    setSkillsPage(index);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="m-0 p-0">
      <Helmet>
        <title>EDUWave | Learn Today, Lead Tomorrow</title>
        <meta name="description" content="Discover interactive lessons, expert tutors, and study tools designed for students of every level at EDUWave." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "EDUWave",
              "url": "https://eduwave.com/"
            }
          `}
        </script>
      </Helmet>
      <div className="relative overflow-x-hidden">
        <div className="relative left-1/2 w-[100dvw] -translate-x-1/2">
          <div className="relative h-[min(70vh,760px)] w-full overflow-hidden bg-slate-950">
            
            {/* Arrow Controls */}
            <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-2 pointer-events-none">
              <button
                onClick={handlePrev}
                className="pointer-events-auto flex items-center justify-center bg-transparent border-none text-white hover:bg-transparent hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white size-16 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="size-8" />
              </button>
              <button
                onClick={handleNext}
                className="pointer-events-auto flex items-center justify-center bg-transparent border-none text-white hover:bg-transparent hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white size-16 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="size-8" />
              </button>
            </div>

            {/* Slides (Fade Layering) */}
            
            {/* Slide 1 */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              current === 0 ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop')" }} />
              <div className="absolute inset-0 bg-slate-950/45" />
              <div className={`relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white transition-all duration-700 delay-100 transform ${
                current === 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/80 font-semibold">Learn today, lead tomorrow</p>
                <h2 className="font-heading text-4xl sm:text-6xl font-normal tracking-tight text-white leading-tight">Skill-Building Courses</h2>
                <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70">Discover interactive lessons, expert tutors, and study tools designed for students of every level.</p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Button size="lg">Browse Courses</Button>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-slate-950 transition-colors duration-200">Start Learning</Button>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              current === 1 ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop')" }} />
              <div className="absolute inset-0 bg-slate-950/45" />
              <div className={`relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white transition-all duration-700 delay-100 transform ${
                current === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/80 font-semibold">Study smarter with expert guidance</p>
                <h2 className="font-heading text-4xl sm:text-6xl font-normal tracking-tight text-white leading-tight">Structured Learning Paths</h2>
                <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70">Choose your pathway, track progress, and build confidence through tailored lessons and assessments.</p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Button size="lg">Explore Paths</Button>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-slate-950 transition-colors duration-200">See Programs</Button>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              current === 2 ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}>
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop')" }} />
              <div className="absolute inset-0 bg-slate-950/45" />
              <div className={`relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white transition-all duration-700 delay-100 transform ${
                current === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}>
                <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.35em] text-white/80 font-semibold">Achieve more with personalized support</p>
                <h2 className="font-heading text-4xl sm:text-6xl font-normal tracking-tight text-white leading-tight">Career-Ready Education</h2>
                <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70">Build real skills with mentor feedback, practice projects, and resources that help you succeed.</p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Button size="lg">Join Today</Button>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-slate-950 transition-colors duration-200">Get Started</Button>
                </div>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center gap-2">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    current === index ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
          </div>
        </div>
      </div>

      <div ref={sectionRef} className="px-10 py-20 sm:px-12 lg:px-16 bg-slate-50/50">
        <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideFromRight {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideFromLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-slide-from-right {
            animation: slideFromRight 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-slide-from-left {
            animation: slideFromLeft 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}</style>
        <div className="mx-auto max-w-7xl px-8 sm:px-10 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[28%_1fr] items-center">
            <div className="space-y-4">
              <h3 className="font-heading text-2xl sm:text-4xl font-normal tracking-tight text-slate-900 leading-tight">
                Master <em>in-demand</em> skills for <strong>career success</strong>
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                Explore expert-led learning paths designed to accelerate your growth and keep you ahead in a rapidly changing world.
              </p>
            </div>

            <div 
              key={skillsPage} 
              className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
                !hasEntered 
                  ? "opacity-0" 
                  : (isFirstReveal.current 
                      ? "animate-fade-in-up" 
                      : (slideDirection === "right" ? "animate-slide-from-right" : "animate-slide-from-left"))
              }`}
            >
              {skillsData.slice(skillsPage, skillsPage + 3).map((skill) => (
                <div 
                  key={skill.id} 
                  className="group relative overflow-hidden rounded-3xl border border-border shadow-sm h-[20rem] cursor-pointer"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" 
                    style={{ backgroundImage: `url('${skill.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="relative z-10 p-6 flex h-full items-end justify-center">
                    <span className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      {skill.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centered Pagination controls below the row */}
          <div className="flex items-center justify-center gap-6 mt-12 w-full">
            <button
              onClick={() => changeSkillsPage(Math.max(0, skillsPage - 1))}
              disabled={skillsPage === 0}
              className="flex size-11 items-center justify-center rounded-full bg-white text-slate-600 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100/50 transition-all duration-200 hover:text-primary hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Previous set of skills"
            >
              <ChevronLeft className="size-5 stroke-[2.5]" />
            </button>
            
            <div className="flex items-center gap-2.5">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => changeSkillsPage(index)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    skillsPage === index ? "w-7 bg-primary" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => changeSkillsPage(Math.min(3, skillsPage + 1))}
              disabled={skillsPage === 3}
              className="flex size-11 items-center justify-center rounded-full bg-white text-slate-600 shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100/50 transition-all duration-200 hover:text-primary hover:shadow-[0_6px_16px_rgba(0,0,0,0.1)] active:scale-95 disabled:opacity-40 disabled:pointer-events-none"
              aria-label="Next set of skills"
            >
              <ChevronRight className="size-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Trending Courses Section */}
      <div ref={trendingRef} className="px-10 py-24 sm:px-12 lg:px-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-8 sm:px-10 lg:px-14">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#1e293b]">
              Trending courses
            </h2>
            
            {/* Carousel navigation controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTrendingPage((prev) => Math.max(0, prev - 1))}
                disabled={trendingPage === 0}
                className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 active:scale-95 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                aria-label="Previous courses"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={() => setTrendingPage((prev) => Math.min(1, prev + 1))}
                disabled={trendingPage === 1}
                className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 active:scale-95 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                aria-label="Next courses"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          <div 
            key={trendingPage}
            className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 transition-all duration-1000 ease-out ${
              trendingEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${trendingEntered ? "animate-fade-in-up" : ""}`}
          >
            {trendingCoursesData.slice(trendingPage * 4, trendingPage * 4 + 4).map((course) => (
              <Link 
                key={course.id}
                to={`/course/${course.id}`}
                className="group w-full flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300/80 cursor-pointer block"
              >
                <div className="relative overflow-hidden aspect-video border-b border-slate-100">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5 space-y-2">
                  <h3 className="font-heading text-sm font-semibold text-slate-900 leading-snug group-hover:text-primary transition-colors line-clamp-2 h-[2.5rem]">
                    {course.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {course.instructor}
                  </p>
                  <div className="flex items-center gap-2 pt-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1b4d3e] bg-[#d2f4ea] px-2 py-0.5 rounded">
                      Bestseller
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-500">
                      <Star className="size-3.5 fill-current" />
                      <span className="text-xs font-bold text-slate-800">{course.rating}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 px-2 py-0.5 border border-slate-200 rounded bg-slate-50">
                      {course.ratingsCount}
                    </span>
                  </div>
                  <div className="text-base font-bold text-slate-950 pt-2 mt-auto border-t border-slate-50">
                    {course.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Based on your recent searches Section */}
      <div ref={recentRef} className="px-10 py-24 sm:px-12 lg:px-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-8 sm:px-10 lg:px-14">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#1e293b]">
              Based on your recent searches
            </h2>
            
            {/* Carousel navigation controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setRecentPage((prev) => Math.max(0, prev - 1))}
                disabled={recentPage === 0}
                className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 active:scale-95 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                aria-label="Previous courses"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={() => setRecentPage((prev) => Math.min(1, prev + 1))}
                disabled={recentPage === 1}
                className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900 active:scale-95 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                aria-label="Next courses"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          <div 
            key={recentPage}
            className={`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 transition-all duration-1000 ease-out ${
              recentEntered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } ${recentEntered ? "animate-fade-in-up" : ""}`}
          >
            {recentSearchesData.slice(recentPage * 4, recentPage * 4 + 4).map((course) => (
              <Link 
                key={course.id}
                to={`/course/${course.id}`}
                className="group w-full flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300/80 cursor-pointer block"
              >
                <div className="relative overflow-hidden aspect-video border-b border-slate-100">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5 space-y-2">
                  <h3 className="font-heading text-sm font-semibold text-slate-900 leading-snug group-hover:text-primary transition-colors line-clamp-2 h-[2.5rem]">
                    {course.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {course.instructor}
                  </p>
                  <div className="flex items-center gap-2 pt-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1b4d3e] bg-[#d2f4ea] px-2 py-0.5 rounded">
                      Bestseller
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-500">
                      <Star className="size-3.5 fill-current" />
                      <span className="text-xs font-bold text-slate-800">{course.rating}</span>
                    </div>
                    <span className="text-[10px] text-slate-500 px-2 py-0.5 border border-slate-200 rounded bg-slate-50">
                      {course.ratingsCount}
                    </span>
                  </div>
                  <div className="text-base font-bold text-slate-950 pt-2 mt-auto border-t border-slate-50">
                    {course.price}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-10 py-24 sm:px-12 lg:px-16 bg-slate-50/50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-8 sm:px-10 lg:px-14">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              See what others are achieving through learning
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
              Real stories from real learners. Discover how expanding your skills can transform your career and life.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-slate-300/80">
              <div className="space-y-4">
                <div className="flex text-amber-400">
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                </div>
                <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  "This platform has completely changed my career path. The GenAI and Web Development courses were hands-on, very comprehensive, and helped me secure my first job as a software developer."
                </blockquote>
              </div>
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" 
                  alt="Aishwarya Nair"
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Aishwarya Nair</h4>
                  <p className="text-xs text-slate-400">Frontend Engineer at TechCorp</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-slate-300/80">
              <div className="space-y-4">
                <div className="flex text-amber-400">
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                </div>
                <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  "As a product manager, understanding Excel and data science was crucial. The structured paths helped me master these tools easily. Highly recommend this to all professionals looking to upskill!"
                </blockquote>
              </div>
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" 
                  alt="Rohan Sharma"
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Rohan Sharma</h4>
                  <p className="text-xs text-slate-400">Senior Product Manager</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-slate-300/80">
              <div className="space-y-4">
                <div className="flex text-amber-400">
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                </div>
                <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  "The AWS Solutions Architect course was the best I've taken. It was very practical and detailed, giving me the knowledge and confidence to clear my certification exam on the first try."
                </blockquote>
              </div>
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" 
                  alt="Priya Patel"
                  className="size-11 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Priya Patel</h4>
                  <p className="text-xs text-slate-400">Cloud Solutions Architect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
