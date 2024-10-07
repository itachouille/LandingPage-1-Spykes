import { contact, social } from "../constants";

const Footer = () => {
  return (
    <footer id="about-us">
      <section className="py-10 lg:py-16 xl:py-20">
        <div className="container">
          <div className="mb-2">
            <div className="">
              <div className="">
                <span className="h6 pb-1">Contact</span>
                {contact.map((item) => (
                  <a
                    className="body-1 block"
                    key={item.id}
                    href={item.url}
                    target="_blank"
                  >
                    {item.title} {item.url}
                  </a>
                ))}
              </div>
              <div className="">
                <span className="h6 pb-1">Careers</span>
                <a className="body-1 block" href="/" target="_blank">
                  Careers@vaultflow.com
                </a>
              </div>
            </div>
            <div>
              <div className="">
                <span className="h6 pb-1">Address</span>
                <span className="body-1 block">
                  398 11th Street, Floor 2 San Francisco, CA 94103
                </span>
              </div>
              <div className="">
                <span className="h6 pb-1">Social</span>
                {social.map((item) => (
                  <a
                    className="body-1 block"
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
            <span>© 2023 Vaultflow. All Rights Reserved.</span>
            <a href="/">
              <img src="/logo.png" width={22} height={22} alt="logo" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
