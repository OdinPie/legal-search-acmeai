import { useState } from "react";
import TagBar from "./TagBar";

export default function SearchSection() {
  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState([]);

  return (
    <div className="my-10"> {/* use w-full implicitly; avoid w-screen to prevent overflow */}
      <div className="join w-full max-w-2xl mx-auto"> {/* <- control overall width here */}
        <label className="input validator join-item flex-1 min-w-0">
          {/* icon */}
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden>
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documents…"
            className="grow"  /* makes the field fill the label */
            required
          />
        </label>

        <button className="btn join-item bg-[#1A3E72] shrink-0">Search</button>
      </div>

      <TagBar value={keywords} onChange={setKeywords} />
    </div>
  );
}
