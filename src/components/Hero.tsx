import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="mx-auto flex min-h-130 w-[92%] max-w-7xl items-center justify-between gap-10 py-16">
      
      {/* Text */}
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Build Your Ideal
          <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that
          fits your next project.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#technologies"
            className="rounded-md bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white"
          >
            Explore Technologies
          </a>

          <a
            href="#about"
            className="rounded-md border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Banner Image */}
      <div className="hidden md:block">
        <img
          src={banner}
          alt="Development stack illustration"
          className="w-90 lg:w-107.5"
        />
      </div>
    </section>
  );
};

export default Hero;