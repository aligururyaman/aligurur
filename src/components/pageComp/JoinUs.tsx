import React from "react";
import { Vortex } from "../ui/vortex";

export function JoinUs() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Bir web sitesi mi düşünüyorsun?
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Hemen bizimle iletişime geç
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a
            href="https://wa.me/905347279587"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 hover:scale-105 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]"
          >
            Whatsapp
          </a>
        </div>
      </Vortex>
    </div>
  );
}
