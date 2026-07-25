import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0E4C6B 0%, #2C7DA0 55%, #F2B84B 100%)",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 90, display: "flex" }}>🌴</div>
        <div style={{ fontSize: 64, fontWeight: 700, marginTop: 24, display: "flex" }}>
          Nenad&apos;s Guide
        </div>
        <div style={{ fontSize: 32, marginTop: 16, opacity: 0.9, display: "flex" }}>
          Okrug Gornji, Kroatien
        </div>
      </div>
    ),
    size
  );
}
