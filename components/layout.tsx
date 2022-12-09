import Header from "./header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col max-w-5xl mx-auto lg:flex-row">{children}</main>
    </>
  );
};

export default Layout;
