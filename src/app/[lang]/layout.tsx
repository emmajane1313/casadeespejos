import { LOCALES } from "../lib/constantes";

export async function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "es" },
    { lang: "ar" },
    { lang: "pt" },
    { lang: "he" },
    { lang: "yi" },
    { lang: "fa" },
    { lang: "ym" },
    { lang: "gd" },
  ];
}
export type tParams = Promise<{ lang: string }>;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
