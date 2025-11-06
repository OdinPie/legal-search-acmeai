import { useState } from "react";

export default function SearchSection({ onSearch }) {
  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [searchType, setSearchType] = useState("title");
  const [currentKeyword, setCurrentKeyword] = useState("");

  const handleAddKeyword = () => {
    if (currentKeyword && !keywords.includes(currentKeyword)) {
      setKeywords([...keywords, currentKeyword]);
      setCurrentKeyword("");
    }
  };

  const handleSearch = () => {
    onSearch({ query, keywords, searchType });
  };

  return (
    <div className="bg-[#fdf8f4] p-6 rounded-2xl shadow-md w-full max-w-3xl mx-auto border border-[#e2d6c2]">
      <h2 className="text-2xl font-bold text-[#1e3a5f] mb-4 text-center">
        Legal Document Assistant
      </h2>

      {/* Search Input */}
      <div className="flex flex-col sm:flex-row gap-3 items-center mb-4">
        <input
          type="text"
          placeholder="Enter your search query..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1e3a5f] outline-none"
        />

        <select
          value={searchType}
          onChange={(e) => setSearchType(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1e3a5f]"
        >
          <option value="title">Search in Title</option>
          <option value="full">Search in Full Document</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-[#1e3a5f] text-white px-5 py-2 rounded-lg hover:bg-[#14263f] transition"
        >
          Search
        </button>
      </div>

      {/* Keyword Filter */}
      <div className="flex flex-wrap gap-2 mb-3">
        {keywords.map((kw) => (
          <span
            key={kw}
            className="bg-[#d6c59b] text-[#1e3a5f] px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-[#c5b388] transition"
            onClick={() => setKeywords(keywords.filter((k) => k !== kw))}
          >
            {kw} ×
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add keyword filter..."
          value={currentKeyword}
          onChange={(e) => setCurrentKeyword(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1e3a5f]"
        />
        <button
          onClick={handleAddKeyword}
          className="bg-[#d6c59b] text-[#1e3a5f] px-4 py-2 rounded-lg hover:bg-[#c5b388] transition"
        >
          Add
        </button>
      </div>
    </div>
  );
}
