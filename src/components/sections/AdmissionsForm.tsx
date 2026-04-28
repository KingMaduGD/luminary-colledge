"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  parentName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  studentName: z.string().min(2, "Please enter the student's name"),
  level: z.enum(["JSS1", "SS1"] as const, { error: "Please select a level" }),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function AdmissionsForm() {
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
        <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "var(--font-cormorant, serif)" }}>Enquiry Received</h3>
        <p className="text-white/70 text-sm">Thank you for your enquiry. Our admissions team will be in touch within 2 working days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {[
        { name: "parentName" as const, label: "Parent / Guardian Name", type: "text", placeholder: "e.g. Mrs. Amaka Johnson" },
        { name: "email" as const, label: "Email Address", type: "email", placeholder: "your@email.com" },
        { name: "phone" as const, label: "Phone Number", type: "tel", placeholder: "+234 800 000 0000" },
        { name: "studentName" as const, label: "Student's Full Name", type: "text", placeholder: "e.g. Chidi Johnson" },
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
        <label className="block text-sm font-medium text-[#1A1A2E] mb-1">Admission Level</label>
        <select
          {...register("level")}
          className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545] transition bg-white"
        >
          <option value="">Select level...</option>
          <option value="JSS1">JSS1 (Junior Secondary)</option>
          <option value="SS1">SS1 (Senior Secondary)</option>
        </select>
        {errors.level && <p className="mt-1 text-xs text-red-500">{errors.level?.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1A1A2E] mb-1">Message (Optional)</label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Any questions or additional information..."
          className="w-full border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#0B2545] focus:ring-1 focus:ring-[#0B2545] transition resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#0B2545] text-white py-4 rounded text-sm font-semibold tracking-wide uppercase hover:bg-[#0d3060] transition-colors disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
