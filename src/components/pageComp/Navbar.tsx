"use client";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 hover:scale-105",
        className
      )}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Ana Sayfa</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Hakkımızda">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Personal">Kişisel Bilgiler</HoveredLink>
            <HoveredLink href="/Skills">Beceriler</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Project">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Hasan Akkas Tic."
              href="https://github.com/aligururyaman/hasanakkas"
              src="/images/hasanakkas.jpg"
              description="E-Tiaret Web App"
            />
            <ProductItem
              title="Glaim Arc."
              href="https://github.com/aligururyaman/arcWebApp"
              src="/images/arc.png"
              description="Mimarlık Web App"
            />
            <ProductItem
              title="Weather App"
              href="https://github.com/aligururyaman/weatherApi"
              src="/images/havadurumu.jpeg"
              description="Hava Durumu Mobile App"
            />
            <ProductItem
              title="Movie Mobil App"
              href="https://github.com/aligururyaman/movieApp"
              src="/images/movie.jpg"
              description="Filmler hakkında bilgi veren Mobil App"
            />
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
