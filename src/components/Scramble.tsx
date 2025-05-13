"use client";
import React from "react";
import { useScramble } from "use-scramble";

interface ScrambleProps {
  input: string;
  fontSize?: number;
  fontWeight?: number;
}

const Scramble = ({ input, fontSize, fontWeight }: ScrambleProps) => {
  const { ref, replay } = useScramble({
    text: input,
    speed: 0.5,
  });
  return (
    <p
      ref={ref}
      onMouseOver={replay}
      onFocus={replay}
      style={{
        cursor: "pointer",
        fontSize: `${fontSize}px`,
        fontWeight: fontWeight,
        display:"inline-block",
        minWidth: `200px`
      }}
    >
      {input}
    </p>
  );
};

export default Scramble;
