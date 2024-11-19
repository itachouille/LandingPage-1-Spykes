import Card from "./Card";
import icon1 from "../assets/icons/icon-1.svg";
import icon2 from "../assets/icons/icon-2.svg";
import icon3 from "../assets/icons/icon-3.svg";
import code from "../assets/code.png";

const Cards = () => {
  return (
    <section id="features" className="py-10 lg:py-16 xl:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            <Card
              icon={icon1}
              title="Analytics Dashboard"
              description="Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."
              link="View dashboard"
            />

            <Card
              icon={icon2}
              title="Digital Credit Tokens"
              description="Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business."
              link="View tokens"
            />
          </div>
          <div className="w-full justify-between rounded-3xl border-t border-color-1/20 p-8 shadow-cardShadow lg:flex lg:p-15">
            <div className="mb-12 lg:mb-0 lg:w-2/5">
              <img src={icon3} alt="icon" />
              <h4 className="h4 py-4 text-color-2">Code collaboration</h4>
              <p className="pb-4 text-color-2/80">
                Our advanced code synchronization technology ensures that your
                data is always up-to-date and accurate, no matter where
                it&apos;s coming from. Whether you&apos;re integrating data from
                multiple sources or working with a team of developers, our
                synchronization technology makes it easy to collaborate and
                ensure that your data is consistent and reliable.
              </p>
              <a className="underline underline-offset-4" href="/">
                View code collaboration
              </a>
            </div>
            <div className="rounded-3xl border-t border-color-1/20 shadow-cardShadow lg:w-[45%]">
              <img
                src={code}
                alt="image"
                loading="lazy"
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="w-full rounded-3xl border-t border-color-1/20 p-10 text-center shadow-cardShadow lg:p-20">
            <div className="mx-auto max-w-screen-md">
              <h5 className="h5 mb-4 text-4xl font-bold text-color-2">
                Our powerful analytics
                <br className="hidden sm:inline" /> provides invaluable
                insights.
              </h5>
              <p className="mx-auto mb-6 max-w-xl text-color-2/80">
                Unlock the power of data with our cutting-edge analytics
                product. Get instant insights with our user-friendly Analytics
                Dashboard, and take advantage of our innovative digital credit
                tokens to reward your customers and incentivize engagement.
              </p>
              <button className="button-ghost">Download the app</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
