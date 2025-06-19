import { Metadata } from "next";
import { getDictionary } from "../[lang]/dictionaries";
import ReflectionsEntry from "../components/modules/ReflectionsEntry";
import { LOCALES } from "../lib/constantes";

export const metadata: Metadata = {
  title: "Reflections",
  openGraph: {
    title: "Reflections",
  },
  alternates: {
    canonical: `https://casadeespejos.com/reflections/`,
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://casadeespejos.com/${item}/reflections/`;
      return acc;
    }, {} as { [key: string]: string }),
  },
};

export default async function Reflections() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return <ReflectionsEntry dict={dict} lang={"en"} />;
}
