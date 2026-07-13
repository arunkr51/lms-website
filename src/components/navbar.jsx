import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm px-10 sm:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 sm:px-10 lg:px-14 py-3">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-2xl font-bold tracking-[0.02em] text-black underline decoration-primary decoration-4 underline-offset-6 transition hover:opacity-80"
          >
            EDUWave
          </Link>
        </div>

        <div className="hidden flex-1 items-center justify-end md:flex">
          <nav className="flex flex-wrap items-center justify-end gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-foreground">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `min-w-max rounded-full px-3 py-1.5 transition-all duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `min-w-max rounded-full px-3 py-1.5 transition-all duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              About Us
            </NavLink>

            <div className="group relative">
              <button className="inline-flex items-center gap-1 rounded-full px-3 py-2 transition hover:text-primary">
                Courses
                <ChevronDown className="size-4 transition duration-200 group-hover:-rotate-180" />
              </button>
              <div className="absolute left-0 top-full z-50 pt-[18px] hidden min-w-[12rem] opacity-0 transition duration-200 group-hover:block group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-border bg-background p-4 shadow-xl">
                  <ul className="space-y-1">
                    <li><a href="#courses" className="block rounded-md px-2.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-foreground transition hover:bg-muted/60 hover:text-primary">Courses</a></li>
                    <li><a href="#categories" className="block rounded-md px-2.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-foreground transition hover:bg-muted/60 hover:text-primary">Categories</a></li>
                    <li><a href="#instructors" className="block rounded-md px-2.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-foreground transition hover:bg-muted/60 hover:text-primary">Instructors</a></li>
                    <li><a href="#features" className="block rounded-md px-2.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-foreground transition hover:bg-muted/60 hover:text-primary">Features</a></li>
                    <li><a href="#blog" className="block rounded-md px-2.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-foreground transition hover:bg-muted/60 hover:text-primary">Blog</a></li>
                    <li><a href="#testimonials" className="block rounded-md px-2.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-foreground transition hover:bg-muted/60 hover:text-primary">Testimonials</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="group relative">
              <button className="inline-flex items-center gap-1 rounded-full px-4 py-2 transition hover:text-primary">
                Support
                <ChevronDown className="size-4 transition duration-200 group-hover:-rotate-180" />
              </button>
              <div className="absolute left-0 top-full z-50 pt-[18px] hidden min-w-[18rem] opacity-0 transition duration-200 group-hover:block group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-border bg-background p-4 shadow-xl">
                  <ul className="space-y-1.5">
                    <li><a href="#faq" className="block rounded-md px-2.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-foreground transition hover:bg-muted/60 hover:text-primary">FAQ</a></li>
                    <li><a href="#blog" className="block rounded-md px-2.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-foreground transition hover:bg-muted/60 hover:text-primary">Blog</a></li>
                    <li><a href="#contact" className="block rounded-md px-2.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-foreground transition hover:bg-muted/60 hover:text-primary">Contact Us</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" variant="outline">
            Login
          </Button>
          <Button size="sm" variant="default">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
