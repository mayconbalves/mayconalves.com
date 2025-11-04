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
    <div
      className={`ad-wrapper ${className}`}
      style={{ textAlign: "center", margin: "2rem 0" }}
    >
      <p
        className="ad-label"
        style={{
          textTransform: "uppercase",
          fontSize: "0.75rem",
          color: "#777",
          marginBottom: "0.5rem",
        }}
      >
        Publicidade
      </p>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-4370754805788508"
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      />
    </div>
  );
};

export default AdBanner;
