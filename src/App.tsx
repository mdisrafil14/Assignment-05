import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/technologyCard";
import YourStack from "./components/YourStack";
import technologies from "./data/technologies.json";
import type { Technology } from "./types/technology";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const addToStack = (tech: Technology) => {
    if (!stack.some((item) => item.id === tech.id)) {
      setStack([...stack, tech]);
    }
  };

  const removeFromStack = (id: string) => {
    setStack(stack.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar />
      <Hero />

      <section
        id="technologies"
        className="mx-auto grid w-[92%] max-w-7xl gap-8 py-16 lg:grid-cols-[1fr_320px]"
      >
        {/* Technology Cards */}
        <div>
          <h2 className="text-3xl font-bold">Explore Technologies</h2>

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
        </div>

        {/* Your Stack */}
        <div className="lg:pt-14">
          <YourStack
            stack={stack}
            onRemove={removeFromStack}
            onClear={() => setStack([])}
          />
        </div>
      </section>
    </>
  );
}

export default App;