const Sidebar = () => {
  return (
    <aside className="space-y-4 lg:w-full ">
      <section id="title">
        <h1 className="font-bold text-2xl text-blue-800">
          Guillermo Caballero
        </h1>
        <h2 className="font-bold text-1xl ">Software Developer</h2>
      </section>
      <section id="basic">
        <h2 className="font-semibold text-blue-800">About me</h2>
        <p>
          Developer with almost 4 years of experience providing web and mobile
          solutions.For the last years, i have been working with Javascript
          technologies  as a Frontend with ReactJS and React Native.
        </p>
        <p>
        Curious, and proactive developer, always eager for learning new
          things.
        </p>
      </section>
    </aside>
  );
};

export default Sidebar;
