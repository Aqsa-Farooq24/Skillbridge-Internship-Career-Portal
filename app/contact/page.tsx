"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setSending(true);
    setSent(false);
    setError(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      setSent(true);
      form.current.reset();

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setError(true);
    } finally {
      setSending(false);
    }
  };
  return (
    <main className="min-h-screen bg-[#081C2B] text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden">

        {/* Background Glows */}
        <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D4C08A]/10 blur-3xl" />

        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">

          <div className="max-w-4xl">

            {/* Badge */}
            <div className="group mb-6 inline-flex cursor-default items-center gap-3 rounded-full border border-[#D4C08A]/20 bg-[#D4C08A]/5 px-4 py-2 transition-all duration-300 hover:border-[#D4C08A]/50 hover:bg-[#D4C08A]/10 hover:shadow-lg hover:shadow-[#D4C08A]/10">

              <span className="h-2 w-2 rounded-full bg-[#D4C08A] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_#D4C08A]" />

              <span className="text-xs font-semibold tracking-[0.2em] text-[#D4C08A] sm:text-sm">
                CONTACT US
              </span>

            </div>


            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
              Let's Build Your{" "}
              <span className="bg-gradient-to-r from-[#D4C08A] to-[#f1df9d] bg-clip-text text-transparent">
                Career Together
              </span>
            </h1>


            {/* Description */}
            <p className="mt-7 max-w-3xl text-base leading-8 text-gray-300 sm:text-lg">
              Have a question, feedback, or partnership idea? We'd love to
              hear from you. Reach out and our team will get back to you as
              soon as possible.
            </p>

          </div>

        </div>
      </section>


      {/* Contact Section */}
      <section className="relative pb-24">

        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">


            {/* Left Side */}
            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4C08A]">
                Get In Touch
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                We'd love to hear from you.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                Whether you're a student looking for internships or a company
                searching for talented graduates, we're here to help.
              </p>


              {/* Contact Cards */}
              <div className="mt-10 space-y-4">


                {/* Email */}
                <div className="group relative overflow-hidden rounded-2xl border border-[#D4C08A]/15 bg-[#0d2739] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4C08A]/45 hover:bg-[#102c40] hover:shadow-[0_15px_40px_rgba(212,192,138,0.08)]">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D4C08A]/20 bg-[#D4C08A]/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D4C08A]/10">

                      <Mail
                        size={21}
                        className="text-[#D4C08A]"
                      />

                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Email
                      </p>

                      <p className="mt-1 font-medium text-gray-200 transition-colors duration-300 group-hover:text-[#D4C08A]">
                        support@skillbridge.com
                      </p>
                    </div>

                  </div>

                </div>


                {/* Phone */}
                <div className="group relative overflow-hidden rounded-2xl border border-[#D4C08A]/15 bg-[#0d2739] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4C08A]/45 hover:bg-[#102c40] hover:shadow-[0_15px_40px_rgba(212,192,138,0.08)]">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D4C08A]/20 bg-[#D4C08A]/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D4C08A]/10">

                      <Phone
                        size={21}
                        className="text-[#D4C08A]"
                      />

                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Phone
                      </p>

                      <p className="mt-1 font-medium text-gray-200 transition-colors duration-300 group-hover:text-[#D4C08A]">
                        +92 300 1234567
                      </p>
                    </div>

                  </div>

                </div>


                {/* Address */}
                <div className="group relative overflow-hidden rounded-2xl border border-[#D4C08A]/15 bg-[#0d2739] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4C08A]/45 hover:bg-[#102c40] hover:shadow-[0_15px_40px_rgba(212,192,138,0.08)]">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#D4C08A]/20 bg-[#D4C08A]/5 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D4C08A]/10">

                      <MapPin
                        size={21}
                        className="text-[#D4C08A]"
                      />

                    </div>

                    <div>
                      <p className="text-sm text-gray-500">
                        Address
                      </p>

                      <p className="mt-1 font-medium text-gray-200 transition-colors duration-300 group-hover:text-[#D4C08A]">
                        Karachi, Pakistan
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* Right Side - Form */}
            <div className="group relative overflow-hidden rounded-3xl border border-[#D4C08A]/15 bg-[#0d2739] p-6 shadow-2xl transition-all duration-500 hover:border-[#D4C08A]/30 hover:shadow-[0_20px_60px_rgba(212,192,138,0.08)] sm:p-8 md:p-10">

              {/* Form Glow */}
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#D4C08A]/5 blur-3xl transition-all duration-500 group-hover:bg-[#D4C08A]/10" />

              <div className="relative">

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4C08A] text-[#081C2B]">
                    <Send size={21} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                      Send a Message
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      We'll get back to you shortly.
                    </p>
                  </div>

                </div>


                {/* Form */}
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="mt-8 space-y-5"
                >

                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#081C2B] px-5 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-[#D4C08A]/30 focus:border-[#D4C08A] focus:bg-[#0a2234] focus:ring-2 focus:ring-[#D4C08A]/10"
                    />
                  </div>


                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#081C2B] px-5 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-[#D4C08A]/30 focus:border-[#D4C08A] focus:bg-[#0a2234] focus:ring-2 focus:ring-[#D4C08A]/10"
                    />
                  </div>


                  {/* Subject */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="title"
                      placeholder="What would you like to discuss?"
                      required
                      className="w-full rounded-xl border border-white/10 bg-[#081C2B] px-5 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-[#D4C08A]/30 focus:border-[#D4C08A] focus:bg-[#0a2234] focus:ring-2 focus:ring-[#D4C08A]/10"
                    />
                  </div>


                  {/* Message */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Message
                    </label>

                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Write your message..."
                      required
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#081C2B] px-5 py-3.5 text-white outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-[#D4C08A]/30 focus:border-[#D4C08A] focus:bg-[#0a2234] focus:ring-2 focus:ring-[#D4C08A]/10"
                    />
                  </div>


                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="group/button flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4C08A] py-4 font-bold text-[#081C2B] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e5d39a] hover:shadow-lg hover:shadow-[#D4C08A]/20 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? "Sending..." : "Send Message"}

                    {!sending && (
                      <ArrowRight
                        size={19}
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                      />
                    )}

                  </button>
                  {sent && (
                    <p className="mt-4 rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-center text-sm text-green-400">
                      Message sent successfully! We'll get back to you soon.
                    </p>
                  )}

                  {error && (
                    <p className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-400">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main >
  );
}

