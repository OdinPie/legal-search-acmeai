import { useState } from "react";
import { X, Search } from "lucide-react";
import TagBar from "./TagBar";

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
      <div className="mt-6 flex flex-wrap gap-2 max-w-3xl">
        {keywords.map((k) => (
          <span
            key={k}
            className="flex items-center gap-2 bg-[#E3EAF5] text-[#1A3E72] px-3 py-1 rounded-full text-sm"
          >
            {k}
            <X
              size={16}
              className="cursor-pointer"
              onClick={() => removeKeyword(k)}
            />
          </span>
        ))}
      </div>

    <TagBar
    </section>
  );
}
