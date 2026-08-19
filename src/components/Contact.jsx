import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { email, phone, location, github, linkedin, instagram, emailConfig } = portfolioData.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle | submitting | success
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');

    // Check if EmailJS is fully configured
    const isConfigured =
      emailConfig &&
      emailConfig.serviceId !== 'YOUR_SERVICE_ID' &&
      emailConfig.templateId !== 'YOUR_TEMPLATE_ID' &&
      emailConfig.publicKey !== 'YOUR_PUBLIC_KEY';

    if (!isConfigured) {
      // Fallback: Demo Simulation Mode
      console.warn("EmailJS is not fully configured. Form submitted in demo mode.");
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 1200);
      return;
    }

    // Trigger EmailJS submission
    emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Ganesh Kumar"
      },
      emailConfig.publicKey
    )
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error("EmailJS Delivery Error:", error);
      setStatus('idle');
      alert("Failed to deliver message. Please check your credentials in portfolio.js.");
    });
  };

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Contact</h2>
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full" />
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm max-w-sm mx-auto">
            Get in touch! Fill out the form or reach out through my socials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Cards */}
            <div className="glass p-6 rounded-2xl space-y-6 border border-slate-200 dark:border-slate-800 shadow-lg">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Contact Details</h3>

              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group cursor-pointer"
              >
                <div className="p-3 bg-primary-500/10 text-primary-600 dark:text-primary-400 rounded-xl group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Email</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5 break-all">{email}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${phone}`}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors group cursor-pointer"
              >
                <div className="p-3 bg-indigo-500/10 text-indigo-650 dark:text-indigo-400 rounded-xl group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Phone</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">{phone}</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-3 rounded-xl">
                <div className="p-3 bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mt-0.5">{location}</p>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="glass p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg">
              <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">Connect Socially</h3>
              <div className="flex gap-4">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 flex items-center justify-center gap-2 rounded-xl bg-slate-200/50 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-350 dark:hover:text-white border border-slate-300/40 dark:border-slate-800 font-semibold text-sm transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 flex items-center justify-center gap-2 rounded-xl bg-slate-200/50 hover:bg-slate-200 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-350 dark:hover:text-white border border-slate-300/40 dark:border-slate-800 font-semibold text-sm transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg relative overflow-hidden">
              
              {status === 'success' ? (
                /* Success Message */
                <div className="text-center py-8 animate-fade-in">
                  <div className="w-16 h-16 mx-auto bg-green-550/10 text-green-500 dark:bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm mx-auto mb-8">
                    Thank you for your message. Since this is a frontend-only portfolio, your details were simulated successfully. I will get back to you via email shortly!
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="py-2.5 px-6 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-250 border border-slate-300 dark:border-slate-700 rounded-lg font-semibold text-sm transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                /* The Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Send a Message</h3>
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 transition-colors disabled:opacity-55"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="Your email address"
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 transition-colors disabled:opacity-55"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 transition-colors resize-none disabled:opacity-55"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white font-medium rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25 hover:shadow-xl transition-all duration-300 disabled:opacity-55 cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
