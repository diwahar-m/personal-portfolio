import Logo from "../assets/navbar/Logo.svg";
import menubarOpen from "../assets/navbar/menubarOpen.svg";
import menubarClose from "../assets/navbar/menubarClose.svg";
import { useState } from "react";
import { Box, Drawer, List, ListItem } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navbarLinks = ["home", "works", "about-me", "contacts"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="mx-auto sm:mx-[8rem] mt-[1.4rem] flex justify-between items-center ">
      {/* Social Media Links */}

      <div className="hidden sm:flex absolute top-0 left-[2rem]  flex-col justify-between  gap-[0.9rem] w-[3.125rem]">
        <div className="mx-auto">
          <div className="border-l-[2px] border-[#ABB2BF] h-[11.9rem]"></div>
        </div>
        <div className="flex flex-col gap-1 justify-between items-center w-[100%]">
          <FaGithub size={25} color={"#ABB2BF"} />
          <FaLinkedin size={25} color={"#ABB2BF"} />
        </div>
      </div>

      {/* Logo */}
      <div className=" flex gap-[0.5rem] iem-center">
        <img src={Logo} alt="logo" className="w-[1rem] h-[1rem]" />
        <h6 className="font-semibold text-[#fff]">Diwahar</h6>
      </div>
      {/* Navbar Links  */}
      <div className="hidden sm:flex justify-between items-center gap-[1.88rem]">
        {navbarLinks?.map((link) => (
          <a key={link} href={link} className="text-gray-400 text-base">
            <span className="text-primary-400">#</span>
            {link}
          </a>
        ))}
      </div>
      {/* Mobile - Navbar Links */}
      <button
        className="sm:hidden"
        onClick={open ? toggleDrawer(false) : toggleDrawer(true)}
      >
        <img src={open ? menubarClose : menubarOpen} />
      </button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          width: "60vw",
          height: "500px",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: "60vw",
            boxSizing: "border-box",
            backgroundColor: "#282C33",
          },
        }}
      >
        <Box
          sx={{
            paddingX: "20px",
            marginY: "20px",
            boxSizing: "border-box",
            height: "500px",
          }}
          className="bg-[#282C33]"
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List className="flex flex-col gap-[30px]">
            {navbarLinks?.map((link) => (
              <ListItem key={link} disablePadding>
                <a key={link} href={link} className="text-gray-400 text-base">
                  <span className="text-primary-400">#</span>
                  {link}
                </a>
              </ListItem>
            ))}

            <Box
              sx={{
                marginTop: "30px",
                marginX: "auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "30%",
              }}
            >
              <FaGithub size={30} color={"#ABB2BF"} />
              <FaLinkedin size={30} color={"#ABB2BF"} />
            </Box>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default Navbar;
