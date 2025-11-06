import { useState } from "react";

export default function SearchSection({ onSearch }) {
  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [searchType, setSearchType] = useState("title");
  const [currentKeyword, setCurrentKeyword] = useState("");

  // Example suggested keywords (could be fetched from backend)
  const keywordOptions = ["Contract", "Property", "Tort", "Criminal", "Corporate", "Evidence"];

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
    <div className="bg-[#fdfaf6] p-6 rounded-2xl shadow-md w-full max-w-3xl mx-auto border border-[#e3d6bc]">
      

      {/* Search bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center mb-4">
        <input
          type="text"
          placeholder="Search legal documents..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1e3a5f] outline-none"
        />

        <button
          onClick={handleSearch}
          className="bg-[#1e3a5f] text-white px-5 py-2 rounded-lg hover:bg-[#14263f] transition"
        >
          Search
        </button>
      </div>

      {/* Radio buttons for title/full doc */}
      <div className="flex justify-center gap-6 mb-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="searchType"
            value="title"
            checked={searchType === "title"}
            onChange={(e) => setSearchType(e.target.value)}
            className="text-[#1e3a5f] focus:ring-[#1e3a5f]"
          />
          <span className="text-[#1e3a5f] font-medium">Search in Title</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="searchType"
            value="full"
            checked={searchType === "full"}
            onChange={(e) => setSearchType(e.target.value)}
            className="text-[#1e3a5f] focus:ring-[#1e3a5f]"
          />
          <span className="text-[#1e3a5f] font-medium">Search Full Document</span>
        </label>
      </div>

      {/* Keyword tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {keywords.map((kw) => (
          <span
            key={kw}
            className="bg-[#d6c59b] text-[#1e3a5f] px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-[#c4b48d] transition"
            onClick={() => setKeywords(keywords.filter((k) => k !== kw))}
          >
            {kw} ×
          </span>
        ))}
      </div>

      {/* Add or select keyword */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Add keyword..."
          value={currentKeyword}
          onChange={(e) => setCurrentKeyword(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#1e3a5f]"
        />

        <select
          onChange={(e) => {
            const val = e.target.value;
            if (val && !keywords.includes(val)) setKeywords([...keywords, val]);
          }}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#1e3a5f] bg-white text-[#1e3a5f]"
        >
          <option value="">Select Keyword</option>
          {keywordOptions.map((kw) => (
            <option key={kw} value={kw}>
              {kw}
            </option>
          ))}
        </select>

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
