import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AmbientPlayer } from "./AmbientPlayer";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/nuestra-filosofia", label: "Nuestra Filosofía" },
  { to: "/nuestra-teologia", label: "Nuestra Teología" },
  { to: "/nuestras-raices", label: "Nuestras Raíces" },
  { to: "/reflexiones", label: "Reflexiones" },
  { to: "/preguntas-frecuentes", label: "Preguntas Frecuentes" },
  { to: "/nuestro-compromiso", label: "Nuestro Compromiso" },
] as const;

const base =
  "relative px-space-xs py-2 font-label-md text-label-md tracking-wider uppercase transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1.5px] after:bg-primary hover:after:w-full after:transition-all after:duration-300";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-sm border-b border-outline-variant">
      <div className="h-24 max-w-[1200px] mx-auto px-margin md:px-gutter-desktop flex items-center justify-between">
        <Link to="/" className="flex items-center gap-space-sm group focus:outline-none">
          <div className="flex flex-col text-left">
            <span className="font-headline-sm text-[1.05rem] sm:text-headline-sm font-normal text-primary tracking-tight leading-none group-hover:text-on-surface-variant transition-colors duration-200">
              Monoteísmo Ético Universalista
            </span>
          </div>
        </Link>
        <nav className="hidden xl:flex items-center gap-space-sm">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              className={base}
              activeProps={{ className: "text-on-surface font-semibold after:w-full" }}
              inactiveProps={{ className: "text-on-surface-variant hover:text-on-surface" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-space-sm">
          <AmbientPlayer />
          <Link to="/" className="hidden sm:inline-flex items-center px-4 py-2 rounded border border-outline-variant hover:border-primary text-on-surface font-label-sm text-label-sm uppercase tracking-wider transition-colors duration-200">
            Compendio General
          </Link>
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((o) => !o)}
            className="xl:hidden w-10 h-10 rounded bg-surface-container flex items-center justify-center text-primary"
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="xl:hidden border-t border-outline-variant/40 bg-surface px-margin pb-space-md flex flex-col">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              className="py-3 border-b border-outline-variant/30 font-label-md text-label-md uppercase tracking-wider"
              activeProps={{ className: "text-on-surface font-semibold" }}
              inactiveProps={{ className: "text-on-surface-variant" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
