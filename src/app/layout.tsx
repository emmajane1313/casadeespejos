import type { Metadata } from "next";
import "./globals.css";
import { LOCALES } from "./lib/constantes";

export const metadata: Metadata = {
  metadataBase: new URL("https://casadeespejos.com"),
  title: "Casa de Espejos by Emma-Jane MacKinnon-Lee",
  description:
    "Un experimento, a noise machine study, raging against those machines.",
  twitter: {
    card: "summary_large_image",
    creator: "@emmajane1313",
    title: "Casa de Espejos by Emma-Jane MacKinnon-Lee",
    description:
      "Un experimento, a noise machine study, raging against those machines.",
  },
  openGraph: {
    title: "Casa de Espejos  by Emma-Jane MacKinnon-Lee",
    description:
      "Un experimento, a noise machine study, raging against those machines.",
  },
  alternates: {
    canonical: `https://casadeespejos.com/`,
    languages: LOCALES.reduce((acc, item) => {
      acc[item] = `https://casadeespejos.com/${item}/`;
      return acc;
    }, {} as { [key: string]: string }),
  },
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
  keywords: [
    "Web3",
    "Web3 Fashion",
    "Moda Web3",
    "Open Source",
    "CC0",
    "Emma-Jane MacKinnon-Lee",
    "Open Source LLMs",
    "DIGITALAX",
    "F3Manifesto",
    "digitalax",
    "f3manifesto",
    "syntheticfutures",
    "Women",
    "Life",
    "Freedom",
  ],
  pinterest: {
    richPin: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://emmajanemackinnonlee.com/#person",
              name: "Emma-Jane MacKinnon-Lee",
              url: "https://emmajanemackinnonlee.com/",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://emmajanemackinnonlee.com/",
              },
              sameAs: [
                "https://emmajanemackinnonlee.com/",
                "https://emmajanemackinnon.com/",
                "https://janefuture.com/",
                "https://emmajanemackinnonlee.xyz/",
                "https://emmajanemackinnonlee.net/",
                "https://emmajanemackinnonlee.ai/",
                "https://emmajanemackinnonlee.org/",
                "https://emmajanemackinnonlee-f3manifesto.com/",
                "https://emmajanemackinnonlee-cc0.com/",
                "https://emmajanemackinnonlee-digitalax.com/",
                "https://emmajanemackinnonlee-runway.com/",
                "https://icoinedweb3fashion.com/",
                "https://syntheticfutures.xyz/",
                "https://web3fashion.xyz/",
                "https://emancipa.xyz/",
                "https://highlangu.com/",
                "https://digitalax.xyz/",
                "https://cc0web3fashion.com/",
                "https://cc0web3.com/",
                "https://cuntism.net/",
                "https://dhawu.com/",
                "https://casadeespejos.com/",
                "https://emancipa.net/",
                "https://dhawu.emancipa.xyz/",
                "https://highlangu.emancipa.xyz/",
                "https://twitter.com/emmajane1313",
                "https://medium.com/@casadeespejos",
                "https://www.flickr.com/photos/emmajanemackinnonlee/",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-gradient-to-b from-cast/40 via-frio/80 to-black/80 relative w-full h-full min-h-screen">
        <video
          autoPlay
          controls={false}
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
          draggable={false}
          poster="/images/emmajanemackinnonlee_poster.png"
        >
          <source src="/videos/timeline.mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-frio/80 to-black/80"></div>
        {children}
      </body>
    </html>
  );
}
