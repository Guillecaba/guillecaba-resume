import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Raleway } from "@next/font/google";
import { appWithTranslation } from 'next-i18next'


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
    </>
  );
}

export default appWithTranslation(App)
