import React from "react";
import { notFound } from "next/navigation";
import HashtagImage from "@/components/HashtagImage";
import Link from "next/link";
import ActionItem from "@/components/ActionItem";

// Mock data for demonstration
const mockHashtags = [
  {
    id: 1,
    name: "#ClimateAction",
    description: "Take action for the climate!",
    resources: [
      { id: 101, title: "Join a local cleanup", completed: false },
      { id: 102, title: "Share climate facts on social", completed: false },
    ],
  },
  {
    id: 2,
    name: "#SocialJustice",
    description: "Support social justice movements.",
    resources: [
      { id: 201, title: "Attend a rally", completed: false },
      { id: 202, title: "Donate to a cause", completed: false },
    ],
  },
  {
    id: 3,
    name: "#Vote2025",
    description: "Encourage voter participation.",
    resources: [
      { id: 301, title: "Register to vote", completed: false },
      { id: 302, title: "Help a friend register", completed: false },
    ],
  },
];

// Next.js App Router dynamic route: params must be awaited if used in an async function
// Solution: Use a synchronous function unless you need async/await (e.g., for data fetching)
export default function HashtagDetailPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const hashtag = mockHashtags.find((h) => h.id === id);
  if (!hashtag) return notFound();

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{hashtag.name}</h1>
      <HashtagImage hashtag={hashtag.name} alt={hashtag.name} />
      <p className="text-white mb-6">{hashtag.description}</p>
      <h2 className="text-xl font-semibold mb-2">Action To-Do List</h2>
      <ul className="text-black space-y-2">
        {hashtag.resources.map((resource) => (
          <ActionItem
            key={resource.id}
            id={resource.id}
            title={resource.title}
            completed={resource.completed}
          />
        ))}
      </ul>
      <div className="mt-8">
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Back to Hashtags
        </Link>
      </div>
    </main>
  );
}
