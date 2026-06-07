"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  if (isSubmitted) {
    return (
      <FadeIn className="text-center p-12 border border-white/10 bg-white/5 max-w-2xl mx-auto">
        <h3 className="font-serif italic text-3xl mb-4 text-gold">Vielen Dank.</h3>
        <p className="text-offwhite/80">Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen.</p>
      </FadeIn>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="text-red-400 text-sm border border-red-400/20 bg-red-400/5 p-4 text-center">
            {error}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-xs tracking-widest uppercase text-offwhite/60 mb-2">Name *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              maxLength={100}
              required
              className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-offwhite focus:outline-none focus:border-gold transition-colors"
              placeholder="Max Mustermann"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs tracking-widest uppercase text-offwhite/60 mb-2">E-Mail *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              maxLength={150}
              required
              className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-offwhite focus:outline-none focus:border-gold transition-colors"
              placeholder="max@beispiel.de"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs tracking-widest uppercase text-offwhite/60 mb-2">Nachricht *</label>
          <textarea 
            id="message" 
            name="message" 
            rows={5}
            value={formData.message}
            onChange={handleChange}
            maxLength={1000}
            required
            className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-offwhite focus:outline-none focus:border-gold transition-colors resize-none"
            placeholder="Ihre Nachricht an uns..."
          ></textarea>
        </div>

        <div className="pt-6 text-center">
          <button 
            type="submit"
            className="border border-gold text-gold px-12 py-4 tracking-widest uppercase text-sm hover:bg-gold hover:text-charcoal transition-all duration-300 w-full sm:w-auto"
          >
            Nachricht senden
          </button>
        </div>
      </form>
    </div>
  );
}
