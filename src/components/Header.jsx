import { useState, useCallback, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { navigation } from "../constants";
import MobileMenuToggle from "./MobileMenuToggle";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavigation = useCallback(() => {
    setIsNavOpen((prev) => {
      const newState = !prev;
      newState ? disablePageScroll() : enablePageScroll();
      return newState;
    });
  }, []);

  const handleNavClick = useCallback(() => {
    if (isNavOpen) {
      enablePageScroll();
      setIsNavOpen(false);
    }
  }, [isNavOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isNavOpen) {
        enablePageScroll();
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isNavOpen]);

  return (
    <header className="relative">
      <div className="mx-4 mt-8 rounded-2xl bg-color-3/50 px-4 sm:px-6 lg:mx-8 lg:px-8">
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
          <div className="flex items-center">
            <nav
              className={`${
                isNavOpen
                  ? "absolute inset-x-0 top-0 z-3 h-screen bg-color-4 p-12"
                  : "hidden"
              } lg:block`}
              aria-label="Main navigation"
            >
              <ul className="flex flex-col space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
                {navigation.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      className="text-lg transition-colors hover:text-color-2 lg:text-base"
                      onClick={handleNavClick}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="ml-4 flex items-center">
              <a
                href="/download"
                className="hidden rounded-full bg-color-1 px-4 py-2 font-medium text-color-3 transition-colors hover:bg-color-2 lg:block"
                aria-label="Download Vaultflow App"
              >
                Download the app
              </a>
              <div className="z-10 lg:hidden">
                <MobileMenuToggle
                  isOpen={isNavOpen}
                  onClick={toggleNavigation}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
