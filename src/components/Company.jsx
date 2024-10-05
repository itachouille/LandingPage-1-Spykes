const Company = () => {
  return (
    <section className="container">
      <div className="mx-auto flex max-w-5xl flex-col content-center items-center gap-6">
        <p className="text-color-1/80">
          Trusted by teams at over 1,000 of the world’s leading organizations
        </p>
        <img src="/Logos.svg" alt="logo's compagny" />
        <div className="max-w-[470px] py-4 pt-8 text-center">
          <div className="max-w-[450px]">
            <h2 className="h2">Features that work for your future.</h2>
          </div>
          <div className="pt-4">
            <p>
              Check out our amazing features and experience the power of
              Vaultflow for yourself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;