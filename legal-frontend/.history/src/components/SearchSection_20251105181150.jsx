import { useState } from "react";
import { X, Search } from "lucide-react";
import TagBar from "./TagBar";
import { div } from "framer-motion/client";

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
    div
    <TagBar value={keywords} onChange={setKeywords} />
    </section>
  );
}
