"use client";

import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GetStartedModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    businessType: "",
    businessStatus: "",
    needs: [],
    timeAvailability: "",
  });

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-[#F4ECFA] border border-[#E5D8F1] text-[#4A2A4F] placeholder:text-[#9A7FA3] focus:outline-none focus:ring-2 focus:ring-[#B79AD3]";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissions = JSON.parse(
      localStorage.getItem("getStartedSubmissions") || "[]"
    );

    submissions.push({
      ...formData,
      submittedAt: new Date().toISOString(),
    });

    localStorage.setItem(
      "getStartedSubmissions",
      JSON.stringify(submissions)
    );

    onClose();
    alert("We have received your information. Thank you!");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="fixed inset-0 z-70 flex items-center justify-center p-4"
      >
        <div className="bg-[#F9F4FC] w-full max-w-2xl rounded-2xl shadow-xl overflow-hidden">
          {/* HEADER */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5D8F1]">
            <h2 className="text-lg font-semibold text-[#6B3B6E]">
              {step === 2 &&
                "Step 2: Tell us a bit more about your current situation"}
            </h2>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#E5D8F1]/40"
            >
              <X />
            </button>
          </div>

          {/* BODY */}
          <form
            onSubmit={step === 1 ? handleNext : handleSubmit}
            className="p-6 md:p-8 space-y-6"
          >
            {/* STEP 1 */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <label className="block mb-2 font-medium text-[#6B3B6E]">
                    Your Name on LinkedIn *
                  </label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="e.g. John Doe"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-[#6B3B6E]">
                    Email *
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="sample@email.com"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-[#6B3B6E]">
                    Mobile Number *
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                      🇹🇭
                    </span>
                    <input
                      required
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`${inputClass} pl-14`}
                      placeholder="0812345678"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="ml-auto block px-10 py-3 rounded-full bg-[#6B3B6E] text-white font-medium hover:bg-[#5A2F5D] transition"
                >
                  Next
                </button>
              </motion.div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {/* Email readonly */}
                <div className="opacity-60">
                  <label className="block mb-2 font-medium text-[#6B3B6E]">
                    Email *
                  </label>
                  <input
                    readOnly
                    value={formData.email}
                    className={inputClass}
                  />
                </div>

                {/* Business type */}
                <div>
                  <label className="block mb-2 font-medium text-[#6B3B6E]">
                    What best describes your business? *
                  </label>

                  <div className="relative">
                    <select
                      required
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none pr-10`}
                    >
                      <option value="">Select your business type...</option>
                      <option value="agency">Agency / Service</option>
                      <option value="coach">Coach / Consultant</option>
                      <option value="saas">Software / SaaS</option>
                      <option value="ecommerce">E-commerce</option>
                    </select>

                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B6A92]" />
                  </div>
                </div>

                {/* Business status */}
                <div>
                  <label className="block mb-2 font-medium text-[#6B3B6E]">
                    How’s your business going? *
                  </label>

                  <div className="relative">
                    <select
                      required
                      name="businessStatus"
                      value={formData.businessStatus}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none pr-10`}
                    >
                      <option value="">
                        Most people are in one of 3 places...
                      </option>
                      <option value="starting">Just starting</option>
                      <option value="growing">Growing but messy</option>
                      <option value="scaling">Scaling smoothly</option>
                    </select>

                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B6A92]" />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block mb-2 font-medium text-[#6B3B6E]">
                    Do you have ~5 hours per week? *
                  </label>

                  <div className="relative">
                    <select
                      required
                      name="timeAvailability"
                      value={formData.timeAvailability}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none pr-10`}
                    >
                      <option value="">Select an option</option>
                      <option value="yes">Yes</option>
                      <option value="maybe">Maybe</option>
                      <option value="no">No</option>
                    </select>

                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B6A92]" />
                  </div>
                </div>

                <button
                  type="submit"
                  className="ml-auto block px-10 py-3 rounded-full bg-[#6B3B6E] text-white font-medium hover:bg-[#5A2F5D] transition"
                >
                  Submit
                </button>
              </motion.div>
            )}
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
