import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Star, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

// Reusing and extending data from homepage
const coursesData = [
  {
    id: 1,
    category: "Business",
    title: "Microsoft Excel - Excel from Beginner to Advanced",
    instructor: "Kyle Pew · 2,000,000+ Students",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "538,395 ratings",
    price: "₹3,289.00"
  },
  {
    id: 2,
    category: "Development",
    title: "The Complete Full-Stack Web Development Bootcamp",
    instructor: "Dr. Angela Yu, Developer and Lead Instructor",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "472,077 ratings",
    price: "₹3,199.00"
  },
  {
    id: 3,
    category: "IT & Software",
    title: "Ultimate AWS Certified Solutions Architect Associate 2026",
    instructor: "Stephane Maarek",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "293,232 ratings",
    price: "₹3,469.00"
  },
  {
    id: 4,
    category: "Development",
    title: "The Complete AI Guide: Learn ChatGPT, Claude & Generative AI",
    instructor: "Julian Melanson",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    rating: "4.5",
    ratingsCount: "62,058 ratings",
    price: "₹2,559.00"
  },
  {
    id: 5,
    category: "Development",
    title: "Python for Data Science and Machine Learning Bootcamp",
    instructor: "Jose Portilla",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "198,340 ratings",
    price: "₹3,299.00"
  },
  {
    id: 6,
    category: "Design",
    title: "The Ultimate Drawing Course - Beginner to Advanced",
    instructor: "Jillian Howell",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    ratingsCount: "115,402 ratings",
    price: "₹2,299.00"
  },
  {
    id: 7,
    category: "Development",
    title: "Java Programming Masterclass for Software Developers",
    instructor: "Tim Buchalka",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    ratingsCount: "185,021 ratings",
    price: "₹3,399.00"
  },
  {
    id: 8,
    category: "Business",
    title: "Product Management 101: Quickstart Guide",
    instructor: "Todd Birzer",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    rating: "4.5",
    ratingsCount: "32,410 ratings",
    price: "₹1,999.00"
  },
  {
    id: 9,
    category: "Development",
    title: "The Complete JavaScript Course 2026: From Zero to Expert!",
    instructor: "Jonas Schmedtmann",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=800&auto=format&fit=crop",
    rating: "4.7",
    ratingsCount: "189,432 ratings",
    price: "₹3,199.00"
  },
  {
    id: 12,
    category: "Design",
    title: "User Experience Design Essentials - Adobe XD UI UX",
    instructor: "Daniel Walter Scott",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
    rating: "4.6",
    ratingsCount: "75,340 ratings",
    price: "₹2,799.00"
  }
];

const categories = ["All", "Development", "Business", "IT & Software", "Design"];

function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = coursesData.filter((course) => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      <Helmet>
        <title>Explore Courses | EDUWave</title>
        <meta name="description" content="Discover thousands of courses from top instructors to help you achieve your personal and professional goals." />
      </Helmet>
      {/* Header Section */}
      <div className="bg-slate-950 px-10 py-24 sm:px-12 lg:px-16 text-center text-white border-b border-slate-800">
        <div className="mx-auto max-w-4xl space-y-6">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Explore Our Courses
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            Discover thousands of courses from top instructors to help you achieve your personal and professional goals.
          </p>
          
          <div className="mx-auto flex max-w-lg items-center gap-2 rounded-full bg-white/10 p-1.5 backdrop-blur-sm border border-white/20 mt-10 transition-all hover:bg-white/15 focus-within:bg-white/20 focus-within:border-white/40">
            <div className="pl-4">
              <Search className="size-5 text-slate-300" />
            </div>
            <input 
              type="text" 
              placeholder="What do you want to learn?"
              className="w-full bg-transparent border-none py-3 px-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="rounded-full px-6 bg-white text-slate-950 hover:bg-slate-200 border-0">Search</Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-10 py-16 sm:px-12 lg:px-16">
        <div className="mx-auto max-w-7xl">
          
          {/* Categories Filter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeCategory === category 
                      ? "bg-slate-900 text-white shadow-md scale-105" 
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <Button variant="outline" className="flex items-center gap-2 rounded-full border-slate-200 h-10 px-5 text-slate-600 hover:bg-slate-100 font-semibold cursor-pointer">
              <Filter className="size-4" />
              More Filters
            </Button>
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredCourses.map((course) => (
                <Link 
                  key={course.id}
                  to={`/course/${course.id}`}
                  className="group w-full flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-slate-300/80 cursor-pointer block"
                >
                  <div className="relative overflow-hidden aspect-video border-b border-slate-100">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex rounded-full bg-black/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                        {course.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-5 space-y-2">
                    <h3 className="font-heading text-sm font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors line-clamp-2 h-[2.5rem]">
                      {course.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
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
                      <span className="text-[10px] font-medium text-slate-500 px-2 py-0.5 border border-slate-200 rounded bg-slate-50">
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
          ) : (
            <div className="py-24 text-center flex flex-col items-center justify-center bg-white rounded-3xl border border-slate-200 border-dashed">
              <div className="rounded-full bg-slate-50 p-6 mb-6">
                <Search className="size-10 text-slate-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No courses found</h3>
              <p className="text-slate-500 max-w-md text-sm leading-relaxed mb-6">
                We couldn't find any courses matching your search <strong className="text-slate-700">"{searchQuery}"</strong> in the <strong className="text-slate-700">{activeCategory}</strong> category. 
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="rounded-full px-6 bg-slate-900 text-white hover:bg-slate-800 cursor-pointer"
              >
                Clear all filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredCourses.length > 0 && (
            <div className="mt-16 flex items-center justify-center gap-2">
              <button className="flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50 transition-colors cursor-pointer">
                <span className="sr-only">Previous</span>
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="flex size-10 items-center justify-center rounded-lg bg-slate-900 text-white font-semibold shadow-md cursor-pointer hover:bg-slate-800 transition-colors">1</button>
              <button className="flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold transition-colors cursor-pointer">2</button>
              <button className="flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold transition-colors cursor-pointer">3</button>
              <span className="flex size-10 items-center justify-center text-slate-400 font-semibold">...</span>
              <button className="flex size-10 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-50 disabled:opacity-50 transition-colors cursor-pointer">
                <span className="sr-only">Next</span>
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
