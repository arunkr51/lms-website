import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 font-sans">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white">About</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/about" className="transition hover:text-white">About us</Link></li>
              <li><a href="#" className="transition hover:text-white">Careers</a></li>
              <li><a href="#" className="transition hover:text-white">Contact us</a></li>
              <li><a href="#" className="transition hover:text-white">Blog</a></li>
              <li><a href="#" className="transition hover:text-white">Investors</a></li>
              <li><a href="#" className="transition hover:text-white">Find more on Coursera</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white">Discover Udemy</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="transition hover:text-white">Get the app</a></li>
              <li><a href="#" className="transition hover:text-white">Teach on Udemy</a></li>
              <li><a href="#" className="transition hover:text-white">Plans and Pricing</a></li>
              <li><a href="#" className="transition hover:text-white">Affiliate</a></li>
              <li><a href="#" className="transition hover:text-white">Help and Support</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white">Udemy for Business</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="transition hover:text-white">Udemy Business</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white">Legal & Accessibility</p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="transition hover:text-white">Accessibility statement</a></li>
              <li><a href="#" className="transition hover:text-white">Privacy policy</a></li>
              <li><a href="#" className="transition hover:text-white">Sitemap</a></li>
              <li><a href="#" className="transition hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-900 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:px-8">
        <div className="mx-auto flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0 max-w-7xl">
          <div className="flex items-center gap-2 text-white">
            <span className="text-2xl font-semibold">EDUwave</span>
            <span>© 2026 EDUwave, Inc.</span>
          </div>
          <button className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white">
            <Globe className="size-4" /> English
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
