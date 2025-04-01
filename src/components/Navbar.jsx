import Logo from "../assets/navbar/Logo.svg";

const navbarLinks = ["home", "works", "about-me", "contacts"];

const Navbar = () => {
  return (
    <div className="mx-auto mt-[1.4rem] flex justify-between items-center">
      {/* Logo */}
      <div className=" flex gap-[0.5rem] iem-center">
        <img src={Logo} alt="logo" className="w-[1rem] h-[1rem]" />
        <h6 className="font-semibold text-[#fff]">Diwahar</h6>
      </div>
      {/* Navbar Links  */}
      <div className=" flex justify-between items-center gap-[1.88rem]">
        {navbarLinks?.map((link) => (
          <a key={link} href={link} className="text-gray-400 text-base">
            <span className="text-primary-400">#</span>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
