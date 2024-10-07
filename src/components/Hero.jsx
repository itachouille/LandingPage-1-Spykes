const Hero = () => {
  return (
    <section className="py-10 lg:py-16 xl:py-20">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <button className="button-ghost border-white/40">
            We just raised $20M in Series B. Learn more
          </button>
          <h1 className="from-color-2 h1 bg-gradient-to-br to-transparent bg-clip-text text-transparent">
            Modern analytics <br /> for the modern world
          </h1>
          <p className="text-color-2/50 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className="flex gap-4">
            <button className="button">Download the app</button>
            <button className="button-ghost">Talk to an expert</button>
          </div>
        </div>
        <div className="mt-10">
          <img src="/hero-image.svg" alt="dashboard image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
