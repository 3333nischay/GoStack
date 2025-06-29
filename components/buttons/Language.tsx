"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function LanguageSelector() {
  const [selected, setSelected] = useState("UK");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-40 text-sm font-mono z-50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-[#D3B6FB] text-[#420492] flex items-center justify-between rounded-md px-4 py-2 border-none outline-none shadow-sm"
      >
        <span className="flex-1 text-center">{selected}</span>
        <span className="border-l border-[#420492] h-5 mx-2"></span>
        <ChevronDown size={16} className="text-[#420492]" />
      </button>

      {/* Dropdown above the button */}
      <div
        className={`absolute left-0 bottom-full mb-1 w-full bg-[#D3B6FB] text-[#420492] rounded-md shadow-md overflow-hidden transition-all duration-200 ${
          open ? "max-h-40 opacity-100 scale-100" : "max-h-0 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {["UK", "US", "IN"].map((opt) => (
          <div
            key={opt}
            onClick={() => {
              setSelected(opt);
              setOpen(false);
            }}
            className="px-4 py-2 hover:bg-[#c9a7f3] cursor-pointer"
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  );
}