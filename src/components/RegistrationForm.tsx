'use client';

import { useState } from 'react';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        grade: '',
        sections: [] as string[],
        allergies: '',
        questions: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

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
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
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
                sections: [],
                allergies: '',
                questions: '',
            });
        } catch (error: any) {
            setStatus('error');
            setErrorMessage(error.message);
        }
    };

    return (
        <section className="relative py-24 px-4 overflow-hidden" id="register">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Register Now</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Join the Triolympiad and showcase your skills!
                    </p>
                </div>

                <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />

                    {status === 'success' ? (
                        <div className="text-center py-12 animate-fade-in-up">
                            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg
                                    className="w-10 h-10 text-emerald-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Registration Successful!</h3>
                            <p className="text-gray-400">
                                Thank you for registering. We look forward to seeing you there!
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-8 px-6 py-2 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                            >
                                Register Another Student
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Full Name */}
                            <div className="space-y-2">
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300">
                                    Full Name <span className="text-emerald-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Your answer"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder-gray-500"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                                    Email <span className="text-emerald-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="your.email@example.com"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder-gray-500"
                                />
                            </div>

                            {/* Grade */}
                            <div className="space-y-3">
                                <label className="block text-sm font-medium text-gray-300">
                                    Grade <span className="text-emerald-500">*</span>
                                </label>
                                <div className="flex flex-wrap gap-4">
                                    {['9', '10', '11', '12', 'Other'].map((option) => (
                                        <label
                                            key={option}
                                            className={`
                        flex items-center justify-center px-6 py-2 rounded-full cursor-pointer border transition-all
                        ${formData.grade === option
                                                    ? 'bg-emerald-500/20 border-emerald-500 text-white shadow-[0_0_15px_rgba(62,192,94,0.3)]'
                                                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:bg-white/10'
                                                }
                      `}
                                        >
                                            <input
                                                type="radio"
                                                name="grade"
                                                value={option}
                                                checked={formData.grade === option}
                                                onChange={handleInputChange}
                                                className="hidden"
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Sections */}
                            <div className="space-y-3">
                                <label className="block text-sm font-medium text-gray-300">
                                    Which section(s) do you intend to participate in? <span className="text-emerald-500">*</span>
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {['Physics', 'Math', 'Computer Science'].map((option) => (
                                        <label
                                            key={option}
                                            className={`
                        flex items-center p-4 rounded-xl cursor-pointer border transition-all
                        ${formData.sections.includes(option)
                                                    ? 'bg-emerald-500/10 border-emerald-500/50 text-white'
                                                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:bg-white/10'
                                                }
                      `}
                                        >
                                            <div className="relative flex items-center">
                                                <input
                                                    type="checkbox"
                                                    value={option}
                                                    checked={formData.sections.includes(option)}
                                                    onChange={handleCheckboxChange}
                                                    className="sr-only"
                                                />
                                                <div className={`
                                                    w-5 h-5 rounded border-2 flex items-center justify-center mr-3 transition-all
                                                    ${formData.sections.includes(option)
                                                        ? 'bg-emerald-500 border-emerald-500'
                                                        : 'border-gray-600 bg-transparent'
                                                    }
                                                `}>
                                                    {formData.sections.includes(option) && (
                                                        <svg
                                                            className="w-3 h-3 text-white"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={3}
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    )}
                                                </div>
                                            </div>
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Allergies */}
                            <div className="space-y-2">
                                <label htmlFor="allergies" className="block text-sm font-medium text-gray-300">
                                    Any food allergies? (for snacks)
                                </label>
                                <input
                                    type="text"
                                    id="allergies"
                                    name="allergies"
                                    value={formData.allergies}
                                    onChange={handleInputChange}
                                    placeholder="Your answer"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder-gray-500"
                                />
                            </div>

                            {/* Questions */}
                            <div className="space-y-2">
                                <label htmlFor="questions" className="block text-sm font-medium text-gray-300">
                                    Questions or comments
                                </label>
                                <textarea
                                    id="questions"
                                    name="questions"
                                    value={formData.questions}
                                    onChange={handleInputChange}
                                    placeholder="Your answer"
                                    rows={3}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-white placeholder-gray-500 resize-none"
                                />
                            </div>

                            {/* Error Message */}
                            {status === 'error' && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                                    {errorMessage || 'An error occurred. Please try again.'}
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full btn-gradient text-white font-bold py-4 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Submit Registration
                                        <svg
                                            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
