import React from "react";

// TODO: Replace with API data integration
const mockHashtags = [
  { id: 1, name: "#ClimateAction", description: "Take action for the climate!" },
  { id: 2, name: "#SocialJustice", description: "Support social justice movements." },
  { id: 3, name: "#Vote2025", description: "Encourage voter participation." },
];

export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Trending Hashtags</h1>
      <ul className="space-y-4">
        {mockHashtags.map((hashtag) => (
          <li
            key={hashtag.id}
            className="bg-white rounded-lg shadow p-4 hover:bg-blue-50 transition"
          >
            <a
              href={`/hashtag/${hashtag.id}`}
              className="text-xl font-semibold text-blue-700 hover:underline"
            >
              {hashtag.name}
            </a>
            <p className="text-gray-600 mt-1">{hashtag.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
