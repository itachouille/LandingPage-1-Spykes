import { contact, social } from "../constants";

const Footer = () => {
  return (
    <footer id="about-us">
      <section className="py-10 lg:py-16 xl:py-20">
        <div className="container">
          <div className="mb-8 flex flex-col lg:grid lg:grid-cols-2">
            <div>
              <div className="mb-8">
                <span className="h6 pb-1">Contact</span>
                {contact.map((item) => (
                  <a
                    className="body-1 block text-color-2/80"
                    key={item.id}
                    href={item.url}
                    target="_blank"
                  >
                    {item.title} {item.url}
                  </a>
                ))}
              </div>
              <div>
                <span className="h6 pb-1">Careers</span>
                <a
                  className="body-1 block text-color-2/80"
                  href="/"
                  target="_blank"
                >
                  Careers@vaultflow.com
                </a>
              </div>
            </div>
            <div>
              <div className="mb-8">
                <span className="h6 pb-1">Address</span>
                <span className="body-1 block text-color-2/80">
                  398 11th Street, Floor 2<br /> San Francisco,CA 94103
                </span>
              </div>
              <div>
                <span className="h6 pb-1">Social</span>
                {social.map((item) => (
                  <a
                    className="body-1 block text-color-2/80"
                    key={item.id}
                    href={item.url}
                    target="_blank"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between pb-4">
            <span className="text-color-2/80">
              © 2023 Vaultflow. All Rights Reserved.
            </span>
            <div className="flex items-center">
              <a
                href="/"
                className="flex items-center"
                aria-label="Vaultflow Logo"
              >
                <img
                  src="/logo.png"
                  width={22}
                  height={22}
                  alt="Vaultflow logo"
                  className="mr-2"
                />
                <span className="text-xl font-semibold">Vaultflow</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
