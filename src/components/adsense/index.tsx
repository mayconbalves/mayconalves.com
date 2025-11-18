// components/adsense/AdBanner.tsx
"use client";
import { useEffect } from "react";

interface AdBannerProps {
  dataAdSlot: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const AdBanner = ({
  dataAdSlot,
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
  style = { display: "block" },
  className = "",
}: AdBannerProps) => {
  useEffect(() => {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <aside
      className={`ad-wrapper ${className}`}
      role="complementary"
      aria-label="Anúncio publicitário"
      style={{
        textAlign: "center",
        padding: "2rem",
        maxWidth: "100%",
        backgroundColor: "#fafafa",
        borderRadius: "8px",
        border: "1px solid #e5e5e5",
      }}
    >
      <p
        className="ad-label"
        style={{
          textTransform: "uppercase",
          fontSize: "0.875rem",
          fontWeight: 600,
          color: "#666",
          letterSpacing: "0.1em",
          marginBottom: "1rem",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        — PUBLICIDADE —
      </p>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-4370754805788508"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      />
    </aside>
  );
};

export default AdBanner;
