import { useState } from "react";
import TagBar from "./TagBar";
import useAxios from "../utils/hooks/useAxios";
export default function SearchSection() {

  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [mode, setMode] = useState("full")
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const [docs, setDocs] = useState([])
  const axiosPublic = useAxios()

  const searchQuery = () =>{

    if (!query) {
      // show error and return
      setError("Please enter a search query.");
      return;
    }

  
    const payload = {
        query:query,
        tags:keywords,
        mode:mode
    }

    console.log(payload);

    setLoading(true)
    
    axiosPublic.post("/api/search", payload)
    .then(res=> {
      setDocs(res.data)
      setTimeout(() => {
      setLoading(false)
    }, 1000);
    })
    .catch(() =>{
      setError("Something went wrong. Kindlt try again later.")
    })
    

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
      <input className="grow" onFocus={()=>{setError("")}} onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Search a documents ..." required />
    </label>
  
  <button onClick={searchQuery} className="btn join-item !bg-[#1A3E72] !text-white" >Search</button>
</div>
    {error && 
    (
        <p className="text-red-600 text-sm mt-2 text-center font-medium">
          {error}
        </p>
      )}

{loading && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
    <span className="loading loading-spinner loading-xl text-white"></span>
  </div>
)}

<div className="flex justify-center gap-3 my-3">
  <input name="mode"checked={mode==="title"}  onChange={()=>{setMode("title")}} type="radio" className="radio radio-primary" /> Search in Title
  <input name="mode" checked={mode==="full"} onChange={()=>{setMode("full")}}  type="radio" className="radio radio-primary" defaultChecked/> Search Full Document
</div>
    <div className="w-full min-w-md mx-auto">     
    <TagBar value={keywords} onChange={setKeywords}></TagBar>
  </div>

  {docs ? <Displa

  }
    </div>
  );
}
