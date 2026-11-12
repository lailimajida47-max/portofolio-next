
"use client";

import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

function berlangganan(callback) {
  window.addEventListener("tema-berubah", callback);

  return () => {
    window.removeEventListener("tema-berubah", callback);
  };
}

function ambilTema() {
  return document.documentElement.classList.contains("dark");
}

function ambilTemaServer() {
  return false;
}

export default function TombolTema() {
  const gelap = useSyncExternalStore(
    berlangganan,
    ambilTema,
    ambilTemaServer
  );

  function gantiTema() {
    document.documentElement.classList.toggle("dark", !gelap);
    window.dispatchEvent(new Event("tema-berubah"));
  }

  return (
    <Button
      variant="outline"
      onClick={gantiTema}
      aria-pressed={gelap}
      className="border-white bg-transparent text-white hover:bg-aksen hover:text-white"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </Button>
  );
}
