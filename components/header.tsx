import Head from "next/head";

const Header = () => {
  return (
    <>
    <Head>
      <title>{"Guillermo Caballero / Software Developer"}</title>
      <meta
        name="description"
        content="Software Developer, with knowledge in the stack of technologies for the construction of web and mobile experiences, specialized in Frontend"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <header className="flex pt-4 justify-end">
      
    </header>
    </>
  );
};

export default Header;
