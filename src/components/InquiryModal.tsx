'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    storeUrl: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key & manage body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      console.error('Submission error:', err);
      const msg = err instanceof Error ? err.message : 'An unexpected error occurred.';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      storeUrl: '',
      message: '',
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-[580px] rounded-[24px] sm:rounded-[28px] bg-white p-6 sm:p-9 text-[#11100F] shadow-2xl transition-all duration-300 transform scale-100 animate-in fade-in zoom-in-95"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 sm:top-7 sm:right-7 flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center text-center py-10 px-4">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-2">
              Inquiry Received!
            </h3>
            <p className="text-zinc-600 text-sm max-w-md mb-8">
              Thank you for reaching out. We will review your project details and get back to you shortly.
            </p>
            <button
              type="button"
              onClick={handleResetAndClose}
              className="rounded-full bg-[#18181B] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-black cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6 sm:mb-7 pr-8">
              <h2
                id="inquiry-modal-title"
                className="text-[22px] sm:text-[26px] font-bold tracking-tight text-zinc-900 leading-snug"
              >
                Quick project inquiry
              </h2>
              <p className="mt-1 text-[13px] sm:text-[14px] text-zinc-500 font-normal">
                For the full analysis, you can also use the form on the page.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="inquiry-name"
                    className="block text-[11px] font-bold uppercase tracking-wider text-zinc-900 mb-1.5"
                  >
                    NAME
                  </label>
                  <input
                    id="inquiry-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First & Last Name"
                    className="w-full rounded-[14px] border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 transition-all focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-phone"
                    className="block text-[11px] font-bold uppercase tracking-wider text-zinc-900 mb-1.5"
                  >
                    PHONE
                  </label>
                  <input
                    id="inquiry-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number?"
                    className="w-full rounded-[14px] border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 transition-all focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
              </div>

              {/* Row 2: Email & Store URL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="inquiry-email"
                    className="block text-[11px] font-bold uppercase tracking-wider text-zinc-900 mb-1.5"
                  >
                    EMAIL
                  </label>
                  <input
                    id="inquiry-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address?"
                    className="w-full rounded-[14px] border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 transition-all focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry-store-url"
                    className="block text-[11px] font-bold uppercase tracking-wider text-zinc-900 mb-1.5"
                  >
                    STORE URL
                  </label>
                  <input
                    id="inquiry-store-url"
                    name="storeUrl"
                    type="text"
                    value={formData.storeUrl}
                    onChange={handleChange}
                    placeholder="yourstore.com"
                    className="w-full rounded-[14px] border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 transition-all focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                  />
                </div>
              </div>

              {/* Row 3: Your Message */}
              <div>
                <label
                  htmlFor="inquiry-message"
                  className="block text-[11px] font-bold uppercase tracking-wider text-zinc-900 mb-1.5"
                >
                  YOUR MESSAGE
                </label>
                <textarea
                  id="inquiry-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe what you need"
                  className="w-full resize-y rounded-[14px] border border-zinc-200 bg-white px-4 py-3.5 text-[15px] text-zinc-900 placeholder:text-zinc-400 transition-all focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
                />
              </div>

              {/* Error Message */}
              {errorMessage && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-[13px] text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-[#18181B] py-4 text-[15px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-black active:scale-[0.99] disabled:opacity-70 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Inquiry</span>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
