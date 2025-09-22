"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="max-w-md  text-black  mx-auto p-6 flex flex-col items-center justify-center min-h-screen">
      <div className="w-full bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl text-black font-bold mb-4 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h1>
        <form className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Username"
              className="w-full border rounded px-3 py-2"
              required
            />
          )}
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
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button className="text-blue-600 hover:underline" onClick={() => setIsLogin((v) => !v)}>
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
          </button>
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
