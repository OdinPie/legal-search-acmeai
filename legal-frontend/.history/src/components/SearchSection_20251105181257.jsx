import { useState } from "react";
import { X, Search } from "lucide-react";
import TagBar from "./TagBar";

export default function SearchSection() {

  


  return (
    <div>

    
    <TagBar value={keywords} onChange={setKeywords} />
    </div>
  );
}
