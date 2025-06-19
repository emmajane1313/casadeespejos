import { NextResponse } from "next/server";
import { ARTICULOS, LOCALES, REFLECTIONS } from "../lib/constantes";

function generateArticlesUrls(baseUrl: string) {
  return ARTICULOS.map((post) => {
    const loc = `${baseUrl}/reflection/${post?.titulo?.replaceAll(" ", "_")}/`;

    const alternates = LOCALES.map(
      (locale) =>
        `<xhtml:link rel="alternate" hreflang="${locale}" href="${baseUrl}/${locale}/reflection/${post?.titulo?.replaceAll(
          " ",
          "_"
        )}/" />`
    ).join("");
    const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/en/reflection/${post?.titulo?.replaceAll(
      " ",
      "_"
    )}/" />`;

    return `
      <url>
        <loc>${loc}</loc>
${alternates}
${xDefault}
        <image:image>
          <image:loc>${
            post?.image?.includes("https")
              ? post?.image
              : `https://casadeespejos.com/images/${post?.image}`
          }</image:loc>
          <image:title><![CDATA[${post?.titulo}]]></image:title>
          <image:caption><![CDATA[${post?.titulo}]]></image:caption>
        </image:image>
      </url>
      `;
  }).join("");
}

function generateStaticUrls(baseUrl: string, paths: string[]) {
  return paths
    .map((path) => {
      const loc = `${baseUrl}${path}`;
      const alternates = LOCALES.map(
        (locale) =>
          `<xhtml:link rel="alternate" hreflang="${locale}" href="${baseUrl}/${locale}${path}" />`
      ).join("");
      const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${path}" />`;

      return `
      <url>
        <loc>${loc}</loc>
        ${alternates}
${xDefault}
      </url>
      `;
    })
    .join("");
}

const imagesXml = (baseUrl: string) =>
  REFLECTIONS?.filter((ref) => ref?.image?.includes("png"))
    .map(
      (image) =>
        `
      <url>
        <loc>${baseUrl}/images/${image?.image}</loc>
  <image:image>
            <image:loc>${baseUrl}/images/${image?.image}</image:loc>
            <image:title><![CDATA[${image.alt} | Emancipa | Emma-Jane MacKinnon-Lee]]></image:title>
            <image:caption><![CDATA[${image.alt} | Emancipa | Emma-Jane MacKinnon-Lee]]></image:caption>
          </image:image>
      </url>
        `
    )
    .join("");

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://casadeespejos.com";

  const staticPaths = ["/", "/reflections/"];
  const staticXml = generateStaticUrls(baseUrl, staticPaths);
  const postsXml = generateArticlesUrls(baseUrl);
  const images = imagesXml(baseUrl);

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${staticXml}
${postsXml}
${images}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
