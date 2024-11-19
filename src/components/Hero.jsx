import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="py-10 lg:py-16 xl:py-20">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <button className="button-ghost border-white/40">
            We just raised $20M in Series B. Learn more
          </button>
          <h1 className="h1 bg-gradient-to-br from-color-1 to-transparent bg-clip-text text-transparent">
            Modern analytics <br /> for the modern world
          </h1>
          <p className="max-w-lg text-color-2/50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className="flex gap-4">
            <button className="button">Download the app</button>
            <button className="button-ghost">Talk to an expert</button>
          </div>
        </div>
        <div className="mt-10">
          <img
            className="size-full"
            src={hero}
            alt="dashboard image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
