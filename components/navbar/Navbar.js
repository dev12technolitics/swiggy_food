import { Transition } from "@headlessui/react";
import React from "react";
import { MobileSidebar } from "./mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div
        className="sticky top-0 w-full flex justify-center items-center"
        style={{
          backgroundColor: "#fff",
          transition: "all 0.5s ease",
          scrollBehavior: "smooth",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          zIndex: "2",
          alignItems: "center"
        }}
      >
        <nav className="container cantainer_box_size">
          <div className="w-full py-4 sticy_pointer">
            <div className="flex items-center justify-between main_nav_height h-12 w-full">
              <div className="flex md:hidden ">
                <button
                  type="button"
                  style={{ color: "black" }}
                  className="inline-flex items-center justify-center rounded-md text-white  lg:text-[14px] font-[400 hover:text-white hover:bg-white-800 focus:outline-none "
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <MobileSidebar />
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3 navElement"
                >
                  {navBarElements.map((element) => (
                    <a
                      key={element.name}
                      href={element.link}
                      className=" block px-3 py-2 rounded-md text-base font-medium"
                      style={{ color: scroll ? "black" : "white" }}
                    >
                      {element.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

