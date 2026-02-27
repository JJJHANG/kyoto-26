import React, { useState, useRef, useEffect } from "react";
import {
    MapPin,
    Sun,
    Moon,
    Info,
    Utensils,
    Bed,
    Camera,
    Car,
    ChevronRight,
    Leaf,
    X,
    Star,
    Tag,
    Copy,
    Check,
    Ticket,
} from "lucide-react";
import { ITINERARY } from "./data";
import { DailyPlan, Activity } from "./types";

const optimizeImageUrl = (url: string): string => {
    if (
        url.includes("commons.wikimedia.org/wiki/Special:FilePath/") &&
        !url.includes("width=")
    ) {
        const separator = url.includes("?") ? "&" : "?";
        return `${url}${separator}width=1400`;
    }

    return url;
};

// --- Icons Helper ---
const getActivityIcon = (type: string) => {
    switch (type) {
        case "transport":
            return <Car className="w-4 h-4" />;
        case "food":
            return <Utensils className="w-4 h-4" />;
        case "stay":
            return <Bed className="w-4 h-4" />;
        case "sightseeing":
            return <Camera className="w-4 h-4" />;
        case "info":
            return <Info className="w-4 h-4" />;
        default:
            return <div className="w-2 h-2 rounded-full bg-kyoto-matcha" />;
    }
};

// --- Bottom Sheet Dialog ---
const ActivityBottomSheet: React.FC<{
    activity: Activity | null;
    onClose: () => void;
}> = ({ activity, onClose }) => {
    const [isRendered, setIsRendered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    // Persist the activity data locally to prevent content from disappearing during exit animation
    const [displayActivity, setDisplayActivity] = useState<Activity | null>(
        null,
    );
    const [copiedValue, setCopiedValue] = useState<string | null>(null);

    useEffect(() => {
        if (activity) {
            setDisplayActivity(activity); // Update content immediately when opening
            setIsRendered(true);
            document.body.style.overflow = "hidden";

            requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsVisible(true));
            });
        } else {
            setIsVisible(false);
            document.body.style.overflow = "";

            // Wait for animation to finish before unmounting
            const timer = setTimeout(() => {
                setIsRendered(false);
            }, 600);
            return () => clearTimeout(timer);
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [activity]);

    const handleCopy = (value: string) => {
        navigator.clipboard.writeText(value);
        setCopiedValue(value);
        setTimeout(() => setCopiedValue(null), 2000);
    };

    if (!isRendered) return null;

    // Use the persistent state for rendering
    const content = displayActivity;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 z-50 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
                onClick={onClose}
            >
                <div className="absolute inset-0 dialog-backdrop"></div>
            </div>

            {/* Sheet Container */}
            <div
                className={`fixed bottom-0 left-0 right-0 z-50 bg-kyoto-base rounded-t-[2rem] shadow-[0_-10px_60px_-15px_rgba(43,43,43,0.2)] slide-up-transition flex flex-col max-h-[65vh] ${isVisible ? "translate-y-0" : "translate-y-full"}`}
            >
                {/* Handle Bar Area */}
                <div className="pt-5 pb-2 px-6 flex-shrink-0 relative z-50">
                    <div className="w-12 h-1 bg-kyoto-wood/20 rounded-full mx-auto mb-2"></div>
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 z-50 p-2 bg-kyoto-mist/10 rounded-full text-kyoto-ink hover:bg-kyoto-sakura hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {content && (
                    <div className="overflow-y-auto px-6 pb-12 scrollbar-hide">
                        {/* Header Section */}
                        <div className="flex items-start gap-5 mb-6">
                            <div
                                className={`p-4 rounded-xl shadow-sm shrink-0 mt-1 ${
                                    content.type === "sightseeing"
                                        ? "bg-kyoto-matcha text-white"
                                        : content.type === "food"
                                          ? "bg-kyoto-sakura text-white"
                                          : content.type === "transport"
                                            ? "bg-kyoto-indigo text-white"
                                            : "bg-kyoto-gold text-white"
                                }`}
                            >
                                {React.cloneElement(
                                    getActivityIcon(
                                        content.type,
                                    ) as React.ReactElement<{
                                        className?: string;
                                    }>,
                                    { className: "w-7 h-7" },
                                )}
                            </div>
                            <div className="flex-1">
                                <span className="text-xs font-sans font-bold text-kyoto-wood tracking-wider uppercase mb-2 block opacity-80">
                                    {content.time && content.time !== "Info"
                                        ? content.time
                                        : "詳細資訊"}
                                </span>
                                <h3 className="text-2xl font-serif font-bold text-kyoto-ink leading-snug mb-2">
                                    {content.title}
                                </h3>
                                {content.description && (
                                    <p className="text-kyoto-ink/70 font-sans text-base leading-relaxed">
                                        {content.description}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Tags Section */}
                        {content.tags && content.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6 ml-[4.5rem]">
                                {content.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center px-2.5 py-1 rounded-md bg-kyoto-paper border border-kyoto-wood/20 text-xs text-kyoto-wood font-sans font-medium"
                                    >
                                        <Tag className="w-3 h-3 mr-1 opacity-50" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Booking Info Card (New) */}
                        {content.bookingInfo &&
                            content.bookingInfo.length > 0 && (
                                <div className="mb-8 relative group">
                                    {/* Ticket effect edges */}
                                    <div className="bg-white border-2 border-dashed border-kyoto-wood/20 rounded-xl p-5 relative shadow-sm overflow-hidden">
                                        <h4 className="flex items-center gap-2 text-xs font-bold text-kyoto-wood uppercase tracking-widest mb-4 font-sans relative z-5">
                                            <Ticket className="w-4 h-4" />
                                            Booking Information
                                        </h4>

                                        <div className="grid grid-cols-1 gap-3 relative z-10">
                                            {content.bookingInfo.map(
                                                (info, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center justify-between py-2 border-b border-kyoto-base last:border-0"
                                                    >
                                                        <span className="text-sm text-kyoto-mist font-medium">
                                                            {info.label}
                                                        </span>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-base font-serif font-bold text-kyoto-ink">
                                                                {info.value}
                                                            </span>
                                                            {info.copyable && (
                                                                <button
                                                                    onClick={() =>
                                                                        handleCopy(
                                                                            info.value,
                                                                        )
                                                                    }
                                                                    className="p-1.5 rounded-full hover:bg-kyoto-base transition-colors text-kyoto-wood/50 hover:text-kyoto-wood"
                                                                >
                                                                    {copiedValue ===
                                                                    info.value ? (
                                                                        <Check className="w-4 h-4 text-green-500" />
                                                                    ) : (
                                                                        <Copy className="w-4 h-4" />
                                                                    )}
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}

                        {/* Spot Cards */}
                        {content.spotCards && content.spotCards.length > 0 && (
                            <div className="mb-8">
                                <h4 className="flex items-center gap-2 text-xs font-bold text-kyoto-wood uppercase tracking-widest mb-3 font-sans">
                                    <Utensils className="w-4 h-4" />
                                    推薦店家
                                </h4>
                                <div className="grid grid-cols-1 gap-3">
                                    {content.spotCards.map((spot, idx) => {
                                        return (
                                            <div
                                                key={`${spot.name}-${idx}`}
                                                className="text-left p-4 rounded-xl border border-kyoto-wood/20 bg-white shadow-sm"
                                            >
                                                <p className="text-base font-sans font-bold text-kyoto-ink">
                                                    {spot.name}
                                                </p>
                                                {spot.subtitle && (
                                                    <p className="text-sm text-kyoto-ink/70 mt-1">
                                                        {spot.subtitle}
                                                    </p>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Taxi / Address Card */}
                        {(content.jpName || content.address) && (
                            <div className="mb-8 p-5 bg-[#FDFBF7] border-2 border-kyoto-wood/10 rounded-xl relative shadow-sm">
                                <span className="absolute -top-3 left-4 bg-kyoto-wood text-white text-[10px] px-2 py-0.5 rounded tracking-widest uppercase font-bold">
                                    Taxi Card / 問路
                                </span>
                                <div className="pt-2">
                                    {content.jpName && (
                                        <p className="text-xl font-serif font-black text-kyoto-ink mb-2 leading-relaxed tracking-wide select-all">
                                            {content.jpName}
                                        </p>
                                    )}
                                    {content.address && (
                                        <p className="text-sm font-sans text-kyoto-wood/80 select-all border-t border-kyoto-wood/10 pt-2 mt-1">
                                            {content.address}
                                        </p>
                                    )}
                                    <p className="text-[10px] text-right text-kyoto-mist mt-3 italic">
                                        請出示此卡給司機或路人看
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Guide Notes */}
                        <div className="bg-kyoto-paper p-6 rounded-2xl border border-kyoto-wood/20 relative overflow-hidden shadow-sm">
                            <h4 className="flex items-center gap-2 text-sm font-bold text-kyoto-wood uppercase tracking-widest mb-4 font-sans relative z-10 border-b border-kyoto-wood/10 pb-2">
                                旅人筆記
                            </h4>

                            <div className="prose prose-stone prose-lg max-w-none font-serif text-kyoto-ink/90 leading-8 relative z-10 text-justify">
                                {content.guideNotes ? (
                                    content.guideNotes
                                        .split("\n")
                                        .map((paragraph, idx) => (
                                            <p
                                                key={idx}
                                                className="mb-4 last:mb-0"
                                            >
                                                {paragraph}
                                            </p>
                                        ))
                                ) : (
                                    <p className="italic text-kyoto-mist">
                                        暫無詳細筆記。
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Footer Deco */}
                        <div className="mt-8 text-center opacity-40">
                            <div className="flex justify-center gap-2 mb-2 text-kyoto-gold">
                                <Star className="w-2.5 h-2.5" />
                                <Star className="w-2.5 h-2.5" />
                                <Star className="w-2.5 h-2.5" />
                            </div>
                            <p className="text-[10px] font-serif tracking-[0.2em] text-kyoto-wood">
                                聰明小鼠旅行社 2026
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

const DaySwitcher: React.FC<{
    days: DailyPlan[];
    activeIndex: number;
    onSelect: (idx: number) => void;
}> = ({ days, activeIndex, onSelect }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            // Manual smooth scrolling logic for better control
            const container = scrollRef.current;
            const activeEl = container.children[activeIndex] as HTMLElement;

            if (activeEl) {
                const containerWidth = container.offsetWidth;
                const elWidth = activeEl.offsetWidth;
                const elLeft = activeEl.offsetLeft;

                // Calculate center position
                const targetLeft = elLeft - containerWidth / 2 + elWidth / 2;

                container.scrollTo({
                    left: targetLeft,
                    behavior: "smooth",
                });
            }
        }
    }, [activeIndex]);

    return (
        <div className="sticky top-16 z-30 bg-kyoto-base/95 backdrop-blur-sm border-b border-kyoto-wood/10 py-4 mb-6">
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-3 px-5 scrollbar-hide"
            >
                {days.map((day, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                        <button
                            key={idx}
                            onClick={() => onSelect(idx)}
                            className={`flex-shrink-0 flex flex-col items-center justify-center min-w-[4.5rem] py-3 px-1 rounded-xl transition-all duration-300 border
                ${isActive ? "bg-kyoto-ink border-kyoto-ink text-kyoto-base shadow-md scale-100" : "bg-white/80 border-transparent text-kyoto-ink/60 hover:bg-white active:scale-95"}`}
                        >
                            <span
                                className={`text-[10px] uppercase tracking-widest font-sans mb-1 font-bold ${isActive ? "text-kyoto-gold" : "opacity-70"}`}
                            >
                                {day.day}
                            </span>
                            <span className="font-serif text-lg font-bold leading-none">
                                {day.date}
                            </span>
                        </button>
                    );
                })}
                <div className="w-2 flex-shrink-0"></div>
            </div>
        </div>
    );
};

const ItineraryView: React.FC = () => {
    const [activeDayIndex, setActiveDayIndex] = useState(0);
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
        null,
    );
    const activeDay = ITINERARY[activeDayIndex];

    return (
        <div className="pb-24 page-transition">
            <DaySwitcher
                days={ITINERARY}
                activeIndex={activeDayIndex}
                onSelect={setActiveDayIndex}
            />

            <div className="px-5 animate-fade-in key={activeDayIndex}">
                {/* Day Header Card with Image Background */}
                <div className="mb-8 text-center rounded-2xl border border-kyoto-wood/10 relative overflow-hidden shadow-md group h-48 flex flex-col justify-center items-center">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-gray-200">
                        <img
                            src={optimizeImageUrl(activeDay.imageUrl)}
                            alt={activeDay.title}
                            decoding="async"
                            fetchPriority="high"
                            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-kyoto-ink/40 backdrop-blur-[1px]"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 w-full px-4">
                        <span className="inline-flex items-center py-1 px-3 bg-white/20 backdrop-blur-md rounded-full text-[11px] font-medium font-sans tracking-widest text-white mb-3 uppercase border border-white/20 shadow-sm">
                            <MapPin className="w-3 h-3 mr-1.5" />
                            {activeDay.location}
                        </span>
                        <h3 className="text-3xl font-serif font-bold text-white leading-tight tracking-wide drop-shadow-md">
                            {activeDay.title}
                        </h3>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative border-l border-kyoto-wood/20 ml-4 space-y-8 pb-10">
                    {activeDay.activities.map((act, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedActivity(act)}
                            className="relative pl-8 group cursor-pointer"
                        >
                            {/* Timeline Dot */}
                            <div
                                className={`absolute -left-[7px] top-6 w-[13px] h-[13px] rounded-full border-[3px] border-kyoto-base transition-all duration-300 group-hover:scale-125 z-10 shadow-sm
                ${
                    act.type === "sightseeing"
                        ? "bg-kyoto-matcha"
                        : act.type === "food"
                          ? "bg-kyoto-sakura"
                          : act.type === "stay"
                            ? "bg-kyoto-gold"
                            : "bg-kyoto-indigo"
                }`}
                            />

                            <div className="kyoto-card p-5 rounded-xl hover:translate-x-1 transition-all duration-500 hover:shadow-lg active:scale-[0.99] relative overflow-hidden">
                                <div className="flex justify-between items-start mb-2 relative z-10">
                                    <span className="font-serif text-lg text-kyoto-ink font-bold tracking-wide">
                                        {act.time || "---"}
                                    </span>
                                    <div className="bg-kyoto-base p-1.5 rounded-full text-kyoto-wood/50 group-hover:text-kyoto-wood transition-colors">
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>

                                <h4 className="font-sans font-bold text-kyoto-ink text-lg mb-2 flex items-center gap-2 relative z-10">
                                    {act.title}
                                </h4>

                                {act.description && (
                                    <p className="text-kyoto-ink/60 text-sm line-clamp-2 leading-relaxed relative z-10 font-medium">
                                        {act.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ActivityBottomSheet
                activity={selectedActivity}
                onClose={() => setSelectedActivity(null)}
            />
        </div>
    );
};

// --- Main App Component ---

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-kyoto-base relative font-sans selection:bg-kyoto-matcha selection:text-white overflow-hidden">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-40 bg-kyoto-base/90 backdrop-blur-md h-16 flex items-center justify-center px-4 border-b border-kyoto-wood/10 transition-all duration-500">
                <div className="flex flex-col items-center">
                    <h1 className="font-serif font-black text-xl tracking-[0.2em] text-kyoto-ink flex items-center gap-3">
                        <span className="text-kyoto-sakura text-xs">✿</span>{" "}
                        古都漫遊{" "}
                        <span className="text-kyoto-sakura text-xs">✿</span>
                    </h1>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="pt-16 max-w-lg mx-auto relative z-10 min-h-screen shadow-[0_0_60px_rgba(0,0,0,0.03)] bg-kyoto-base">
                <ItineraryView />
            </main>
        </div>
    );
};

export default App;
