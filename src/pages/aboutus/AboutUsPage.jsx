import * as React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Award, Users, Compass, BookOpen, Heart, Target, Lightbulb, GraduationCap, ArrowRight } from "lucide-react";

function AboutUsPage() {
  const stats = [
    { value: "1.2M+", label: "Active Learners", desc: "Across 180+ countries" },
    { value: "16+", label: "Mastery Courses", desc: "High-fidelity curricula" },
    { value: "4.8★", label: "Average Rating", desc: "From 500k+ reviews" },
    { value: "98%", label: "Success Rate", desc: "Students reaching goals" }
  ];

  const values = [
    {
      icon: <Heart className="size-6 text-rose-500" />,
      title: "Student-First Mentality",
      description: "Every feature we build and course we create is centered around student outcomes, accessibility, and real skill mastery."
    },
    {
      icon: <Target className="size-6 text-blue-500" />,
      title: "Action-Oriented Learning",
      description: "We bypass passive viewing. Our bootcamp lessons are structured with hands-on projects, exercises, and challenges."
    },
    {
      icon: <GraduationCap className="size-6 text-emerald-500" />,
      title: "Expert Instruction",
      description: "Our instructors are industry veterans, best-selling authors, and seasoned developers who know how to teach complex topics simply."
    },
    {
      icon: <Lightbulb className="size-6 text-amber-500" />,
      title: "Continuous Innovation",
      description: "Tech moves fast. We constantly update our content and platform features to ensure you learn the latest standards."
    }
  ];

  const team = [
    {
      name: "Dr. Angela Yu",
      role: "Lead Instructor & Web Educator",
      bio: "Former medical doctor turned software developer, Angela is renowned for her intuitive coding bootcamps and teaching style.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Jonas Schmedtmann",
      role: "Senior JavaScript Specialist",
      bio: "Designer, web developer, and teacher, Jonas has taught over a million students modern web development and design systems.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
      name: "Maximilian Schwarzmüller",
      role: "React & Framework Expert",
      bio: "Self-taught developer and creator of Academind, Max specializes in teaching frontend frameworks and cloud deployments.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <Helmet>
        <title>About Us | EDUWave</title>
        <meta name="description" content="Discover the mission, values, and world-class educators behind EDUWave." />
      </Helmet>
      
      {/* Premium Hero Banner */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-24 px-6 sm:px-12 lg:px-16 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            About EDUWave
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
            Empowering curious minds to master the future.
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal">
            We bring together industry-leading instructors, high-fidelity curriculum design, and hands-on projects so students can learn with absolute confidence and velocity.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 space-y-24">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md text-center group cursor-default"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-primary group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </p>
              <h3 className="text-sm font-bold text-slate-800 mt-2">{stat.label}</h3>
              <p className="text-xs text-slate-400 mt-1">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Our Story / Who We Are Section */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 leading-tight">
              Our Journey: Redefining how the world learns online.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Founded with the mission to eliminate boring lectures, EDUWave was built by developers and educators who believe that learning should be engaging, project-driven, and hyper-relevant. 
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We reject the checkbox approach to education. Our bootcamps and classes are designed to prepare you for actual industry work, equipping you with the portfolio, confidence, and tools to land high-paying roles and build state-of-the-art products.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Award className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">ISO Certified</h4>
                  <p className="text-xs text-slate-400">Global teaching standards</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Compass className="size-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Self-Paced Paths</h4>
                  <p className="text-xs text-slate-400">Learn on your schedule</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-lg aspect-[4/3] border border-slate-200 bg-white p-3">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
              alt="Our Story Illustration"
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Our Core Values */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 leading-tight">
              Values that anchor our mission.
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              We live by a set of simple, actionable values that ensure our platform remains the premier choice for professionals looking to upgrade their skills.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((val, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-300/80 space-y-4 cursor-default"
              >
                <div className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading leading-tight">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Faculty Section */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 leading-tight">
              Meet our world-class faculty.
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              Learn from educators who have worked with top companies, built best-selling courses, and guided millions of developers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, idx) => (
              <div 
                key={idx} 
                className="flex flex-col justify-between bg-white border border-slate-200/60 rounded-3xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-md hover:border-slate-300/80 group cursor-default"
              >
                <div className="space-y-6">
                  <div className="relative size-20 rounded-full overflow-hidden border-2 border-slate-100 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-900 underline decoration-primary/45 decoration-2">{member.name}</h3>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">{member.role}</p>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal pt-2">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 text-white p-10 sm:p-12 lg:p-16 border border-slate-800 shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight leading-tight">
              Ready to expand your skillset?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              Unlock unlimited access to high-fidelity bootcamps, code libraries, projects, and personal developer templates.
            </p>
            <div className="pt-2">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/95 text-white font-bold rounded-2xl shadow-[0_4px_12px_rgba(37,99,235,0.2)] hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer text-sm"
              >
                Browse Master Classes
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutUsPage;
