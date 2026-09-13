import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/technologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

import technologies from "./data/technologies.json";
import type { Technology } from "./types/technology";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const addToStack = (tech: Technology) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const removeFromStack = (id: string) => {
    const tech = stack.find((item) => item.id === id);

    setStack(stack.filter((item) => item.id !== id));

    if (tech) {
      toast.info(`${tech.name} removed from your stack.`);
    }
  };

  const clearStack = () => {
    setStack([]);
    toast.success("All technologies removed!");
  };

  return (
    <>
      <Navbar />
      <Hero />

      <section
        id="technologies"
        className="mx-auto grid w-[92%] max-w-7xl gap-8 py-16 lg:grid-cols-[1fr_320px]"
      >
        <div>
          <h2 className="text-3xl font-bold">Explore Technologies</h2>

          {loading ? (
            <p className="py-16 text-center text-slate-500">
              Loading technologies...
            </p>
          ) : (
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  onAdd={addToStack}
                  added={stack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="lg:pt-14">
          <YourStack
            stack={stack}
            onRemove={removeFromStack}
            onClear={clearStack}
          />
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={2000} />

      <Footer />
    </>
  );
}

export default App;