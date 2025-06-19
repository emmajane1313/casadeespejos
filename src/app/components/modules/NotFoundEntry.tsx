"use client";

import { LTR } from "@/app/lib/constantes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFoundEntry({
  dict,
  lang,
}: {
  dict: any;
  lang: string;
}) {
  const router = useRouter();
  return (
    <div className="relative w-full h-full min-h-screen items-center justify-center flex">
      <div
        className="relative w-full h-fit flex flex-col gap-3 items-center justify-center cursor-pointer"
        onClick={() => router.push("/")}
      >
        <div className="relative w-full h-fit flex text-9xl font-mask text-verde flex-row gap-2 items-center justify-center">
          <div className="relative flex w-fit h-fit">C</div>
          <div className="font-casa text-7xl relative flex w-fit h-fit">
            asa de espejo
          </div>
          <div className="scale-x-[-1] relative flex w-fit h-fit origin-left left-32">
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
            className="relative w-full text-white text-center h-fit flex"
            dir={LTR.includes(lang) ? "ltr" : "rtl"}
          >
            {dict?.found}
          </h1>
        </div>
      </div>
    </div>
  );
}
