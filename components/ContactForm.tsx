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
    <form onSubmit={onSubmit} className="card space-y-5 p-8 shadow-card">
      <label className="block">
        <span>{labels.name}</span>
        <input required name="name" className="mt-1 w-full" placeholder={labels.name} />
      </label>
      <label className="block">
        <span>{labels.email}</span>
        <input required type="email" name="email" className="mt-1 w-full" placeholder={labels.email} />
      </label>
      <label className="block">
        <span>{labels.message}</span>
        <textarea required name="message" rows={4} className="mt-1 w-full" placeholder={labels.message} />
      </label>
      <button className="primary-btn font-semibold" type="submit">
        {labels.submit}
      </button>
      {isSubmitted && <p className="text-sm text-cyan-300">Thanks! We will contact you soon.</p>}
    </form>
  );
}
