import { Raleway } from "@next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from "next/app";
import "../styles/globals.css";


const raleway = Raleway({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${raleway.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default appWithTranslation(App)
