import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Mona_Sans, Bebas_Neue } from 'next/font/google';

// Load Mona Sans
const monaSans = Mona_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mona-sans',
});

// Load Bebas Neue
const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${monaSans.variable} ${bebasNeue.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
