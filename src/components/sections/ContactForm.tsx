"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Please enter a message (min 10 characters)"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#0B2545] text-white rounded-lg p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-[#C9962C]/20 flex items-center justify-center mx-auto mb-4">
          <span className="text-[#C9962C] text-3xl">✓</span>
        </div>
        <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "var(--font-cormorant, serif)" }}>Message Sent</h3>
        <p className="text-white/70 text-sm">Thank you for reaching out. We will respond within 2 working days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {[
        { name: "name" as const, label: "Full Name", type: "text", placeholder: "Your full name" },
        { name: "email" as const, label: "Email Address", type: "email", placeholder: "your@email.com" },
        { name: "subject" as const, label: "Subject", type: "text", placeholder: "How can we help?" },
      ].map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-[#1A1A2E] mb-1">{field.label}</label>
          <input
            {...register(field.name)}
            type={field.type}
            placeholder={field.placeholder}
            className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545] transition"
          />
          {errors[field.name] && <p className="mt-1 text-xs text-red-500">{errors[field.name]?.message}</p>}
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium text-[#1A1A2E] mb-1">Message</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Write your message here..."
          className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545] transition resize-none"
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message?.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0B2545] text-white py-4 rounded text-sm font-semibold tracking-wide uppercase hover:bg-[#0d3060] transition-colors disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
