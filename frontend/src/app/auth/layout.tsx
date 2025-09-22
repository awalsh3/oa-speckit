import React from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full py-4 bg-blue-600 text-white text-center font-bold text-lg shadow">
        Hashtag Activism
      </header>
      <main className="flex-1 flex flex-col items-center justify-center">{children}</main>
      <footer className="w-full py-2 text-center text-xs text-black bg-white border-t">
        <Link href="/" className="hover:underline">
          Back to Hashtags
        </Link>
      </footer>
    </div>
  );
}
