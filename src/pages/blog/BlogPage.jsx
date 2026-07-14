import * as React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BookOpen, Clock, Calendar, User, ArrowRight, Search, Heart, Share2 } from "lucide-react";

const blogCategories = ["All", "Tech & AI", "Business & Finance", "Design & UX", "Career Advice"];

const featuredPost = {
  id: "featured-1",
  title: "The Future of Generative AI in Software Engineering: 2026 and Beyond",
  excerpt: "Discover how AI-assisted coding tools, agentic workflows, and large language models are reshaping the role of software developers. Learn the core skills required to stay ahead in an AI-augmented industry.",
  category: "Tech & AI",
  date: "July 12, 2026",
  readTime: "8 min read",
  author: {
    name: "Dr. Angela Yu",
    role: "Lead Educator",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
  },
  image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
};

const blogPosts = [
  {
    id: 1,
    title: "Mastering React 19: Action Hooks, Server Components, and Best Practices",
    excerpt: "Dive deep into the newest features of React 19, including the new 'use' hook, action transitions, and server components optimization.",
    category: "Tech & AI",
    date: "July 8, 2026",
    readTime: "6 min read",
    author: {
      name: "Maximilian Schwarzmüller",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "The 10 Core Excel Formulas Every Data Analyst Needs in 2026",
    excerpt: "Stop wasting hours on manual calculations. These advanced Excel formulas will automate your reporting and supercharge your data analysis.",
    category: "Business & Finance",
    date: "July 5, 2026",
    readTime: "5 min read",
    author: {
      name: "Kyle Pew",
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "A Complete Guide to Glassmorphism and Modern UI Design Trends",
    excerpt: "Explore the mechanics of creating beautiful glassmorphism designs with CSS backdrop-filters, custom borders, and gradient shadows.",
    category: "Design & UX",
    date: "June 28, 2026",
    readTime: "4 min read",
    author: {
      name: "Jonas Schmedtmann",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "How to Build a High-Converting Portfolio as a Self-Taught Developer",
    excerpt: "Your portfolio is your resume. Learn how to structure your projects, write compelling descriptions, and showcase your skills to land interviews.",
    category: "Career Advice",
    date: "June 22, 2026",
    readTime: "7 min read",
    author: {
      name: "Dr. Angela Yu",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Understanding AWS Certified Cloud Practitioner Exam: Prep Guide",
    excerpt: "Everything you need to know to pass your AWS Cloud Practitioner certification exam on your first attempt, with free learning resources.",
    category: "Tech & AI",
    date: "June 15, 2026",
    readTime: "8 min read",
    author: {
      name: "Stephane Maarek",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Product Management vs Product Marketing: What's the Difference?",
    excerpt: "While both roles are crucial for a product's success, they require distinct skill sets, methodologies, and deliverables. Let's compare them.",
    category: "Business & Finance",
    date: "June 10, 2026",
    readTime: "6 min read",
    author: {
      name: "Todd Birzer",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=150&auto=format&fit=crop"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  }
];

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20 font-sans">
      <Helmet>
        <title>Blog & Insights | EDUWave</title>
        <meta name="description" content="Read articles, tutorials, and career advice written by world-class educators and industry experts to help you level up your skills." />
      </Helmet>
      
      {/* Premium Hero Banner */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-24 px-6 sm:px-12 lg:px-16 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            EDUWave Insights
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
            Stay ahead with the latest industry insights.
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal">
            Articles, tutorials, and career advice written by world-class educators and industry experts to help you level up your skills.
          </p>

          {/* Search bar inside hero */}
          <div className="mx-auto max-w-md pt-4">
            <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 px-4 py-3 shadow-inner group focus-within:border-primary/50 transition">
              <Search className="size-5 text-slate-400 mr-3" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-slate-400 border-none outline-none text-sm font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-6">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post (Only show if "All" is selected and no search query, or matches filters) */}
        {selectedCategory === "All" && searchQuery === "" && (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">Featured Article</h2>
            <div className="group relative grid gap-8 lg:grid-cols-12 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
              <div className="relative overflow-hidden rounded-2xl aspect-[16/10] lg:col-span-7 border border-slate-100">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div className="absolute top-4 left-4 rounded-full bg-slate-900/80 backdrop-blur-sm px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-white">
                  {featuredPost.category}
                </div>
              </div>
              <div className="flex flex-col justify-between lg:col-span-5 py-2 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="size-4 text-slate-400" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="size-4 text-slate-400" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredPost.author.image}
                      alt={featuredPost.author.name}
                      className="size-11 rounded-full object-cover border border-slate-100"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{featuredPost.author.name}</h4>
                      <p className="text-[11px] font-semibold text-primary uppercase tracking-wider">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <button className="flex size-11 items-center justify-center rounded-full bg-slate-50 text-slate-600 border border-slate-200/60 shadow-sm transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary group-hover:translate-x-0.5">
                    <ArrowRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Post Grid */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
            {selectedCategory === "All" && searchQuery === "" ? "Recent Articles" : `Articles in ${selectedCategory}`}
          </h2>

          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300"
                >
                  <div>
                    <div className="relative overflow-hidden aspect-video border-b border-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 rounded-full bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-widest text-white">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-4 text-[11px] text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="size-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-heading text-base font-bold text-slate-900 leading-snug group-hover:text-primary transition-colors line-clamp-2 h-[2.75rem]">
                        {post.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-auto">
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={post.author.image}
                          alt={post.author.name}
                          className="size-8 rounded-full object-cover"
                        />
                        <span className="text-xs font-bold text-slate-700">{post.author.name}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-primary transition-colors group-hover:text-primary-dark">
                        Read Post
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl space-y-4">
              <BookOpen className="size-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">No articles found</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">We couldn't find any articles matching "{searchQuery}" in {selectedCategory}. Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>

        {/* Newsletter Subscription Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 text-white p-10 sm:p-12 lg:p-16 border border-slate-800 shadow-xl text-center max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight leading-tight">
              Get the latest insights directly to your inbox.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto font-normal">
              Subscribe to the EDUWave newsletter to receive weekly summaries of trending articles, tutorials, and career opportunities.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 outline-none focus:border-primary/50 text-sm"
              />
              <button className="px-6 py-3.5 bg-primary hover:bg-primary/95 text-white font-bold rounded-2xl shadow-[0_4px_12px_rgba(37,99,235,0.2)] hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BlogPage;
