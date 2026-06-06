"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";

export default function ReservationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
    message: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.date || !formData.time || !formData.guests) {
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
        <p className="text-offwhite/80">Ihre Reservierungsanfrage wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen zur Bestätigung.</p>
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
              className="w-full bg-surface border border-olive px-4 py-3 text-offwhite placeholder:text-[#666] focus:outline-none focus:border-gold transition-colors"
              placeholder="Max Mustermann"
            />
          </div>
          <div>
            <label htmlFor="guests" className="block text-xs tracking-widest uppercase text-offwhite/60 mb-2">Personen *</label>
            <select 
              id="guests" 
              name="guests" 
              value={formData.guests}
              onChange={handleChange}
              className="w-full bg-surface border border-olive px-4 py-3 text-offwhite focus:outline-none focus:border-gold transition-colors"
            >
              <option value="">Bitte wählen</option>
              <option value="1">1 Person</option>
              <option value="2">2 Personen</option>
              <option value="3">3 Personen</option>
              <option value="4">4 Personen</option>
              <option value="5">5 Personen</option>
              <option value="6+">6+ Personen</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-xs tracking-widest uppercase text-offwhite/60 mb-2">Datum *</label>
            <input 
              type="date" 
              id="date" 
              name="date" 
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-surface border border-olive px-4 py-3 text-offwhite focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-xs tracking-widest uppercase text-offwhite/60 mb-2">Uhrzeit *</label>
            <select 
              id="time" 
              name="time" 
              value={formData.time}
              onChange={handleChange}
              className="w-full bg-surface border border-olive px-4 py-3 text-offwhite focus:outline-none focus:border-gold transition-colors"
            >
              <option value="">Bitte wählen</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
              <option value="21:30">21:30</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs tracking-widest uppercase text-offwhite/60 mb-2">Besondere Wünsche</label>
          <textarea 
            id="message" 
            name="message" 
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-surface border border-olive px-4 py-3 text-offwhite placeholder:text-[#666] focus:outline-none focus:border-gold transition-colors resize-none"
            placeholder="Allergien, Anlässe..."
          ></textarea>
        </div>

        <div className="pt-6 text-center">
          <button 
            type="submit"
            className="bg-transparent border border-gold text-gold px-12 py-4 tracking-widest uppercase text-sm hover:bg-gold hover:text-charcoal transition-colors duration-200 w-full sm:w-auto"
          >
            Reservierung anfragen
          </button>
        </div>
      </form>
    </div>
  );
}
