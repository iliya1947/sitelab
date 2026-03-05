'use client';

import { useTranslations } from '@/hooks/useTranslations';
import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const t = useTranslations();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-8 shadow-card">
      <label className="block">
        <span>{t.contact.name}</span>
        <input required name="name" className="mt-1 w-full" placeholder={t.contact.name} />
      </label>
      <label className="block">
        <span>{t.contact.email}</span>
        <input required type="email" name="email" className="mt-1 w-full" placeholder={t.contact.email} />
      </label>
      <label className="block">
        <span>{t.contact.message}</span>
        <textarea required name="message" rows={4} className="mt-1 w-full" placeholder={t.contact.message} />
      </label>
      <button className="primary-btn font-semibold" type="submit">
        {t.contact.submit}
      </button>
      {isSubmitted && <p className="text-sm text-cyan-300">{t.contact.success}</p>}
    </form>
  );
}
