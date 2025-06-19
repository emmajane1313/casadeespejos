import NotFoundEntry from "@/app/components/modules/NotFoundEntry";
import { Metadata } from "next";
import { getDictionary } from "../[lang]/dictionaries";

export const metadata: Metadata = {
  title: "Not Found",
  openGraph: {
    title: "Not Found",
  },
};

export default async function NotFoundCatchAll() {
  const dict = await (getDictionary as (locale: any) => Promise<any>)("en");
  return <NotFoundEntry dict={dict} lang={"en"} />;
}
