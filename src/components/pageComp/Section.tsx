"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "../ui/container-scroll-animation";

export function Section() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Her Cihaza Uygun <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Web App
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/images/yaman.webp"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-fill h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
