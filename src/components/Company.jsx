import logo1 from "../assets/brands/brand-1.png";
import logo2 from "../assets/brands/brand-2.png";
import logo3 from "../assets/brands/brand-3.png";
import logo4 from "../assets/brands/brand-4.png";
import logo5 from "../assets/brands/brand-5.png";
import logo6 from "../assets/brands/brand-6.png";
import logo0 from "../assets/brands/brand-7.png";

const Company = () => {
  return (
    <section className="py-10 lg:py-16 xl:py-20">
      <div className="container">
        <div className="body-1 m-auto flex max-w-5xl flex-col items-center gap-6">
          <p className="text-center text-color-2/80">
            Trusted by teams at over 1,000 of the world’s leading organizations
          </p>
          <div className="flex items-center gap-12">
            <img src={logo0} alt="brand logo" />
            <img src={logo1} alt="brand logo" />
            <img src={logo2} alt="brand logo" />
            <img src={logo3} alt="brand logo" />
            <img src={logo4} alt="brand logo" />
            <img src={logo5} alt="brand logo" />
            <img src={logo6} alt="brand logo" />
          </div>
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
