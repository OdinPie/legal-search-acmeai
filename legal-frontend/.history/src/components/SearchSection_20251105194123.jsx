import { useState } from "react";
import { X, Search } from "lucide-react";
import TagBar from "./TagBar";

export default function SearchSection() {

  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState([]);

  return (
    <div className="my-10 w-screen">
      <div className="join w-full flex justify-center">
  <div>
    <label className="input validator join-item w-full">
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
      <input className="" type="text" placeholder="Search a documents ..." required />
    </label>
    <div className="validator-hint hidden">Enter valid query</div>
  </div>
  <button className="btn join-item bg-[#1A3E72]" >Search</button>
</div>
    <TagBar value={keywords} onChange={setKeywords} />
    </div>
  );
}
