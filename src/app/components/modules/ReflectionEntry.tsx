"use client";

import { ARTICULOS } from "@/app/lib/constantes";
import Header from "./Header";
import {
  IoLogoFlickr,
  IoLogoMedium,
  IoLogoYoutube,
} from "react-icons/io5";

export default function ReflectionEntry({
  dict,
  lang,
  title,
}: {
  dict: any;
  lang: string;
  title: string;
}) {
  return (
    <div className="relative w-full h-full min-h-screen items-center justify-between text-white text-white font-mare text-center pb-10 pt-20 text-sm flex flex-col gap-6">
      <Header lang={lang} dict={dict} routerPath={"/reflections"} />
      <div className="relative w-full h-fit flex justify-center px-3 items-start">
        <div
          className="relative w-2/3 h-fit"
          dangerouslySetInnerHTML={{
            __html:
              ARTICULOS.find((art) => art.titulo == title?.replaceAll("_", " "))
                ?.contenido ?? dict?.soon,
          }}
        ></div>
      </div>
      <div className="relative w-full h-fit flex items-center justify-center flex-row gap-2 sm:flex-nowrap flex-wrap">
        <IoLogoMedium
          color="white"
          size={15}
          className="cursor-pointer"
          onClick={() => window.open("https://medium.com/@casadeespejos")}
        />
        <IoLogoYoutube
          color="white"
          size={15}
          className="cursor-pointer"
          onClick={() => window.open("https://www.youtube.com/@noisemachine13")}
        />
        <IoLogoFlickr
          color="white"
          size={15}
          className="cursor-pointer"
          onClick={() =>
            window.open("https://www.flickr.com/photos/casadeespejos/")
          }
        />
      </div>
    </div>
  );
}
