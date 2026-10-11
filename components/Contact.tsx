"use client";

import { useState, type FormEvent } from "react";
import Title from "./Ui/Title";
import { useLanguage } from "@/lib/i18n";
import Link from "next/link";
import { socialMedia } from "@/data/social-media";
import { FaPaperPlane } from "react-icons/fa";

const socialHovers: Record<string, string> = {
  Facebook: "hover:text-blue-500",
  Twitter: "hover:text-blue-400",
  Instagram: "hover:text-pink-500",
  LinkedIn: "hover:text-blue-700",
  YouTube: "hover:text-red-600",
};

type Errors = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass = (invalid: boolean) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-sm sm:text-base text-primary placeholder:text-[#9AA0A6] outline-none transition-all duration-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/30 ${
    invalid ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-black/10 hover:border-primary/30"
  }`;

const Contact = () => {
  const { t } = useLanguage();
  const c = t.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [notice, setNotice] = useState<null | { kind: "error" | "info"; text: string }>(null);

  const validate = (): Errors => {
    const next: Errors = {};
    if (!name.trim()) next.name = c.validation.nameRequired;
    if (!email.trim()) {
      next.email = c.validation.emailRequired;
    } else if (!EMAIL_RE.test(email.trim())) {
      next.email = c.validation.emailInvalid;
    }
    if (!message.trim()) next.message = c.validation.messageRequired;
    return next;
  };

  // Frontend-only: no submission service is configured in this project.
  // We validate on the client and honestly report that delivery is not
  // wired up yet, instead of faking a success. When a real service is
  // added, replace the block below with the async send call.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setNotice({ kind: "error", text: c.status.fixErrors });
      return;
    }
    setNotice({ kind: "info", text: c.status.notConfigured });
  };

  const clearNoticeOnChange = () => {
    if (notice) setNotice(null);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-padding scroll-mt-20">
      <div className="custom-container">
        <div id="contact-heading">
          <Title
            isCenter={true}
            isLeaf={false}
            heading={c.eyebrow}
            subHeading={c.title}
            subHeadingClassName="text-primary! mb-4 sm:mb-6"
          />
        </div>
        <p className="mx-auto max-w-2xl text-center text-sm leading-7 text-[#5F6369] sm:text-base">
          {c.description}
        </p>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-5">
          <form
            noValidate
            onSubmit={handleSubmit}
            aria-describedby={notice ? "contact-status" : undefined}
            className="rounded-4xl border border-black/10 bg-white p-6 shadow-sm sm:p-8 md:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-sm font-bold text-primary sm:text-base">
                  {c.form.nameLabel} <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  placeholder={c.form.namePlaceholder}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    clearNoticeOnChange();
                  }}
                  className={inputClass(Boolean(errors.name))}
                />
                {errors.name && (
                  <p id="contact-name-error" role="alert" className="text-xs text-red-600 sm:text-sm">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-sm font-bold text-primary sm:text-base">
                  {c.form.emailLabel} <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  placeholder={c.form.emailPlaceholder}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    clearNoticeOnChange();
                  }}
                  className={inputClass(Boolean(errors.email))}
                />
                {errors.email && (
                  <p id="contact-email-error" role="alert" className="text-xs text-red-600 sm:text-sm">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="contact-subject" className="text-sm font-bold text-primary sm:text-base">
                {c.form.subjectLabel} <span className="font-normal text-[#9AA0A6]">({c.form.optional})</span>
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                autoComplete="off"
                placeholder={c.form.subjectPlaceholder}
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  clearNoticeOnChange();
                }}
                className={inputClass(false)}
              />
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-sm font-bold text-primary sm:text-base">
                {c.form.messageLabel} <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                aria-required="true"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                placeholder={c.form.messagePlaceholder}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  clearNoticeOnChange();
                }}
                className={`${inputClass(Boolean(errors.message))} min-h-32 resize-y`}
              />
              {errors.message && (
                <p id="contact-message-error" role="alert" className="text-xs text-red-600 sm:text-sm">
                  {errors.message}
                </p>
              )}
            </div>

            {notice && (
              <div
                id="contact-status"
                role="status"
                className={`mt-5 rounded-xl border px-4 py-3 text-sm leading-7 sm:text-base ${
                  notice.kind === "error"
                    ? "border-red-500/40 bg-red-50 text-red-700"
                    : "border-orange-500/40 bg-orange-50 text-orange-800"
                }`}
              >
                {notice.text}
              </div>
            )}

            <div className="mt-6 w-fit">
              <button type="submit" className="custom-green-btn group px-6!">
                {c.form.submit} <FaPaperPlane className="mirror-rtl transition-transform duration-300 group-hover:scale-[1.2]" />
              </button>
            </div>
          </form>

          {/* Contact information: only details that genuinely exist in the
              repository. No phone, email, address, or hours are invented —
              the social links from data/social-media.tsx are the only
              configured contact channels. */}
          <aside
            aria-label={c.info.title}
            className="flex flex-col gap-6 rounded-4xl bg-green-500 p-6 text-white sm:p-8 md:col-span-2"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold sm:text-xl">{c.info.title}</h3>
              <p className="text-sm leading-7 text-white/85">{c.info.description}</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold uppercase tracking-wide text-white/70">
                {c.info.socialLabel}
              </h4>
              <div className="flex flex-wrap items-center gap-3">
                {socialMedia.map(({ name, href, Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className={`flex h-11 w-11 items-center justify-center rounded-full bg-white text-green-600 transition-all duration-300 hover:scale-105 active:scale-95 ${socialHovers[name] ?? ""}`}
                  >
                    <Icon className="text-xl" />
                  </Link>
                ))}
              </div>
              <p className="text-xs leading-6 text-white/70">{c.info.socialNote}</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
