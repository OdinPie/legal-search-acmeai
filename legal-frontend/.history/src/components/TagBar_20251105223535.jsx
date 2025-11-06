import { useState, useRef } from "react";

const maxTags = 5;
 const suggetions = ["Corporate", "Criminal", "Civil", "Finance", "Labor"];

export default function TagBar({ value = [], onChange }) {
  const [input, setInput] = useState("");

  const addTag = (raw) => {
    const tag = raw.trim();
    if (!tag) return;
    const norm = tag.toLowerCase();
    const has = value.some(t => t.toLowerCase() === norm);
    if (has || value.length >= maxTags) return;
    onChange([...value, tag]);
    setInput("");
  };

  const removeTag = (tag) => {
    onChange(value.filter(t => t !== tag))
  };

  const handleKeyDown = (e) => {
    if (["Enter", ","].includes(e.key) || e.key === " ") {
      e.preventDefault();
      addTag(input);
        } else if (e.key === "Backspace" && !input && value.length) {
      removeTag(value[value.length - 1]);
       }
  };

  const atLimit = value.length >= maxTags;

  return (
    <div className="space-y-2">
      {/* TAG BAR */}
      <div
        className="flex items-center gap-2 overflow-x-auto no-scrollbar h-11 w-full rounded-xl border border-gray-200 bg-white px-3"
        role="listbox"
        aria-label="Selected tags"
      >
        {value.map(tag => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 text-sm"
          >
            #{tag}
            <button
              aria-label={`Remove ${tag}`}
              onClick={() => removeTag(tag)}
              className="ml-1 rounded-full px-1 hover:bg-blue-100"
            >
              ✕
            </button>
          </span>
        ))}

        {/* inline input inside the bar */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={atLimit}
          placeholder={atLimit ? "Max tags reached" : "Add tag…"}
          className="min-w-[8ch] flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {suggetions.map(s => {
          const taken = value.some(t => t.toLowerCase() === s.toLowerCase());
          return (
            <button
              key={s}
              disabled={taken || atLimit}
              onClick={() => addTag(s)}
              className={`btn btn-xs text-sm 
                ${taken ? "!border-gray-200 !text-gray-400 !cursor-not-allowed"
                        : "!border-gray-300 hover:!bg-blue-50 hover:!border-blue-400"}`}
            >
              {s}
            </button>
          );
        })}
      </div>
    </div>
  );
}
