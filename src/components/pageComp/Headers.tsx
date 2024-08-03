"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "../ui/text-generate-effect";

function Headers() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <h1 className="text-4xl font-semibold text-black dark:text-white mt-20">
        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
          Yaman Web App
        </span>
      </h1>
      <Boxes />
    </div>
  );
}

export default Headers;
