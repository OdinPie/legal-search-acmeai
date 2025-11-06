import { useState } from "react";
import { X, Search } from "lucide-react";

export default function SearchSection() {
  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState([]);

  const handleAddKeyword = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      if (!keywords.includes(query.trim())) {
        setKeywords([...keywords, query.trim()]);
      }
      setQuery("");
    }
  };

  const removeKeyword = (word) => {
    setKeywords(keywords.filter((k) => k !== word));
  };

  return (
    <section className="w-full px-6 py-16 bg-[#F6F9FC] flex flex-col items-center">

      {/* Search Bar */}
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm border border-[#E0E6ED] p-3 flex items-center gap-3">
        <Search className="text-[#1A3E72]" size={22} />
        <input
          type="text"
          placeholder="Search legal documents..."
          className="w-full outline-none text-gray-700"
        />
        <button className="px-5 py-2 bg-[#1A3E72] text-white rounded-lg hover:bg-[#16355E] transition">
          Search
        </button>
      </div>

      {/* Keyword Chips */}
      <div className="flex flex-wrap gap-2 mt-3">
  {["Corporate", "Criminal", "Civil", "Finance", "Labor"].map(tag => (
    <button 
      key={tag}
      className="px-3 py-1 text-sm rounded-full border border-gray-300 hover:bg-blue-50 hover:border-blue-400 transition"
    >
      {tag}
    </button>
  ))}
</div>


      {/* Add Keyword Input */}
      <div className="mt-6 w-full max-w-3xl">
        <input
          type="text"
          className="w-full bg-white border border-[#E0E6ED] rounded-lg px-4 py-3 outline-none"
          placeholder="Add keyword... (press Enter)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleAddKeyword}
        />
        <p className="text-sm text-[#555555] mt-2">
          Popular: Corporate • Criminal • Civil • Finance • Labor
        </p>
      </div>
    </section>
  );
}
