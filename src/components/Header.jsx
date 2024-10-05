import { navigation } from "../constants/index";

const Header = () => {
  return (
    <header className="">
      <div className="bg-color-14/60 relative top-9 mx-8 rounded-3xl px-8 backdrop-blur-md">
        <div className="flex w-full items-center justify-between">
          <a href="#hero" className="flex">
            <img src="/logo.png" width={22} height={22} alt="logo" />
            <span className="ml-2">Vaultflow</span>
          </a>
          <nav className="flex gap-8">
            {navigation.map((item) => (
              <a className="px-2 py-4" key={item.id} href={item.url}>
                {item.title}
              </a>
            ))}
          </nav>
          <button className="button">Download the app</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
