import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HomePage from "@/pages/home/HomePage";
import AboutUsPage from "@/pages/aboutus/AboutUsPage";
import CourseDetailPage from "@/pages/course/CourseDetailPage";

function Router() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="w-full px-0 py-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/course/:id" element={<CourseDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Router;
