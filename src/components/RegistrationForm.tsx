'use client';

import { useEffect, useRef, useState } from 'react';
import { DAYS } from '@/lib/olympiad';
import { Arrow } from "@/components/Arrow";

const GRADES = ['9', '10', '11', '12', 'Other'];

export default function RegistrationForm({ initialSections = [] }: { initialSections?: string[] }) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        grade: '',
        otherGrade: '',
        sections: initialSections,
        allergies: '',
        questions: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const closeRef = useRef<HTMLButtonElement>(null);
    const helpTriggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isHelpOpen) return;
        closeRef.current?.focus();
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsHelpOpen(false);
        };
        window.addEventListener('keydown', onKey);
        const trigger = helpTriggerRef.current;
        return () => {
            window.removeEventListener('keydown', onKey);
            trigger?.focus();
        };
    }, [isHelpOpen]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData((prev) => {
            const sections = checked
                ? [...prev.sections, value]
                : prev.sections.filter((s) => s !== value);
            return { ...prev, sections };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.sections.length === 0) {
            setStatus('error');
            setErrorMessage('Pick at least one day (Math, Computer Science or Physics) before submitting.');
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        try {
            const payload = {
                ...formData,
                grade: formData.grade === 'Other' ? formData.otherGrade : formData.grade
            };

            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong');
            }

            setStatus('success');
            setFormData({
                fullName: '',
                email: '',
                grade: '',
                otherGrade: '',
                sections: [],
                allergies: '',
                questions: '',
            });
        } catch (error: unknown) {
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : '');
        }
    };

    const labelCls = 'block text-[0.9375rem] font-semibold text-fg';
    const reqMark = <span className="text-brand-accent" aria-hidden="true"> *</span>;

    return (
        <section className="wrap pt-12 md:pt-20" id="register" aria-labelledby="register-title">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
                {/* Left: what you are signing up for */}
                <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-28">
                        <h1 id="register-title" className="display text-[clamp(2.75rem,7vw,5rem)]">
                            Register
                        </h1>
                        <p className="mt-5 text-fg-2 text-lg leading-snug max-w-[34ch]">
                            Join the Triolympiad and showcase your skills!
                        </p>

                        <dl className="mt-8 grid grid-cols-3 gap-[3px] max-w-md">
                            <div className="cell min-h-[6rem] p-3">
                                <dt className="cell-num">When</dt>
                                <dd className="text-[0.875rem] font-medium leading-snug">Dec 15-17, 2026</dd>
                            </div>
                            <div className="cell min-h-[6rem] p-3">
                                <dt className="cell-num">Time</dt>
                                <dd className="text-[0.875rem] font-medium leading-snug">3:00-5:30 PM</dd>
                            </div>
                            <div className="cell min-h-[6rem] p-3">
                                <dt className="cell-num">Cost</dt>
                                <dd className="text-[0.875rem] font-medium leading-snug">Free</dd>
                            </div>
                        </dl>

                        <button
                            ref={helpTriggerRef}
                            type="button"
                            onClick={() => setIsHelpOpen(true)}
                            className="btn btn-ghost mt-8"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                                <path d="M5 3.5v9l7.5-4.5z" fill="currentColor" />
                            </svg>
                            Help me: watch the tutorial
                        </button>
                    </div>
                </div>

                {/* Right: the form */}
                <div className="lg:col-span-7">
                    <div className="border border-line bg-ink-1 p-5 sm:p-8 md:p-10">
                        {status === 'success' ? (
                            <div className="py-6" role="status">
                                <div className="cell cell--lit h-24 w-24">
                                    <span className="cell-num">OK</span>
                                    <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
                                        <path d="M6 18l7.5 7.5L28 9" fill="none" stroke="currentColor" strokeWidth="3.2" />
                                    </svg>
                                    <span className="cell-name">Registered</span>
                                </div>
                                <h2 className="heading mt-8 text-[2rem]">Registration Successful!</h2>
                                <p className="mt-3 text-fg-2 text-lg">
                                    Thank you for registering. We look forward to seeing you there!
                                </p>
                                <button
                                    type="button"
                                    onClick={() => setStatus('idle')}
                                    className="btn btn-ghost mt-8"
                                >
                                    Register Another Student
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-9">
                                {/* Full Name */}
                                <div className="space-y-2">
                                    <label htmlFor="fullName" className={labelCls}>
                                        Full Name{reqMark}
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        autoComplete="name"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Your answer"
                                        className="field"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className={labelCls}>
                                        Email{reqMark}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="your.email@example.com"
                                        className="field"
                                    />
                                </div>

                                {/* Grade */}
                                <fieldset>
                                    <legend className={labelCls}>
                                        Grade{reqMark}
                                    </legend>
                                    <div className="mt-3 grid grid-cols-5 gap-[3px] max-w-md">
                                        {GRADES.map((option) => (
                                            <label
                                                key={option}
                                                className="choice flex h-12 items-center justify-center text-[0.9375rem] font-semibold"
                                            >
                                                <input
                                                    type="radio"
                                                    name="grade"
                                                    value={option}
                                                    required
                                                    checked={formData.grade === option}
                                                    onChange={handleInputChange}
                                                    className="sr-only"
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>

                                    {formData.grade === 'Other' && (
                                        <div className="mt-3">
                                            <label htmlFor="otherGrade" className="sr-only">Your grade</label>
                                            <input
                                                type="text"
                                                id="otherGrade"
                                                name="otherGrade"
                                                value={formData.otherGrade}
                                                onChange={handleInputChange}
                                                placeholder="Please specify your grade"
                                                required={formData.grade === 'Other'}
                                                className="field"
                                            />
                                        </div>
                                    )}
                                </fieldset>

                                {/* Sections: the three elements */}
                                <fieldset>
                                    <legend className={labelCls}>
                                        Which section(s) do you intend to participate in?{reqMark}
                                    </legend>
                                    <p className="mt-1 text-sm text-fg-3" id="sections-hint">Pick one day or all three.</p>
                                    <div className="mt-4 grid grid-cols-3 gap-[3px]">
                                        {DAYS.map((d) => (
                                            <label key={d.value} className="choice cell h-[7.25rem] sm:h-[8rem] p-3">
                                                <input
                                                    type="checkbox"
                                                    value={d.value}
                                                    checked={formData.sections.includes(d.value)}
                                                    onChange={handleCheckboxChange}
                                                    aria-describedby="sections-hint"
                                                    className="sr-only"
                                                />
                                                <span className="flex items-start justify-between gap-1">
                                                    <span className="cell-num">{d.n}</span>
                                                    <span className="cell-num">{d.weekday}</span>
                                                </span>
                                                <span className="cell-sym text-[2rem] sm:text-[2.4rem]" aria-hidden="true">{d.symbol}</span>
                                                <span className="cell-name text-[0.8125rem] sm:text-[0.875rem] !whitespace-normal">
                                                    {d.value}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </fieldset>

                                {/* Allergies */}
                                <div className="space-y-2">
                                    <label htmlFor="allergies" className={labelCls}>
                                        Any food allergies? <span className="font-normal text-fg-3">(for snacks)</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="allergies"
                                        name="allergies"
                                        value={formData.allergies}
                                        onChange={handleInputChange}
                                        placeholder="Your answer"
                                        className="field"
                                    />
                                </div>

                                {/* Questions */}
                                <div className="space-y-2">
                                    <label htmlFor="questions" className={labelCls}>
                                        Questions or comments
                                    </label>
                                    <textarea
                                        id="questions"
                                        name="questions"
                                        value={formData.questions}
                                        onChange={handleInputChange}
                                        placeholder="Your answer"
                                        rows={3}
                                        className="field resize-y min-h-[6rem]"
                                    />
                                </div>

                                {/* Error Message */}
                                {status === 'error' && (
                                    <div role="alert" className="flex gap-3 border border-[#7a2b2b] bg-[#1d0b0b] p-4 text-[0.9375rem] text-[#ffb4b4]">
                                        <span className="font-semibold">Not sent.</span>
                                        <span>{errorMessage || 'An error occurred. Please try again.'}</span>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="btn btn-primary w-full min-h-14 text-[1.0625rem]"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                                                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
                                                <path d="M21 12a9 9 0 0 0-9-9" fill="none" stroke="currentColor" strokeWidth="3" />
                                            </svg>
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Submit Registration
                                            <Arrow />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Help Video Modal */}
            {isHelpOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-ground/90 p-4"
                    onClick={() => setIsHelpOpen(false)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="help-title"
                        className="relative w-full max-w-4xl border border-line-2 bg-ink-1 animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-line px-4 py-3">
                            <h2 id="help-title" className="heading text-lg">
                                Registration Tutorial
                            </h2>
                            <button
                                ref={closeRef}
                                type="button"
                                onClick={() => setIsHelpOpen(false)}
                                aria-label="Close tutorial"
                                className="inline-flex h-10 w-10 items-center justify-center border border-line-2 text-fg hover:border-brand transition-colors"
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                                    <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" />
                                </svg>
                            </button>
                        </div>
                        <div className="relative aspect-video bg-black">
                            <video
                                src="/Registration%20tutorial.mp4"
                                controls
                                className="w-full h-full"
                                autoPlay
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
