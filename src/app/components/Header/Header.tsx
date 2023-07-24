import Navbar from "./Navbar";
import Logo from "./Logo";

export const Header = () => {
  return (
    <header className="bg-dark-500 h-[64px] flex items-center">
      <div className="flex justify-between items-center container mx-auto">
        <Logo />
        <div className="hidden lg:block">
          <Navbar />
        </div>
      </div>
      <div className="lg:hidden mt-4">
        <Navbar />
      </div>
    </header>
  );
};
