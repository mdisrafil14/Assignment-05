import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section className="flex min-h-[500px] items-center justify-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Dev Stack
          </h1>
        </section>
      </main>
    </>
  );
}

export default App;