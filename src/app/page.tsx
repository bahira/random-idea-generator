'use client';

import { useState } from 'react';

const ideaCategories = {
  creative: [
    "Write a poem about a talking animal",
    "Design a new superhero costume",
    "Create a story about time travel",
    "Draw a futuristic city skyline",
    "Compose a song about friendship",
    "Build a model of an imaginary creature"
  ],
  business: [
    "Invent a gadget that solves a common problem",
    "Plan a dream vacation itinerary",
    "Design a board game for family night",
    "Create a new app idea",
    "Develop a sustainable product concept",
    "Launch a community project"
  ],
  personal: [
    "Write a letter to your future self",
    "Start a gratitude journal",
    "Learn a new skill this month",
    "Organize your digital workspace",
    "Create a personal development plan"
  ]
};

const testimonials = [
  { name: "Sarah K.", text: "This generator sparked my creativity like never before!", rating: 5 },
  { name: "Mike T.", text: "Generated 10 startup ideas in minutes. Game-changer!", rating: 5 },
  { name: "Emma R.", text: "Perfect for overcoming creative blocks.", rating: 5 }
];

export default function Home() {
  const [idea, setIdea] = useState('');
  const [category, setCategory] = useState('creative');
  const [savedIdeas, setSavedIdeas] = useState<string[]>([]);
  const [ideaCount, setIdeaCount] = useState(0);

  const generateIdea = () => {
    if (ideaCount >= 5) {
      setIdea("You've reached the free limit! Upgrade to Pro for unlimited ideas.");
      return;
    }
    const ideas = ideaCategories[category as keyof typeof ideaCategories];
    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    setIdea(randomIdea);
    setIdeaCount(prev => prev + 1);
  };

  const saveIdea = () => {
    if (idea && !savedIdeas.includes(idea)) {
      setSavedIdeas(prev => [...prev, idea]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">AIdea Generator</h1>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
          Unlock Infinite Creativity with <span className="text-indigo-600">AIdea Generator</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Break through creative blocks and generate innovative ideas in seconds. From business concepts to personal projects, spark your imagination with our AI-powered idea generator.
        </p>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8 max-w-2xl mx-auto text-left">
          <p className="font-semibold">⏰ Limited Time: Free unlimited ideas for the next 24 hours!</p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-center mb-6">Generate Your Next Big Idea</h3>
          
          {/* Category Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Choose Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="creative">Creative & Artistic</option>
              <option value="business">Business & Innovation</option>
              <option value="personal">Personal Growth</option>
            </select>
          </div>

          {/* Generate Button */}
          <div className="text-center mb-6">
            <button
              onClick={generateIdea}
              className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            >
              🚀 Generate Idea ({5 - ideaCount} free left)
            </button>
          </div>

          {/* Generated Idea */}
          {idea && (
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-semibold mb-2">Your Idea:</h4>
              <p className="text-lg text-gray-800 mb-4">{idea}</p>
              <button
                onClick={saveIdea}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                💾 Save Idea
              </button>
            </div>
          )}

          {/* Saved Ideas */}
          {savedIdeas.length > 0 && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h4 className="text-xl font-semibold mb-4">Saved Ideas:</h4>
              <ul className="space-y-2">
                {savedIdeas.map((savedIdea, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                    {savedIdea}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-12">Why Choose AIdea Generator?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Instant Inspiration</h4>
              <p className="text-gray-600">Get creative ideas in seconds, not hours of brainstorming.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Tailored Categories</h4>
              <p className="text-gray-600">Choose from creative, business, or personal growth categories.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💾</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Save & Organize</h4>
              <p className="text-gray-600">Keep track of your best ideas for future reference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-center mb-12">Loved by Creators Worldwide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">Join 10,000+ users who have generated over 1M ideas!</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Supercharge Your Creativity?</h3>
          <p className="text-xl mb-8">Upgrade to Pro for unlimited ideas, advanced filters, and export options.</p>
          <button className="bg-white text-indigo-600 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition">
            Start Pro Trial - 50% Off Today!
          </button>
        </div>
      </section>
    </div>
  );
}
