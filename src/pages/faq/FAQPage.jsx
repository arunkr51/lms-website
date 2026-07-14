import * as React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Search, ChevronDown, HelpCircle, Mail, MessageSquare, Phone } from "lucide-react";

const faqCategories = ["All", "General", "Courses", "Payments & Billing", "Technical Support"];

const faqData = [
  {
    id: 1,
    question: "How do I enroll in a course on EDUWave?",
    answer: "Enrolling is simple! Browse our course library, select the course you're interested in, and click the 'Buy Now' or 'Enroll Now' button. Follow the checkout process to complete your payment, and you'll get immediate access to all course materials in your dashboard.",
    category: "General"
  },
  {
    id: 2,
    question: "Are the courses self-paced or do they follow a schedule?",
    answer: "All courses on EDUWave are 100% self-paced. Once you enroll, you gain lifetime access to the course content. You can learn at your own speed, revisit lessons whenever you want, and complete assignments according to your personal schedule.",
    category: "Courses"
  },
  {
    id: 3,
    question: "Can I get a refund if I am not satisfied with a course?",
    answer: "Yes, we offer a 30-day money-back guarantee for all courses. If you are not satisfied with a course for any reason, you can request a full refund within 30 days of purchase through your account settings or by contacting support.",
    category: "Payments & Billing"
  },
  {
    id: 4,
    question: "Do I receive a certificate of completion?",
    answer: "Absolutely! Upon successfully watching all video lessons and completing all projects, quizzes, and course requirements, you will receive a digital certificate of completion. You can download it as a PDF or share it directly to your LinkedIn profile.",
    category: "Courses"
  },
  {
    id: 5,
    question: "What technical setup do I need for coding bootcamps?",
    answer: "For most coding courses, all you need is a computer (macOS, Windows, or Linux) with an internet connection and a free code editor like Visual Studio Code. Any specific software or tool requirements will be detailed in the first lesson of the course, and instructors will guide you through the entire installation process.",
    category: "Technical Support"
  },
  {
    id: 6,
    question: "How can I contact my course instructor if I get stuck?",
    answer: "Each course has an active Q&A forum where you can ask questions, post code snippets, and interact with other students and teaching assistants. Instructors and TAs regularly monitor these forums to provide guidance and answer questions within 24 hours.",
    category: "Technical Support"
  },
  {
    id: 7,
    question: "Are there any student discounts or corporate packages?",
    answer: "Yes, we offer custom learning plans and discounted packages for universities, non-profits, and corporate teams. Please contact our sales team using the support form to discuss customized volume discounts and team dashboard features.",
    category: "Payments & Billing"
  }
];

function FAQPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [openId, setOpenId] = React.useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFAQs = faqData.filter((faq) => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20 font-sans">
      <Helmet>
        <title>Frequently Asked Questions | EDUWave</title>
        <meta name="description" content="Find answers to common questions about enrollment, course structures, payments, certificates, and technical support at EDUWave." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      
      {/* Premium Hero Banner */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-24 px-6 sm:px-12 lg:px-16 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Frequently Asked Questions
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
            We're here to help you succeed.
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal">
            Find answers to common questions about enrollment, course structures, payments, certificates, and technical support.
          </p>

          {/* Search bar inside hero */}
          <div className="mx-auto max-w-md pt-4">
            <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 px-4 py-3 shadow-inner focus-within:border-primary/50 transition">
              <Search className="size-5 text-slate-400 mr-3" />
              <input
                type="text"
                placeholder="Search FAQ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-slate-400 border-none outline-none text-sm font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-16 space-y-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-6">
          {faqCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setOpenId(null); // Close any open accordion when category changes
              }}
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

        {/* FAQs Accordion List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-slate-300"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left font-sans text-sm sm:text-base font-bold text-slate-900 hover:bg-slate-50 transition-colors focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="size-5 text-primary shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`size-5 text-slate-400 transition-transform duration-300 ${
                        isOpen ? "-rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[500px] border-t border-slate-100" : "max-h-0 pointer-events-none"
                    }`}
                  >
                    <div className="px-6 py-5 text-sm text-slate-600 leading-relaxed font-normal bg-slate-50/50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl space-y-4">
              <HelpCircle className="size-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">No results found</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">We couldn't find any questions matching "{searchQuery}". Try updating your search or selected category.</p>
            </div>
          )}
        </div>

        {/* Contact Support Section */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm text-center space-y-6">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-900">
            Still have questions?
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            If you couldn't find the answer you were looking for, please don't hesitate to reach out to our friendly support team. We're here to help you!
          </p>

          <div className="grid gap-6 sm:grid-cols-3 max-w-2xl mx-auto pt-4">
            <div className="flex flex-col items-center p-5 rounded-2xl border border-slate-100 bg-slate-50/30 hover:shadow-sm transition cursor-pointer">
              <Mail className="size-6 text-primary mb-3" />
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Email Us</h4>
              <p className="text-xs text-slate-400 mt-1">support@eduwave.com</p>
            </div>

            <div className="flex flex-col items-center p-5 rounded-2xl border border-slate-100 bg-slate-50/30 hover:shadow-sm transition cursor-pointer">
              <MessageSquare className="size-6 text-primary mb-3" />
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Live Chat</h4>
              <p className="text-xs text-slate-400 mt-1">Available 24/7 in app</p>
            </div>

            <div className="flex flex-col items-center p-5 rounded-2xl border border-slate-100 bg-slate-50/30 hover:shadow-sm transition cursor-pointer">
              <Phone className="size-6 text-primary mb-3" />
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Call Us</h4>
              <p className="text-xs text-slate-400 mt-1">Mon-Fri 9am-6pm EST</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FAQPage;
