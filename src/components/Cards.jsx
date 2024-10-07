const Cards = () => {
  return (
    <section className="py-10 lg:py-16 xl:py-20">
      <div className="container">
        <div className="flex flex-col content-center items-center gap-20">
          <div className="gap-10 md:flex">
            <div className="border-color-1/30 max-w-[50%] rounded-3xl border-t p-15 shadow-cardShadow">
              <img className="" src="/icon-1.svg" alt="icon" />
              <h4 className="text-color-2 h4 py-4">Analytics Dashboard</h4>
              <p className="text-color-2 pb-4">
                Our Analytics Dashboard provides a clear and intuitive interface
                for you to easily analyze your data. From customizable graphs to
                real-time data updates, our dashboard offers everything you need
                to gain valuable insights.
              </p>
              <a className="underline underline-offset-2" href="/">
                View dashboard
              </a>
            </div>
            <div className="border-color-1/20 max-w-[50%] rounded-3xl border-t p-15 shadow-cardShadow">
              <img src="/icon-2.svg" alt="icon" />
              <h4 className="text-color-2 h4 py-4">Digital Credit Tokens</h4>
              <p className="text-color-2 pb-4">
                Reward your customers and incentivize engagement with our
                innovative digital credit tokens. Our tokens can be customized
                to match your branding, and are a flexible and scalable way to
                drive customer loyalty and encourage repeat business.
              </p>
              <a className="underline underline-offset-2" href="/">
                View tokens
              </a>
            </div>
          </div>
          <div className="border-color-1/20 w-full justify-between rounded-3xl border-t p-15 shadow-cardShadow md:flex">
            <div className="md:w-2/5">
              <img src="/icon-3.svg" alt="icon" />
              <h4 className="text-color-2 h4 py-4">Code collaboration</h4>
              <p className="text-color-2 pb-4">
                Our advanced code synchronization technology ensures that your
                data is always up-to-date and accurate, no matter where
                it&apos;s coming from. Whether you&apos;re integrating data from
                multiple sources or working with a team of developers, our
                synchronization technology makes it easy to collaborate and
                ensure that your data is consistent and reliable.
              </p>
              <a className="underline underline-offset-2" href="/">
                View code collaboration
              </a>
            </div>
            <div className="border-color-1/20 rounded-3xl border-t shadow-cardShadow md:w-[45%]">
              <img src="/Image.png" alt="image" />
            </div>
          </div>
          <div className="border-color-1/20 w-full rounded-3xl border-t p-15 text-center shadow-cardShadow">
            <div className="mx-auto max-w-2xl">
              <h3 className="text-color-2 h3 font-bold">
                Our powerful analytics
                <br /> provides invaluable insights.
              </h3>
              <p className="text-color-2">
                Unlock the power of data with our cutting-edge analytics
                product. Get instant insights with our user-friendly Analytics
                Dashboard, and take advantage of our innovative digital credit
                tokens to reward your customers and incentivize engagement.
              </p>
              <button className="button-ghost mt-6">Download the app</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
