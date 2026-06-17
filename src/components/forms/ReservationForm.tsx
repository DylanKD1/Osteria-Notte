"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import DemoDisclosureNotice from "@/components/forms/DemoDisclosureNotice";

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  message: string;
}

export default function ReservationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoConsent, setDemoConsent] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.date ||
      !formData.time ||
      !formData.guests
    ) {
      setError("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, demoConsent }),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(
          json.error ?? "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
        );
        return;
      }

      setIsSubmitted(true);
    } catch {
      setError(
        "Ein Netzwerkfehler ist aufgetreten. Bitte versuchen Sie es erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <FadeIn className="text-center p-12 border border-white/10 bg-white/5 max-w-2xl mx-auto">
        <h3 className="font-serif italic text-3xl mb-4 text-gold">
          Vielen Dank.
        </h3>
        <p className="text-offwhite/80">
          Ihre Anfrage wurde übermittelt.
          {demoConsent &&
            " Sie erhalten in Kürze eine Test-Bestätigungs-E-Mail an die angegebene Adresse."}
        </p>
      </FadeIn>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">

      {/* ⚠️ DEMO disclosure — extracted component, referenced here */}
      <DemoDisclosureNotice />

      {/* 🧪 Demo consent section */}
      <div className="border border-white/10 bg-surface p-6 space-y-4">
        <h3 className="font-serif italic text-xl text-gold">
          🧪 Demo-Funktionen testen
        </h3>
        <p className="text-sm text-offwhite/70 leading-relaxed">
          Diese Website dient ausschließlich Demonstrationszwecken. Wenn du die
          Plattform testen möchtest, kannst du optional dem Empfang einer
          Test-E-Mail zustimmen, um die automatisierte Reservierungsbestätigung
          in der Praxis zu erleben.
        </p>

        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            id="demoConsent"
            checked={demoConsent}
            onChange={(e) => setDemoConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 flex-shrink-0 cursor-pointer border border-olive bg-surface accent-[#b8955a]"
          />
          <span className="text-sm text-offwhite/80 leading-relaxed group-hover:text-offwhite transition-colors">
            Ich möchte sehen, wie die automatisierte E-Mail in der Praxis
            funktioniert, und willige ein, im Rahmen dieser Demonstration eine
            Test-Nachricht an die von mir angegebene E-Mail-Adresse zu erhalten.
          </span>
        </label>

        <p className="text-xs text-offwhite/40 leading-relaxed pl-7">
          Die Nachricht dient ausschließlich Demonstrationszwecken. Es entsteht
          keine Reservierung oder kostenpflichtige Leistung. Die Einwilligung
          ist freiwillig und kann jederzeit über den Abmeldelink widerrufen
          werden.
        </p>
      </div>

      {/* Reservation form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="text-red-400 text-sm border border-red-400/20 bg-red-400/5 p-4 text-center">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-xs tracking-widest uppercase text-offwhite/60 mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              maxLength={100}
              required
              className="w-full bg-surface border border-olive px-4 py-3 text-offwhite placeholder:text-[#666] focus:outline-none focus:border-gold transition-colors"
              placeholder="Max Mustermann"
            />
          </div>
          <div>
            <label
              htmlFor="guests"
              className="block text-xs tracking-widest uppercase text-offwhite/60 mb-2"
            >
              Personen *
            </label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
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
            <label
              htmlFor="email"
              className="block text-xs tracking-widest uppercase text-offwhite/60 mb-2"
            >
              E-Mail *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              maxLength={254}
              required
              className="w-full bg-surface border border-olive px-4 py-3 text-offwhite placeholder:text-[#666] focus:outline-none focus:border-gold transition-colors"
              placeholder="max@beispiel.de"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-xs tracking-widest uppercase text-offwhite/60 mb-2"
            >
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              maxLength={30}
              className="w-full bg-surface border border-olive px-4 py-3 text-offwhite placeholder:text-[#666] focus:outline-none focus:border-gold transition-colors"
              placeholder="+49 761 ..."
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-xs tracking-widest uppercase text-offwhite/60 mb-2"
            >
              Datum *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full bg-surface border border-olive px-4 py-3 text-offwhite focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
            />
          </div>
          <div>
            <label
              htmlFor="time"
              className="block text-xs tracking-widest uppercase text-offwhite/60 mb-2"
            >
              Uhrzeit *
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
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
          <label
            htmlFor="message"
            className="block text-xs tracking-widest uppercase text-offwhite/60 mb-2"
          >
            Besondere Wünsche
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            maxLength={500}
            className="w-full bg-surface border border-olive px-4 py-3 text-offwhite placeholder:text-[#666] focus:outline-none focus:border-gold transition-colors resize-none"
            placeholder="Allergien, Anlässe..."
          ></textarea>
        </div>

        <div className="pt-4 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-transparent border border-gold text-gold px-12 py-4 tracking-widest uppercase text-sm hover:bg-gold hover:text-charcoal transition-colors duration-200 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Wird gesendet …" : "Reservierung anfragen"}
          </button>
        </div>
      </form>
    </div>
  );
}
