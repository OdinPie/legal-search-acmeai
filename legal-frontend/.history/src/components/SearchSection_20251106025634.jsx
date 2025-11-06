import { useState } from "react";
import TagBar from "./TagBar";
import useAxios from "../utils/hooks/useAxios";
export default function SearchSection() {

  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [mode, setMode] = useState("full")

  const 

  const searchQuery = () =>{

    if (!query) {
      // show error and return
    }

    const payload = {
        query:query,
        tags:keywords,
        mode:mode
    }

    

  }

  return (
    <div className="my-10 w-full max-w-2xl mx-auto">
      <div className="join w-full">
    <label className="input validator join-item flex-1 min-w-0">
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
      <input className="grow" onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search a documents ..." required />
    </label>
  
  <button onClick={searchQuery} className="btn join-item !bg-[#1A3E72] !text-white" >Search</button>
</div>
<div className="flex justify-center gap-3 my-3">
  <input onSelect={()=>{setMode("title")}} type="radio" name="radio-4" className="radio radio-primary" /> Search in Title
  <input onSelect={()=>{setMode("full")}}  type="radio" name="radio-4" className="radio radio-primary" defaultChecked/> Search Full Document
</div>
    <div className="w-full min-w-md mx-auto">     
    <TagBar value={keywords} onChange={setKeywords}></TagBar>
  </div>
    </div>
  );
}
