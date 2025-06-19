"use client";

import Image from "next/image";
import Header from "./Header";
import MarqueeText from "react-fast-marquee";
import { LTR } from "@/app/lib/constantes";

export default function Entry({ dict, lang }: { dict: any; lang: string }) {
  return (
    <div className="relative w-full h-full min-h-screen items-center justify-center flex text-white flex">
      <Header lang={lang} dict={dict} routerPath={"/"} />
      <div className="relative w-full h-fit flex flex-col gap-3 items-center justify-center">
        <div className="relative w-full h-fit flex text-2xl galaxy:text-6xl md:text-9xl font-mask text-verde flex-row gap-2 items-center justify-center">
          <div className="relative flex w-fit h-fit">C</div>
          <div className="font-casa text-xl galaxy:text-5xl md:text-7xl relative flex w-fit h-fit">
            asa de espejo
          </div>
          <div className="scale-x-[-1] relative flex w-fit h-fit origin-left left-4 galaxy:left-14 md:left-32">
            S
          </div>
        </div>
        <div className="relative flex-col text-center w-fit h-fit flex items-center justify-center font-broken text-xs gap-2">
          <div className="relative w-fit h-fit flex">
            <div className="relative w-6 h-6 flex">
              <Image
                src={"/images/estrella.png"}
                layout="fill"
                objectFit="contain"
                alt="estrella"
                draggable={false}
              />
            </div>
          </div>
          <h1
            dir={LTR.includes(lang) ? "ltr" : "rtl"}
            className={`relative h-fit flex text-center ${
              LTR.includes(lang) ? "w-60" : "w-fit"
            }`}
          >
            {dict?.frag}
          </h1>
        </div>
      </div>
      <div className="absolute bottom-0 w-full py-3 flex flex-row">
        <MarqueeText gradient={false} speed={100} direction={"right"}>
          {Array.from({ length: 30 }).map((_, index: number) => {
            return (
              <div
                className="relative flex flex-row gap-3 px-5 text-7xl"
                key={index}
              >
                <span
                  dir={LTR.includes(lang) ? "ltr" : "rtl"}
                  className="relative font-broken"
                  style={{
                    WebkitTextStroke: "1px white",
                    color: "transparent",
                  }}
                >
                  {dict?.llm}
                </span>
                <span
                  dir={LTR.includes(lang) ? "ltr" : "rtl"}
                  className="relative font-seven"
                  style={{
                    WebkitTextStroke: "1px white",
                    color: "transparent",
                  }}
                >
                  {dict?.listen}
                </span>
              </div>
            );
          })}
        </MarqueeText>
      </div>
    </div>
  );
}
