import Banner from "../components/Banner";
import AboutMe from "../components/AboutMe";
import Skill from "../components/Skill";
import ContactMe from "../components/ContactMe";
import Projects from "../components/Projects";
import Services from "../components/Services";
import BlogSection from "../components/BlogSection";
import FaqSection from "../components/FaqSection/FaqSection";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Services />

      <section className="max-w-[1400px] mx-auto overflow-hidden">
        <Projects />
        <Skill />
        <BlogSection />
        <ContactMe />
        <FaqSection />
      </section>
    </>
  );
};

export default Home;
