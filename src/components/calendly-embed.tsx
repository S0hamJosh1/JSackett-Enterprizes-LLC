"use client";

import { useEffect, useId, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

type CalendlyEmbedProps = {
  url: string;
};

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const widgetId = useId().replace(/:/g, "");

  useEffect(() => {
    if (!scriptLoaded || !containerRef.current || !window.Calendly) {
      return;
    }

    containerRef.current.innerHTML = "";
    window.Calendly.initInlineWidget({
      url,
      parentElement: containerRef.current,
    });
  }, [scriptLoaded, url]);

  return (
    <>
      <Script
        id={`calendly-script-${widgetId}`}
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <div
        ref={containerRef}
        className="min-w-[320px] h-[700px] rounded-[2rem] overflow-hidden"
      />
    </>
  );
}
