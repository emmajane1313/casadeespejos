"use client";

import { LTR } from "@/app/lib/constantes";
import { usePathname, useRouter } from "next/navigation";
import { MdOutlineLanguage } from "react-icons/md";

export default function Header({
  dict,
  lang,
  routerPath,
}: {
  dict: any;
  lang: string;
  routerPath: string;
}) {
  const router = useRouter();
  const path = usePathname();

  const reverseString = (str: string) => str?.split("").reverse().join("");

  const changeLanguage = (lang: string) => {
    const segments = path.split("/");
    segments[1] = lang ?? "en";
    const newPath = segments.join("/");

    document.cookie = `NEXT_LOCALE=${lang}; path=/; SameSite=Lax`;

    router.push(newPath);
  };

  return (
    <div className="absolute top-2 w-full h-fit items-start justify-center text-white flex flex-row gap-4 sm:flex-nowrap flex-wrap font-broken px-2 z-50">
      {path !== "/" && path !== `/${lang}/` ? (
        <div
          className="relative w-full h-fit flex text-xl font-mask text-verde flex-row items-center justify-center cursor-pointer"
          onClick={() => router.push(routerPath)}
        >
          <div className="relative flex w-fit h-fit">C</div>
          <div className="font-broken text-xl relative flex w-fit h-fit">
            asa de espejo
          </div>
          <div className="scale-x-[-1] relative flex w-fit h-fit origin-left left-6">
            S
          </div>
        </div>
      ) : (
        <>
          <div
            className="w-fit flex justify-center text-sm mr-5 cursor-pointer"
            onClick={() => router.push("/reflections")}
          >
            <ul className="flex flex-col p-0 m-0 list-none">
              {Array.from({ length: 3 }).map((_, i) => (
                <li
                  dir={LTR.includes(lang) ? "ltr" : "rtl"}
                  key={i}
                  className="uppercase text-center leading-[0.9] scale-x-[1.2] -my-[2%] overflow-hidden h-[0.54em] text-cast"
                >
                  {dict?.read}
                </li>
              ))}
              <li
                dir={LTR.includes(lang) ? "ltr" : "rtl"}
                className="uppercase text-center text-cesped leading-[0.9] scale-x-[1.2] -my-[2%]"
              >
                {dict?.read}
              </li>
            </ul>
          </div>
          <MdOutlineLanguage
            className="absolute w-fit h-fit flex cursor-pointer"
            size={20}
            onClick={() =>
              changeLanguage(
                lang == "" || lang == "en"
                  ? "es"
                  : lang == "es"
                  ? "pt"
                  : lang == "pt"
                  ? "ar"
                  : lang == "ar"
                  ? "he"
                  : lang == "he"
                  ? "yi"
                  : lang == "yi"
                  ? "fa"
                  : lang == "fa"
                  ? "ym"
                  : lang == "ym"
                  ? "gd"
                  : "en"
              )
            }
            color="#38f2a3"
          />
          <div
            className="w-fit flex justify-center text-sm ml-5 cursor-pointer"
            onClick={() => router.push("/reflections")}
          >
            <ul className="flex flex-col p-0 m-0 list-none">
              {Array.from({ length: 3 }).map((_, i) => (
                <li
                  key={i}
                  className="uppercase text-center leading-[0.9] scale-x-[1.2] -my-[2%] overflow-hidden h-[0.54em] text-cast"
                >
                  {reverseString(dict?.read)}
                </li>
              ))}
              <li className="uppercase text-center leading-[0.9] scale-x-[1.2] -my-[2%] text-cesped">
                {reverseString(dict?.read)}
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
