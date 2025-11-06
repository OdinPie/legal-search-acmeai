import { useState } from "react";
import { X, Search } from "lucide-react";
import TagBar from "./TagBar";

export default function SearchSection() {

  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState([]);

  return (
    <div>
      <div className="join">
  <div>
    <label className="!focus:outline-none !focus:ring-0 !focus:border-none input validator join-item">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
      <input type="text" placeholder="Search a documents" required />
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>
  </div>
  <button className="btn btn-neutral join-item">Join</button>
</div>
    <TagBar value={keywords} onChange={setKeywords} />
    </div>
  );
}
