"use client";
import { useState, useEffect } from "react";
import ProjePageTablet from "./ProjePageTablet/ProjePageTablet";
import ProjePage from "./ProjePage/ProjePage";

const ProjePageResponsive = () => {
  const isBrowser = typeof window !== "undefined";

  const [windowSize, setWindowSize] = useState({
    width: isBrowser ? window.innerWidth : undefined,
    height: isBrowser ? window.innerHeight : undefined,
  });

  useEffect(() => {
    if (!isBrowser) return; // Tarayıcı ortamında çalıştığımızdan emin olun

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isBrowser]); // Bağımlılık listesine isBrowser'ı ekleyin

  const isTablet = isBrowser && windowSize.width < 1040;

  return <div>{isTablet ? <ProjePageTablet /> : <ProjePage />}</div>;
};

export default ProjePageResponsive;
