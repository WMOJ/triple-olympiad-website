"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function TimerPage() {
    const [timeLeft, setTimeLeft] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [duration, setDuration] = useState(0);

    const [inputHours, setInputHours] = useState("");
    const [inputMinutes, setInputMinutes] = useState("");
    const [inputSeconds, setInputSeconds] = useState("");

    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && isActive) {
            setIsActive(false);
            if (audioRef.current) {
                audioRef.current.play().catch((e) => console.error("Audio play failed:", e));
            }
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, timeLeft]);

    const handleStart = () => {
        if (timeLeft > 0) {
            setIsActive(true);
            if (duration === 0) setDuration(timeLeft);
        } else {
            const hrs = parseInt(inputHours) || 0;
            const mins = parseInt(inputMinutes) || 0;
            const secs = parseInt(inputSeconds) || 0;
            const total = (hrs * 3600) + (mins * 60) + secs;
            if (total > 0) {
                setTimeLeft(total);
                setDuration(total);
                setIsActive(true);
            }
        }
    };

    const handleStop = () => setIsActive(false);

    const handleReset = () => {
        setIsActive(false);
        setTimeLeft(duration);
    };

    const handleClear = () => {
        setIsActive(false);
        setTimeLeft(0);
        setDuration(0);
        setInputHours("");
        setInputMinutes("");
        setInputSeconds("");
    };

    // Progress Ring Calculation
    const percentage = duration > 0 ? timeLeft / duration : 0;
    // Increased size even more as requested (was 600)
    const size = 800;
    const strokeWidth = 8;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - percentage * circumference;

    const formatTime = (totalSeconds: number) => {
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        if (h > 0) {
            return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
        }
        return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setter: (val: string) => void
    ) => {
        const val = e.target.value;
        if (val.length <= 2) setter(val);
    };

    return (
        <div className="min-h-screen relative flex flex-col items-center justify-center p-4 font-sans text-white overflow-hidden" style={{ backgroundColor: "#001002" }}>

            {/* ===== BACKGROUND ASSETS (Matching Home Page) ===== */}
            <div className="fixed inset-0 pointer-events-none w-full h-full overflow-hidden">
                <div
                    className="absolute inset-0 animate-background-fade-in"
                    style={{
                        backgroundImage: "url(/background_art.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        opacity: 0.7,
                    }}
                />
                <img
                    src="/bg_decor.svg"
                    alt=""
                    className="absolute top-4 right-2 w-150 h-auto opacity-50"
                />
                <img
                    src="/side_glow.png"
                    alt=""
                    className="absolute top-0 right-0 w-2/3 h-auto opacity-40 -z-10 mix-blend-screen"
                />
            </div>

            <main className="relative z-10 flex flex-col items-center w-full max-w-[90vw] mx-auto">

                {/* Main Stage: Reserves space for the ring so controls don't overlap */}
                <div
                    className="relative flex items-center justify-center mb-8"
                    style={{ width: size, height: size, maxWidth: '90vw', maxHeight: '90vw' }}
                >
                    {/* 1. Progress Ring Layer */}
                    {(isActive || timeLeft > 0) && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <svg
                                width="100%"
                                height="100%"
                                className="transform -rotate-90"
                                viewBox={`0 0 ${size} ${size}`}
                                style={{ overflow: 'visible' }}
                            >
                                {/* Track */}
                                <circle
                                    cx={size / 2}
                                    cy={size / 2}
                                    r={radius}
                                    fill="none"
                                    stroke="rgba(255, 255, 255, 0.05)"
                                    strokeWidth={strokeWidth}
                                />
                                {/* Indicator */}
                                <circle
                                    cx={size / 2}
                                    cy={size / 2}
                                    r={radius}
                                    fill="none"
                                    stroke="#3ec05e"
                                    strokeWidth={strokeWidth}
                                    strokeDasharray={circumference}
                                    strokeDashoffset={strokeDashoffset}
                                    strokeLinecap="round"
                                    className="transition-[stroke-dashoffset] duration-1000 ease-linear shadow-[0_0_20px_#3ec05e]"
                                />
                            </svg>
                        </div>
                    )}

                    {/* 2. Content Layer (Time/Inputs) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                        {!isActive && timeLeft === 0 && duration === 0 ? (
                            // Setup Mode
                            <div className="flex items-center gap-2 md:gap-4 animate-scale-in">
                                {/* HOURS */}
                                <div className="flex flex-col items-center">
                                    <input
                                        type="number"
                                        placeholder="00"
                                        value={inputHours}
                                        onChange={(e) => handleInputChange(e, setInputHours)}
                                        className="w-24 md:w-32 bg-transparent text-center text-5xl md:text-8xl font-bold text-white placeholder-white/10 focus:outline-none focus:placeholder-white/5 transition-all border-b-2 border-white/10 focus:border-[#3ec05e]"
                                    />
                                    <span className="text-sm text-white/40 mt-2 uppercase tracking-widest">Hours</span>
                                </div>

                                <span className="text-5xl md:text-8xl font-bold text-white/20 pb-8">:</span>

                                {/* MINUTES */}
                                <div className="flex flex-col items-center">
                                    <input
                                        type="number"
                                        placeholder="00"
                                        value={inputMinutes}
                                        onChange={(e) => handleInputChange(e, setInputMinutes)}
                                        className="w-24 md:w-32 bg-transparent text-center text-5xl md:text-8xl font-bold text-white placeholder-white/10 focus:outline-none focus:placeholder-white/5 transition-all border-b-2 border-white/10 focus:border-[#3ec05e]"
                                    />
                                    <span className="text-sm text-white/40 mt-2 uppercase tracking-widest">Mins</span>
                                </div>

                                <span className="text-5xl md:text-8xl font-bold text-white/20 pb-8">:</span>

                                {/* SECONDS */}
                                <div className="flex flex-col items-center">
                                    <input
                                        type="number"
                                        placeholder="00"
                                        value={inputSeconds}
                                        onChange={(e) => handleInputChange(e, setInputSeconds)}
                                        className="w-24 md:w-32 bg-transparent text-center text-5xl md:text-8xl font-bold text-white placeholder-white/10 focus:outline-none focus:placeholder-white/5 transition-all border-b-2 border-white/10 focus:border-[#3ec05e]"
                                    />
                                    <span className="text-sm text-white/40 mt-2 uppercase tracking-widest">Secs</span>
                                </div>
                            </div>
                        ) : (
                            // Display Mode
                            <div className="text-center animate-scale-in relative flex flex-col items-center w-full">
                                <h1 className="text-[12vw] md:text-[160px] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tighter tabular-nums drop-shadow-[0_0_30px_rgba(62,192,94,0.2)]">
                                    {formatTime(timeLeft)}
                                </h1>

                                {/* Status Text - Relative inside the flow */}
                                <div className="mt-4 md:mt-8 w-full text-center">
                                    {isActive && (
                                        <p className="text-[#3ec05e] tracking-[0.3em] font-medium animate-pulse text-lg md:text-xl">
                                            TIMER RUNNING
                                        </p>
                                    )}
                                    {!isActive && timeLeft > 0 && (
                                        <p className="text-yellow-400 tracking-[0.3em] font-medium text-lg md:text-xl">PAUSED</p>
                                    )}
                                    {!isActive && timeLeft === 0 && (
                                        <p className="text-red-500 tracking-[0.3em] font-medium animate-bounce text-lg md:text-xl">
                                            TIME IS UP
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-6 z-30 pt-4 pb-12">
                    {!isActive && timeLeft === 0 && duration === 0 ? (
                        <button
                            onClick={handleStart}
                            disabled={!inputHours && !inputMinutes && !inputSeconds}
                            className="px-12 py-4 bg-[#3ec05e] hover:bg-[#2ea048] disabled:opacity-50 disabled:hover:bg-[#3ec05e] text-black font-bold text-xl rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(62,192,94,0.4)] hover:shadow-[0_0_50px_rgba(62,192,94,0.6)]"
                        >
                            START TIMER
                        </button>
                    ) : (
                        <>
                            {!isActive && timeLeft === 0 ? (
                                <button
                                    onClick={handleClear}
                                    className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all"
                                >
                                    New Timer
                                </button>
                            ) : (
                                <div className="flex gap-4">
                                    {isActive ? (
                                        <button
                                            onClick={handleStop}
                                            className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
                                        >
                                            <svg
                                                className="w-6 h-6 fill-current"
                                                viewBox="0 0 24 24"
                                            >
                                                <rect x="6" y="6" width="12" height="12" rx="2" />
                                            </svg>
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleStart}
                                            className="w-16 h-16 rounded-full bg-[#3ec05e]/10 border border-[#3ec05e]/50 text-[#3ec05e] hover:bg-[#3ec05e] hover:text-black flex items-center justify-center transition-all hover:shadow-[0_0_30px_rgba(62,192,94,0.4)]"
                                        >
                                            <svg
                                                className="w-8 h-8 fill-current ml-1"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </button>
                                    )}

                                    <button
                                        onClick={handleReset}
                                        className="w-16 h-16 rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all"
                                        title="Restart"
                                    >
                                        <svg
                                            className="w-6 h-6 stroke-current"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                            />
                                        </svg>
                                    </button>

                                    <button
                                        onClick={handleClear}
                                        className="w-16 h-16 rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/20 flex items-center justify-center transition-all"
                                        title="Clear"
                                    >
                                        <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </main>

            <audio ref={audioRef} src="/Ding Sound.mp3" preload="auto" />
        </div>
    );
}
