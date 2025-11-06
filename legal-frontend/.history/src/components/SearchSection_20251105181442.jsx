import { useState } from "react";
import { X, Search } from "lucide-react";
import TagBar from "./TagBar";

export default function SearchSection() {

  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState([]);

  return (
    <div>
      <label className="input">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input type="search" required placeholder="Search" />
    </label>
    <TagBar value={keywords} onChange={setKeywords} />
    </div>
  );
}
