import { Icon } from "@iconify-icon/react";

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
          technologies as a Frontend with ReactJS and React Native.
        </p>
        <p>
          Curious, and proactive developer, always eager for learning new
          things.
        </p>
      </section>
      <section id="socials" className="space-x-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/guillecaba/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Redirect Linkedin"
        >
          <Icon icon="ion:logo-linkedin" alt="linkedin profile" />
        </a>
        <a
          href="https://github.com/Guillecaba"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Redirect to Github"
        >
          <Icon icon="ion:logo-github" alt="github profile" />
        </a>
      </section>
    </aside>
  );
};

export default Sidebar;
