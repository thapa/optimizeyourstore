"use client";

import React from "react";

interface SectionHeaderProps {
  number: string;
  label: string;
  theme: "dark" | "light";
}

export default function SectionHeader({ number, label, theme }: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div className="w-full mb-8 md:mb-12">
      {/* Hairline above the label */}
      <div
        className="w-full"
        style={{
          borderTop: isDark
            ? "1px solid rgba(255, 255, 255, 0.08)"
            : "1px solid rgba(17, 16, 15, 0.08)",
          paddingTop: "24px",
        }}
      />
      {/* Numbered section label */}
      <p
        className="text-left select-none font-sans"
        style={{
          color: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(17, 16, 15, 0.35)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {number}
        {"\u2002\u2014\u2002"}
        {label}
      </p>
    </div>
  );
}
