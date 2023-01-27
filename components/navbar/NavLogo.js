import Link from "next/link";
import React from "react";
import Logo from "../../assets/svg/logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div
        className="sticky top-0 w-full flex justify-center items-center"
        style={{
          backgroundColor: "#0c4e60",
          transition: "all 0.5s ease",
          scrollBehavior: "smooth",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          zIndex: "2",
          alignItems: "center",
        }}
      >
        <nav className="container cantainer_box_size">
          <div className="w-full py-1 sticy_pointer">
            <div className="flex items-center justify-center main_nav_height h-12 w-full ">
              <div className="flex items-center justify-center w-full">
                <Link href={"/"}>
                  <div className="flex justify-start items-center hover:cursor-pointer sm:h-[70px] w-[70px] sm:w-[90px] h-[50px]">
                    <Logo heightSvg={"100%"} widthSvg={"100%"} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
