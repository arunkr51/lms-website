import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HomePage from "@/pages/home/HomePage";
import AboutUsPage from "@/pages/aboutus/AboutUsPage";
import CourseDetailPage from "@/pages/courses/CourseDetailPage";
import BlogPage from "@/pages/blog/BlogPage";
import FAQPage from "@/pages/faq/FAQPage";
import CoursesPage from "@/pages/courses/CoursesPage";
import ContactPage from "@/pages/contact/ContactPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="w-full px-0 py-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/course/:id" element={<CourseDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Router;
