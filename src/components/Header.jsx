import { navigation } from "../constants/index";
import MenuSvg from "../assets/svg/MenuSvg";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <header className="relative">
      <div
        className="absolute -z-3 size-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/header-bg.jpg')",
        }}
        role="img"
        aria-label="Decorative background image showing abstract visuals."
      />

      <div
        className={`${openNavigation ? "relative top-4 mx-2 h-screen rounded-3xl bg-color-4/50 px-2 py-3 backdrop-blur-md" : "relative top-4 mx-2 rounded-3xl bg-color-4/50 px-2 py-3 backdrop-blur-md"}`}
      >
        <div
          className={`${openNavigation ? "flex flex-col" : "flex w-full items-center justify-between px-2"}`}
        >
          <div
            className={`${openNavigation ? "mx-4 flex justify-between" : "mx-4 flex w-full justify-between"}`}
          >
            <a href="#hero" className="flex" aria-label="Vaultflow Home">
              <img
                src="/logo.png"
                width={22}
                height={22}
                alt="Vaultflow logo"
                loading="lazy"
              />
              <span className="ml-2">Vaultflow</span>
            </a>
            <button
              className="lg:hidden"
              onClick={toggleNavigation}
              aria-label="Toggle navigation menu"
            >
              <MenuSvg openNavigation={openNavigation} />
            </button>
          </div>
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } h-full lg:static lg:mx-auto lg:flex lg:bg-transparent`}
          >
            <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
              {navigation.map((item) => (
                <a
                  className={`relative block text-2xl text-color-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } p-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-color-1"
                      : "lg:text-color-1/50"
                  } lg:leading-5 lg:hover:text-color-1 xl:px-12`}
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  aria-label={item.title}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>
          <button
            className="button hidden lg:block"
            aria-label="Download Vaultflow App"
          >
            Download the app
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
