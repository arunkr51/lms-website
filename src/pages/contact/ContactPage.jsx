import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24">
      <Helmet>
        <title>Contact Us | EDUWave</title>
        <meta name="description" content="Get in touch with EDUWave. Our team is ready to answer all your questions about our courses, pricing, and platform features." />
      </Helmet>
      {/* Header Section */}
      <div className="bg-slate-950 px-10 py-24 sm:px-12 lg:px-16 text-center text-white border-b border-slate-800">
        <div className="mx-auto max-w-4xl space-y-6">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Get in Touch
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            Have a question about our courses, pricing, or something else? Our team is ready to answer all your questions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-8 sm:px-10 lg:px-14 -mt-12 relative z-10">
        <div className="grid gap-8 lg:grid-cols-5 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200/60">
          
          {/* Contact Information (Left Side) */}
          <div className="bg-primary text-primary-foreground p-10 lg:p-12 lg:col-span-2 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">Contact Information</h3>
              <p className="text-primary-foreground/80 mb-10 leading-relaxed">
                Fill up the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white/10 p-3 mt-1">
                    <Phone className="size-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-white font-medium text-lg">+1 (555) 123-4567</p>
                    <p className="text-white/60 text-sm">Mon-Fri from 8am to 5pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white/10 p-3 mt-1">
                    <Mail className="size-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-white font-medium text-lg">hello@eduwave.com</p>
                    <p className="text-white/60 text-sm">We'll reply within 24hrs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white/10 p-3 mt-1">
                    <MapPin className="size-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-1">Office</p>
                    <p className="text-white font-medium text-lg">100 Learning Way</p>
                    <p className="text-white/60 text-sm">San Francisco, CA 94107</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-white/10 p-3 mt-1">
                    <Clock className="size-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-1">Support Hours</p>
                    <p className="text-white font-medium text-lg">24/7 Dedicated Support</p>
                    <p className="text-white/60 text-sm">For premium members</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-4">
              {/* Decorative circles representing social links */}
              <div className="size-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <div className="size-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center">
                <span className="text-white font-bold text-sm">in</span>
              </div>
              <div className="size-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer flex items-center justify-center">
                <span className="text-white font-bold text-sm">ig</span>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Side) */}
          <div className="p-10 lg:p-12 lg:col-span-3">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-500">
                <div className="rounded-full bg-green-100 p-4 mb-2">
                  <Send className="size-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 max-w-sm">
                  Thanks for reaching out. We've received your message and will get back to you shortly.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 rounded-full px-8"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="rounded-full bg-slate-100 p-2.5">
                    <MessageSquare className="size-5 text-slate-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Send us a message</h3>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2 text-left">
                    <label htmlFor="firstName" className="text-sm font-semibold text-slate-900">First Name</label>
                    <input 
                      id="firstName"
                      type="text" 
                      required
                      placeholder="Jane"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label htmlFor="lastName" className="text-sm font-semibold text-slate-900">Last Name</label>
                    <input 
                      id="lastName"
                      type="text" 
                      required
                      placeholder="Doe"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-900">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-900">Subject</label>
                  <select 
                    id="subject"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Course Feedback</option>
                  </select>
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-900">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={5}
                    placeholder="How can we help you today?"
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-xl text-base py-6 shadow-md hover:shadow-lg transition-all active:scale-[0.98]">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
