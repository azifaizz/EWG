import React from "react";

interface PartnerLogoProps {
  name: string;
  className?: string;
  height?: number;
}

export function PartnerLogo({ name, className = "h-9 w-auto", height = 36 }: PartnerLogoProps) {
  const norm = name.toLowerCase().trim();

  // 1. HDFC Life
  if (norm.includes("hdfc")) {
    return (
      <svg viewBox="0 0 160 42" height={height} className={className} aria-label="HDFC Life">
        <rect x="2" y="5" width="32" height="32" rx="4" fill="#004C8F" />
        <rect x="9" y="12" width="18" height="18" fill="#ED232A" />
        <rect x="15" y="7" width="6" height="28" fill="#FFFFFF" />
        <rect x="7" y="15" width="22" height="6" fill="#FFFFFF" />
        <rect x="14" y="14" width="8" height="8" fill="#ED232A" />
        {/* HDFC Text */}
        <text
          x="42"
          y="24"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="18"
          fill="#004C8F"
          letterSpacing="-0.5"
        >
          HDFC
        </text>
        {/* Life Text */}
        <text
          x="96"
          y="24"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="18"
          fill="#ED232A"
        >
          Life
        </text>
        <text
          x="42"
          y="34"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="500"
          fontSize="7.5"
          fill="#555555"
          letterSpacing="0.8"
        >
          Sar utha ke jiyo
        </text>
      </svg>
    );
  }

  // 2. Tata AIA
  if (norm.includes("tata") || norm.includes("aia")) {
    return (
      <svg
        viewBox="0 0 165 42"
        height={height}
        className={className}
        aria-label="Tata AIA Life Insurance"
      >
        {/* Tata Emblem */}
        <g transform="translate(4, 5)">
          <ellipse cx="16" cy="16" rx="15" ry="14" fill="none" stroke="#005696" strokeWidth="2.2" />
          <path
            d="M 8 18 C 11 11, 21 11, 24 18 M 16 11 L 16 23"
            stroke="#005696"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
        </g>
        {/* TATA Text */}
        <text
          x="40"
          y="22"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="15"
          fill="#005696"
          letterSpacing="1"
        >
          TATA
        </text>
        {/* AIA Badge */}
        <rect x="88" y="8" width="40" height="18" rx="3" fill="#D31145" />
        <text
          x="94"
          y="22"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="14"
          fill="#FFFFFF"
          letterSpacing="0.5"
        >
          AIA
        </text>
        <text
          x="40"
          y="33"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="7"
          fill="#666666"
          letterSpacing="0.8"
        >
          LIFE INSURANCE
        </text>
      </svg>
    );
  }

  // 3. ICICI Lombard
  if (norm.includes("icici") || norm.includes("lombard")) {
    return (
      <svg
        viewBox="0 0 175 42"
        height={height}
        className={className}
        aria-label="ICICI Lombard General Insurance"
      >
        {/* ICICI dynamic roundel */}
        <g transform="translate(3, 5)">
          <circle cx="16" cy="16" r="15" fill="#8B1D24" />
          <path
            d="M 12 11 A 8 8 0 0 1 23 20"
            stroke="#F37021"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="16" cy="16" r="3.5" fill="#FFFFFF" />
        </g>
        <text
          x="39"
          y="21"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="15"
          fill="#8B1D24"
          letterSpacing="-0.2"
        >
          ICICI
        </text>
        <text
          x="82"
          y="21"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="15"
          fill="#F37021"
          letterSpacing="-0.2"
        >
          Lombard
        </text>
        <text
          x="39"
          y="32"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="7"
          fill="#555555"
          letterSpacing="0.5"
        >
          GENERAL INSURANCE
        </text>
      </svg>
    );
  }

  // 4. Bajaj Allianz
  if (norm.includes("bajaj") || norm.includes("allianz")) {
    return (
      <svg viewBox="0 0 170 42" height={height} className={className} aria-label="Bajaj Allianz">
        {/* Bajaj Hex Badge */}
        <g transform="translate(3, 6)">
          <polygon points="15,1 28,8 28,22 15,29 2,22 2,8" fill="#005CA9" />
          <path
            d="M 8 17 L 15 10 L 22 17 M 11 20 L 15 15 L 19 20"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
        <text
          x="37"
          y="22"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="15"
          fill="#005CA9"
          letterSpacing="0.5"
        >
          BAJAJ
        </text>
        <line x1="88" y1="10" x2="88" y2="28" stroke="#CBD5E1" strokeWidth="1.5" />
        <text
          x="95"
          y="22"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="15"
          fill="#003882"
          letterSpacing="0.2"
        >
          Allianz
        </text>
        <text
          x="37"
          y="33"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="6.5"
          fill="#64748B"
          letterSpacing="1"
        >
          GENERAL INSURANCE
        </text>
      </svg>
    );
  }

  // 5. Star Health
  if (norm.includes("star")) {
    return (
      <svg
        viewBox="0 0 165 42"
        height={height}
        className={className}
        aria-label="Star Health and Allied Insurance"
      >
        {/* Star in circle */}
        <g transform="translate(4, 5)">
          <circle cx="16" cy="16" r="15" fill="#E31837" />
          {/* Star polygon */}
          <polygon
            points="16,6 19,13 26,14 21,19 22,26 16,22 10,26 11,19 6,14 13,13"
            fill="#FFFFFF"
          />
        </g>
        <text
          x="40"
          y="21"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="17"
          fill="#E31837"
          letterSpacing="0.5"
        >
          STAR
        </text>
        <text
          x="88"
          y="21"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="14"
          fill="#0F2D59"
        >
          Health
        </text>
        <text
          x="40"
          y="32"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="7"
          fill="#64748B"
          letterSpacing="0.4"
        >
          The Health Insurance Specialist
        </text>
      </svg>
    );
  }

  // 6. ManipalCigna
  if (norm.includes("manipal") || norm.includes("cigna")) {
    return (
      <svg
        viewBox="0 0 175 42"
        height={height}
        className={className}
        aria-label="ManipalCigna Health Insurance"
      >
        {/* Tree of life blossom emblem */}
        <g transform="translate(3, 5)">
          <circle cx="16" cy="16" r="15" fill="#FFF2E8" />
          <circle cx="16" cy="11" r="4.5" fill="#FF671B" />
          <circle cx="11" cy="18" r="4" fill="#009BA3" />
          <circle cx="21" cy="18" r="4" fill="#00205B" />
          <path d="M 16 16 L 16 26" stroke="#00205B" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <text
          x="39"
          y="21"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="14.5"
          fill="#00205B"
          letterSpacing="-0.2"
        >
          Manipal
        </text>
        <text
          x="96"
          y="21"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="14.5"
          fill="#FF671B"
          letterSpacing="-0.2"
        >
          Cigna
        </text>
        <text
          x="39"
          y="32"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="7"
          fill="#009BA3"
          letterSpacing="0.6"
        >
          Health Insurance
        </text>
      </svg>
    );
  }

  // 7. Care Health Insurance
  if (norm.includes("care")) {
    return (
      <svg
        viewBox="0 0 160 42"
        height={height}
        className={className}
        aria-label="Care Health Insurance"
      >
        {/* Care orange heart emblem */}
        <g transform="translate(4, 7)">
          <path
            d="M 14 5 C 10 1, 3 3, 3 9 C 3 17, 14 23, 14 23 C 14 23, 25 17, 25 9 C 25 3, 18 1, 14 5 Z"
            fill="#FF5A00"
          />
          <circle cx="14" cy="12" r="3" fill="#FFFFFF" />
        </g>
        <text
          x="38"
          y="22"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="900"
          fontSize="18"
          fill="#FF5A00"
          letterSpacing="-0.5"
        >
          care
        </text>
        <text
          x="38"
          y="32"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="7.5"
          fill="#231F20"
          letterSpacing="0.8"
        >
          HEALTH INSURANCE
        </text>
      </svg>
    );
  }

  // 8. Niva Bupa
  if (norm.includes("niva") || norm.includes("bupa")) {
    return (
      <svg
        viewBox="0 0 165 42"
        height={height}
        className={className}
        aria-label="Niva Bupa Health Insurance"
      >
        {/* Niva 4-petal flower mark */}
        <g transform="translate(4, 5)">
          <circle cx="11" cy="11" r="5" fill="#00A887" />
          <circle cx="21" cy="11" r="5" fill="#84BD00" />
          <circle cx="11" cy="21" r="5" fill="#0072CE" />
          <circle cx="21" cy="21" r="5" fill="#00A887" />
        </g>
        <text
          x="38"
          y="21"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="15"
          fill="#002D62"
          letterSpacing="-0.2"
        >
          niva
        </text>
        <text
          x="73"
          y="21"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="15"
          fill="#00A887"
          letterSpacing="-0.2"
        >
          Bupa
        </text>
        <text
          x="38"
          y="32"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="7"
          fill="#64748B"
          letterSpacing="0.6"
        >
          Health Insurance
        </text>
      </svg>
    );
  }

  // Fallback for any other partner
  return (
    <div className="flex items-center gap-2 px-3 py-1 font-display font-semibold text-foreground">
      <span className="size-2 rounded-full bg-gold" />
      <span>{name}</span>
    </div>
  );
}
