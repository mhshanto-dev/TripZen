"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiArrowLeft, FiHome } from "react-icons/fi";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="relative min-h-[80vh] sm:min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex items-center justify-center overflow-hidden p-4 transition-colors duration-300">
      {/* Background Shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-125 bg-linear-to-tr from-indigo-500/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl text-center space-y-8 flex flex-col items-center">
        {/* 404 Heading */}
        <div className="relative select-none animate-bounce duration-1000">
          <h1 className="text-[10rem] sm:text-[12rem] md:text-[14rem] font-black tracking-tighter leading-none bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl dark:drop-shadow-[0_35px_35px_rgba(99,102,241,0.15)]">
            404
          </h1>
        </div>

        {/* Error Message and Description */}
        <div className="space-y-3 px-4">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
            Lost in the Library?
          </h2>
          <p className="text-sm sm:text-base font-medium text-zinc-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
            Oops! The page you are looking for doesn&apos;t exist or has been
            moved to another shelf.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6 sm:px-0">
          {/* Go Back Button */}
          <button
            onClick={() => router.back()}
            className="w-full sm:w-auto h-12 px-6 flex items-center justify-center gap-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300 bg-white/80 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 shadow-xs backdrop-blur-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <FiArrowLeft className="size-4" />
            Go Back
          </button>

          {/* Back to Home Button - Theme Gradient Button */}
          <Link href="/" className="w-full sm:w-auto">
            <button className="w-full h-12 px-6 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-md shadow-indigo-600/10 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer group">
              <FiHome className="size-4" />
              Back to Home
            </button>
          </Link>
        </div>
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-size-[16px_28px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none z-0" />
    </div>
  );
};

export default NotFound;
