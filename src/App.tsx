import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/technologyCard";
import technologies from "./data/technologies.json";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section
        id="technologies"
        className="mx-auto w-[92%] max-w-7xl py-16"
      >
        <h2 className="text-3xl font-bold">Explore Technologies</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <TechnologyCard key={tech.id} tech={tech} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;