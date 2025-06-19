import ReflectionsEntry from "@/app/components/modules/ReflectionsEntry";
import { getDictionary } from "../dictionaries";
import { tParams } from "../layout";
import { LOCALES } from "@/app/lib/constantes";
import { Metadata } from "next";

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

export default async function Reflections({ params }: { params: tParams }) {
  const { lang } = await params;
  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return <ReflectionsEntry dict={dict} lang={lang} />;
}
