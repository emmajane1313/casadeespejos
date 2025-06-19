import { getDictionary } from "../../[lang]/dictionaries";
import { tParams } from "../../[lang]/layout";
import { Metadata } from "next";
import { ARTICULOS, LOCALES } from "@/app/lib/constantes";
import ReflectionEntry from "@/app/components/modules/ReflectionEntry";

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
  params: Promise<{ reflection: string }>;
}) {
  const { reflection } = await params;
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return (
    <ReflectionEntry
      dict={dict}
      lang={"en"}
      title={decodeURIComponent(reflection)}
    />
  );
}
