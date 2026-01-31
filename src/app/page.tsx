'use client';

import { useState } from 'react';

const ideas = [
  "Write a poem about a talking animal",
  "Design a new superhero costume",
  "Invent a gadget that solves a common problem",
  "Create a story about time travel",
  "Draw a futuristic city skyline",
  "Compose a song about friendship",
  "Build a model of an imaginary creature",
  "Plan a dream vacation itinerary",
  "Write a letter to your future self",
  "Design a board game for family night"
];

export default function Home() {
  const [idea, setIdea] = useState('');

  const generateIdea = () => {
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    setIdea(randomIdea);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Random Creative Idea Generator</h1>
      <button
        onClick={generateIdea}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Generate Idea
      </button>
      {idea && (
        <p className="mt-6 text-xl text-center max-w-md p-4 bg-white rounded-lg shadow-md">
          {idea}
        </p>
      )}
    </div>
  );
}
