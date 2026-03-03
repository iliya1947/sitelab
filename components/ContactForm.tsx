'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm({ labels }: { labels: { submit: string; name: string; email: string; message: string } }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: connect this form with backend endpoint / CRM integration.
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
      <label className="block">
        <span>{labels.name}</span>
        <input required name="name" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
      </label>
      <label className="block">
        <span>{labels.email}</span>
        <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
      </label>
      <label className="block">
        <span>{labels.message}</span>
        <textarea required name="message" rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2" />
      </label>
      <button className="rounded-full bg-brand-700 px-5 py-2 font-semibold text-white hover:bg-brand-900" type="submit">
        {labels.submit}
      </button>
      {isSubmitted && <p className="text-sm text-green-700">Thanks! We will contact you soon.</p>}
    </form>
  );
}
