import { useState } from "react";
import { X, Search } from "lucide-react";
import TagBar from "./TagBar";
import { div } from "framer-motion/client";

export default function SearchSection() {
  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState([]);


  return (
    <div>

    
    <TagBar value={keywords} onChange={setKeywords} />
    </div>
  );
}
