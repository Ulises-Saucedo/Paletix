import chroma, { type Color } from "chroma-js";
import { useState, useEffect } from "react";

function colorScale(firstColor: Color, middleColor: Color, endColor: Color) {
  const scale = chroma.scale([firstColor, middleColor, endColor]).colors(12);

  const middleIndex = Math.floor(scale.length / 2);
  scale[middleIndex - 1] = middleColor.hex();

  return scale;
}

export const useColors = () => {
  const [baseColor, setBaseColor] = useState(chroma.random().hex());
  const [colors, setColors] = useState(
    colorScale(
      chroma(baseColor).brighten(3),
      chroma(baseColor),
      chroma(baseColor).darken(3)
    )
  );

  function changeRandomBaseColor() {
    setBaseColor(chroma.random().hex());
  }

  function changeChosenColor(color: string) {
    const newColor = chroma(color).hex();

    setBaseColor(newColor);
  }

  useEffect(() => {
    setColors(
      colorScale(
        chroma(baseColor).brighten(3),
        chroma(baseColor),
        chroma(baseColor).darken(3)
      )
    );
  }, [baseColor]);

  return {
    baseColor,
    colors,
    changeRandomBaseColor,
    changeChosenColor,
  };
};
