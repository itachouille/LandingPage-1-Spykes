import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import MenuSvg from "../assets/svg/MenuSvg";

export default function Header() {
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
      <div className="mx-4 mt-10 rounded-2xl bg-color-3/50 px-4 sm:px-6 lg:mx-8 lg:px-8">
        <div className="flex items-center justify-between py-2 lg:py-4">
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
          <div className="flex items-center lg:justify-between">
            <nav
              className={`${
                openNavigation
                  ? "absolute inset-x-0 -top-10 z-3 h-screen bg-color-4/90"
                  : "hidden"
              } lg:block`}
              aria-label="Main navigation"
            >
              <div className="flex h-full flex-col justify-center space-y-4 text-center lg:flex-row lg:space-x-8 lg:space-y-0">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    className={`text-5xl transition-colors hover:text-color-2 lg:text-base ${
                      item.url === pathname.hash
                        ? "z-2 lg:text-color-1"
                        : "lg:text-color-1/50"
                    }`}
                    onClick={handleClick}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </nav>
          </div>
          <div className="ml-4 flex items-center">
            <button className="button hidden lg:block">Download the app</button>
            <button onClick={toggleNavigation} className="z-10 lg:hidden">
              <MenuSvg openNavigation={openNavigation} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
