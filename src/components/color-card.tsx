import { useState } from "react";

export const ColorCard = ({ color }: { color: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  async function clipboardColor() {
    await navigator.clipboard.writeText(color);

    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 2000);

    return;
  }

  return (
    <button
      className="relative flex flex-col items-center gap-2 aspect-square [&:first-child>div]:rounded-l-[8px] [&:last-child>div]:rounded-r-[8px]"
      onClick={clipboardColor}
    >
      <span
        className="absolute bg-neutral-800 rounded-sm text-white px-4 py-1 -top-12 left-1/2 transform -translate-x-1/2 hidden data-[state=open]:block"
        data-state={isCopied ? "open" : "closed"}
      >
        Copied!
      </span>

      <div
        className="cursor-pointer w-[100px] h-[100px] false hover:border-2 hover:border-black"
        style={{ backgroundColor: color }}
      />
      <span className="font-mono text-sm break-all text-slate-600">
        {color}
      </span>
    </button>
  );
};
