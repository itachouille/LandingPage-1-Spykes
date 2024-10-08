const Company = () => {
  return (
    <section className="py-10 lg:py-16 xl:py-20">
      <div className="container">
        <div className="body-1 m-auto flex max-w-5xl flex-col items-center gap-6">
          <p className="text-center text-color-2/80">
            Trusted by teams at over 1,000 of the world’s leading organizations
          </p>
          <img
            src="/Logos.png"
            alt="Logos of companies that trust Vaultflow"
            loading="lazy"
            className="h-auto w-full max-w-[330px] scale-150 lg:max-w-[1000px]"
          />
          <div className="mt-5 max-w-[500px] text-center lg:mt-16">
            <div>
              <p className="h2 text-color-2">
                Features that work for your future.
              </p>
            </div>
            <div className="pt-4">
              <p className="text-color-2/80">
                Check out our amazing features and experience the power of
                Vaultflow for yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
