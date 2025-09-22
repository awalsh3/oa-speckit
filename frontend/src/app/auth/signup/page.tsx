"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="max-w-md mx-auto p-6 flex flex-col items-center justify-center min-h-screen">
      <div className="w-full bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        {submitted ? (
          <div className="text-green-600 text-center mb-4">Account created! Please log in.</div>
        ) : (
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <input
              type="text"
              placeholder="Username"
              className="w-full border rounded px-3 py-2"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded px-3 py-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded px-3 py-2"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </form>
        )}
        <div className="mt-4 text-center">
          <Link href="/auth" className="text-blue-600 hover:underline">
            Already have an account? Log in
          </Link>
        </div>
        <div className="mt-4 text-center">
          <Link href="/" className="text-gray-500 hover:underline">
            ← Back to Hashtags
          </Link>
        </div>
      </div>
    </main>
  );
}
