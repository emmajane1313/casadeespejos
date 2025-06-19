import ReflectionEntry from "@/app/components/modules/ReflectionEntry";
import { getDictionary } from "../../dictionaries";
import { tParams } from "../../layout";
import { ARTICULOS, LOCALES } from "@/app/lib/constantes";
import { Metadata } from "next";

export async function generateStaticParams() {
  return ARTICULOS.map((post) => ({
    title: post?.titulo,
  }));
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{
    reflection: string;
  }>;
}): Promise<Metadata> => {
  const { reflection } = await params;

  return {
    title: `Reflection | ${reflection}`,
    openGraph: {
      title: `Reflection | ${reflection}`,
    },
    alternates: {
      canonical: `https://casadeespejos.com/item/reflection/${reflection}/`,
      languages: LOCALES.reduce((acc, item) => {
        acc[
          item
        ] = `https://casadeespejos.com/${item}/reflection/${reflection}/`;
        return acc;
      }, {} as { [key: string]: string }),
    },
  };
};

export default async function Reflection({
  params,
}: {
  params: tParams & Promise<{ reflection: string }>;
}) {
  const { lang, reflection } = await params;
  const dict = await (getDictionary as (locale: any) => Promise<any>)(lang);
  return (
    <ReflectionEntry
      dict={dict}
      lang={lang}
      title={decodeURIComponent(reflection)}
    />
  );
}
