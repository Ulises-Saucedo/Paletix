import { useRef, useEffect } from "react";
import { useColors } from "./hooks/useColors";
import { ColorCard } from "./components/color-card";
import { ArrowShuffle } from "./assets/icons/arrow-shuffle";
import { FormPreview } from "./components/form-preview";

function App() {
  const { baseColor, colors, changeRandomBaseColor, changeChosenColor } =
    useColors();
  const timeoutRef = useRef<null | number>(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--color", baseColor);
  }, [baseColor]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;

    clearTimeout(timeoutRef.current as number);

    timeoutRef.current = setTimeout(() => {
      changeChosenColor(newColor);
    }, 200);
  };

  return (
    <>
      <div
        className="w-full h-32 absolute left-0 top-0 -z-10"
        style={{
          background: `linear-gradient(to bottom, ${baseColor}, transparent)`,
        }}
      />

      <main className="max-w-screen-xl mx-auto my-16 space-y-12 p-6">
        <h1 className="text-center text-3xl font-bold font-headings lg:text-6xl text-neutral-800">
          Palette generator
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(0px,100px))] place-content-center w-full">
          {colors.map((color, idx) => (
            <ColorCard color={color} key={idx} />
          ))}
        </div>
        <div className="w-full flex flex-wrap justify-center items-center gap-4">
          <input
            type="color"
            className="appearance-none bg-transparent rounded-full border-0 cursor-pointer h-8 w-8 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-0 [&::-moz-color-swatch]:border-0 [&::-moz-focus-inner]:border-0 [&::-moz-focus-inner]:p-0"
            value={baseColor}
            onInput={handleChange}
          />
          <button
            className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2 rounded-[4px]"
            onClick={changeRandomBaseColor}
          >
            Generate Random
            <ArrowShuffle />
          </button>
        </div>

        <section className="flex flex-col pt-10 lg:flex-row gap-[32px]">
          <FormPreview />
        </section>
      </main>
    </>
  );
}

export default App;
