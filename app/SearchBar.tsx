"use client";

import { useState } from "react";

function SearchBar() {
  const [input, setInput] = useState("");
  return (
    <form className="max-w-6xl mx-auto flex justify-between items-center px-5">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search latest news"
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400 "
      />
      <button
        type="submit"
        disabled={!input}
        className="disabled:text-gray-400 text-orange-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
