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
            className="text-2xl font-bold tracking-[0.02em] text-black transition hover:opacity-80"
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
              to="/courses"
              className={({ isActive }) =>
                `min-w-max rounded-full px-3 py-1.5 transition-all duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              Courses
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

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `min-w-max rounded-full px-3 py-1.5 transition-all duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              Blog
            </NavLink>

            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `min-w-max rounded-full px-3 py-1.5 transition-all duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              FAQ
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `min-w-max rounded-full px-3 py-1.5 transition-all duration-200 ${
                  isActive
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`
              }
            >
              Contact us
            </NavLink>
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
