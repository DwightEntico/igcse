"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black font-sans">
      {/* Hero Section */}
      <main className="flex flex-col items-center text-center px-6 py-20 max-w-3xl">
        <Image
          src="/logo.png" // 👈 replace with your logo if you have one
          alt="IGCSE Math Logo"
          width={120}
          height={120}
          className="mb-6 dark:invert"
        />
        <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-4">
          IGCSE Mathematics Portal
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 max-w-xl">
          Welcome to the official IGCSE Math interactive learning and resource platform.          
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/student/login">
            <Button size="lg" className="gap-2">
              <BookOpen size={18} />
              Student Login
            </Button>
          </Link>

          <Link href="/about">
            <Button variant="outline" size="lg" className="gap-2">
              Learn More <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          © {new Date().getFullYear()} IGCSE Mathematics. Powered by Sir MEL.
        </p>
      </footer>
    </div>
  );
}
