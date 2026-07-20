export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#081C2B] text-white">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        <p className="uppercase tracking-[0.3em] text-[#D4C08A] font-semibold">
          Contact Us
        </p>

        <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold">
          Let's Build Your
          <span className="text-[#D4C08A]"> Career Together</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-300 leading-8">
          Have a question, feedback, or partnership idea? We'd love to hear
          from you. Reach out and our team will get back to you as soon as
          possible.
        </p>

      </section>

      {/* Contact Section */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold text-[#D4C08A]">
              Get In Touch
            </h2>

            <p className="mt-5 text-gray-300 leading-8">
              Whether you're a student looking for internships or a company
              searching for talented graduates, we're here to help.
            </p>

            <div className="mt-10 space-y-6">

              <div className="bg-[#10293D] rounded-2xl p-6 border border-[#D4C08A]/20">
                <h3 className="text-xl font-semibold">📧 Email</h3>
                <p className="mt-2 text-gray-300">
                  support@skillbridge.com
                </p>
              </div>

              <div className="bg-[#10293D] rounded-2xl p-6 border border-[#D4C08A]/20">
                <h3 className="text-xl font-semibold">📞 Phone</h3>
                <p className="mt-2 text-gray-300">
                  +92 300 1234567
                </p>
              </div>

              <div className="bg-[#10293D] rounded-2xl p-6 border border-[#D4C08A]/20">
                <h3 className="text-xl font-semibold">📍 Address</h3>
                <p className="mt-2 text-gray-300">
                  Karachi, Pakistan
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="bg-[#10293D] rounded-3xl border border-[#D4C08A]/20 p-8">

            <h2 className="text-3xl font-bold text-[#D4C08A]">
              Send a Message
            </h2>

            <form className="mt-8 space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl bg-[#081C2B] border border-gray-600 px-5 py-4 focus:border-[#D4C08A] outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl bg-[#081C2B] border border-gray-600 px-5 py-4 focus:border-[#D4C08A] outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl bg-[#081C2B] border border-gray-600 px-5 py-4 focus:border-[#D4C08A] outline-none"
              />

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-xl bg-[#081C2B] border border-gray-600 px-5 py-4 focus:border-[#D4C08A] outline-none resize-none"
              />

              <button
                className="w-full bg-[#D4C08A] text-[#081C2B] py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}