"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { REFLECTIONS } from "@/app/lib/constantes";
import Image from "next/image";
import { useRouter } from "next/navigation";

function splitIntoChunks<T>(arr: T[], chunks: number): T[][] {
  const result: T[][] = Array.from({ length: chunks }, () => []);
  arr.sort(() => Math.random() - 0.5).forEach((item, index) => {
    result[index % chunks].push(item);
  });
  return result;
}

export default function ReflectionsEntry({
  dict,
  lang,
}: {
  dict: any;
  lang: string;
}) {
  const router = useRouter();
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [columns, setColumns] = useState<number>(3);
  const splitReflections = splitIntoChunks(REFLECTIONS, columns);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 684) {
        setColumns(1);
      } else if (width < 768) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    const scrollToPosition = (
      element: HTMLElement,
      target: number,
      duration: number
    ) => {
      const start = element.scrollTop;
      const distance = target - start;
      let startTime: number | null = null;

      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeOutCubic(progress);

        element.scrollTop = start + distance * ease;

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const timeout = setTimeout(() => {
      panelsRef.current.forEach((panel) => {
        if (panel) {
          const maxScroll = panel.scrollHeight - panel.clientHeight;
          const targetScroll = Math.floor(Math.random() * maxScroll);
          scrollToPosition(panel, targetScroll, 1500);
        }
      });
    }, 600);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <div className="relative w-full h-full min-h-screen items-center justify-center flex text-white flex bg-gradient-to-b from-frio/80 to-black/80">
      <Header lang={lang} dict={dict} routerPath={"/"} />
      <div className="relative flex flex-row w-fit h-screen justify-center">
        {splitReflections?.map((split, i) => (
          <div
            key={i}
            ref={(el) => (panelsRef.current[i] = el) as any}
            className="relative flex-1 w-fit justify-center overflow-y-scroll"
          >
            {split.map((ref, indice) => (
              
              <div
                key={indice}
                className="group flex w-fit h-fit relative items-center justify-center cursor-pointer p-10 bg-black rounded-full"
                onClick={() =>
                  router.push(`/reflection/${ref?.title?.replaceAll(" ", "_")}`)
                }
              >
                <div
                  className={`relative rounded-full w-40 h-40 flex transition-opacity duration-300 ${
                    ref?.contenido && "border border-cast"
                  }`}
                  id="glass-card"
                >
                  <div
                    className={`relative rounded-full w-full h-full flex mix-blend-luminosity hover:mix-blend-normal`}
                  >
                    <Image
                      draggable={false}
                      alt={ref?.alt}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                      src={
                        ref?.image?.includes("https")
                          ? ref?.image
                          : `/images/${ref?.image}`
                      }
                    />
                  </div>
                  {indice % 2 == 0 && (
                    <div className="absolute rounded-full top-0 left-0 w-full h-full flex bg-frio/70 group-hover:hidden cursor-pointer"></div>
                  )}
                  {/* <figcaption className="absolute bottom-1/2 left-4 text-white opacity-0 group-hover:opacity-100 h-fit w-36 transition-opacity duration-300 z-10 p-2 font-broken text-xs break-words">
                    {ref.caption}
                  </figcaption> */}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
