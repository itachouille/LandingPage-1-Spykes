import { contact, social } from "../constants";

const Footer = () => {
  return (
    <footer className="container mt-[100px]">
      <div className="">
        <div>
          <div>
            <span>Contact</span>
            {contact.map((item) => (
              <a key={item.id} href={item.url}>
                {item.title} {item.url}
              </a>
            ))}
          </div>
          <div>
            <span>Careers</span>
            <a href="/">Careers@vaultflow.com</a>
          </div>
        </div>
        <div>
          <div>
            <span>Address</span>
            <span>398 11th Street, Floor 2 San Francisco, CA 94103</span>
          </div>
          <div>
            <span>Social</span>
            {social.map((item) => (
              <a key={item.id} href={item.url}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div>
        <span>© 2023 Vaultflow. All Rights Reserved.</span>
        <img src="/logo.png" width={22} height={22} alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
