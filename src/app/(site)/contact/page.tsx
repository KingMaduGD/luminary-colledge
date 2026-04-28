"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const schema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("A valid email address is required"),
  phone: z.string().optional(),
  subject: z.string().min(4, "Subject is required"),
  message: z.string().min(10, "Please write a message of at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const contactInfo = [
  {
    Icon: MapPin,
    title: "Address",
    lines: ["15 Luminary Way, Maitama District,", "Abuja, FCT, Nigeria"],
  },
  {
    Icon: Phone,
    title: "Phone",
    lines: ["+234 801 234 5678", "+234 802 345 6789"],
  },
  {
    Icon: Mail,
    title: "Email",
    lines: ["info@luminarycollege.edu.ng", "admissions@luminarycollege.edu.ng"],
  },
  {
    Icon: Clock,
    title: "Office Hours",
    lines: ["Monday – Friday: 8:00 AM – 4:00 PM", "Saturday: 9:00 AM – 1:00 PM"],
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log("Contact form submitted:", data);
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-[#0B2545] py-20 text-center">
        <p
          className="text-sm font-semibold tracking-widest uppercase text-[#C9962C] mb-2"
          style={{ fontFamily: "var(--font-label), system-ui, sans-serif" }}
        >
          Get in Touch
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold text-white"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          Contact Us
        </h1>
        <p className="text-gray-300 mt-4 text-lg max-w-xl mx-auto">
          We&apos;d love to hear from you. Reach out via any of the channels below or send us a message.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <SectionHeader
                label="Contact Information"
                title="Reach Us"
                centered={false}
              />
              <div className="space-y-8">
                {contactInfo.map(({ Icon, title, lines }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#0B2545] rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#C9962C]" />
                    </div>
                    <div>
                      <h4
                        className="font-semibold text-[#0B2545] mb-1"
                        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                      >
                        {title}
                      </h4>
                      {lines.map((line, i) => (
                        <p key={i} className="text-sm text-gray-600">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <SectionHeader
                label="Send a Message"
                title="Write to Us"
                centered={false}
              />

              {submitted ? (
                <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
                  <CheckCircle size={64} className="text-[#C9962C] mx-auto mb-6" />
                  <h3
                    className="text-3xl font-semibold text-[#0B2545] mb-4"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting Luminary College. We will respond to your message within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-white rounded-2xl p-8 shadow-sm space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("name")}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-[#C9962C] transition-colors"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-[#C9962C] transition-colors"
                        placeholder="email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number (optional)
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-[#C9962C] transition-colors"
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        {...register("subject")}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-[#C9962C] transition-colors"
                        placeholder="e.g. Admissions Enquiry"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:border-[#C9962C] transition-colors resize-none"
                      placeholder="Write your message here..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C9962C] text-white py-4 rounded-lg font-semibold tracking-wide hover:bg-[#b8851f] transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="h-96 bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8588!2d7.4906!3d9.0765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0badb0c36b59%3A0x6e8efd4e263490c!2sMaitama%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1620000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Luminary College Location — Maitama, Abuja"
        />
      </section>
    </div>
  );
}
