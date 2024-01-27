"use client";

import {
  Collapse,
  IconButton,
  Input,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";

import {
  ArrowPathRoundedSquareIcon,
  Bars3Icon,
  Bars4Icon,
  ChevronDownIcon,
  GlobeAmericasIcon,
  HeartIcon,
  MagnifyingGlassCircleIcon,
  MapPinIcon,
  PhoneIcon,
  ShoppingBagIcon,
  SquaresPlusIcon,
  SunIcon,
  TruckIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import "./navber.css";

const navListMenuItems = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
];

const NavbarPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavbarIconClick = () => {
    setIsMobileMenuOpen((cur) => !cur);
    setIsMenuOpen(false);
  };

  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem
          className="flex items-center gap-3 rounded-lg"
          placeholder={undefined}
        >
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
              placeholder={undefined}
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
              placeholder={undefined}
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
  return (
    <>
      {/*-------------------- top navber---------------- */}
      <section className="navber-top">
        <div className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="hidden md:block">
            {" "}
            {/* Hide on small and medium screens */}
            <div className="flex items-center justify-between text-blue-gray-900">
              <div className="mr-4 cursor-pointer py-1.5 font-medium">
                Welcome to Worldwide Electronics Store
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden lg:flex gap-3">
                  <div className="flex">
                    <MapPinIcon className="h-6 w-6 icon-btn" /> Store Locator
                  </div>
                  {" | "}
                  <div className="flex">
                    <TruckIcon className="h-6 w-6 icon-btn" /> Track Your Order
                  </div>
                  {" | "}
                  <div className="flex">
                    <ShoppingBagIcon className="h-6 w-6 icon-btn" /> Shop
                  </div>
                  {" | "}
                  <div className="flex">
                    <UserIcon className="h-6 w-6 icon-btn" /> My Account
                  </div>
                </div>
                <div className="lg:hidden">
                  <div className="flex">
                    <MapPinIcon className="h-6 w-6 icon-btn" /> Store Locator
                  </div>
                  {" | "}
                  <div className="flex">
                    <TruckIcon className="h-6 w-6 icon-btn" /> Track Your Order
                  </div>
                  {" | "}
                  <div className="flex">
                    <ShoppingBagIcon className="h-6 w-6 icon-btn" /> Shop
                  </div>
                  {" | "}
                  <div className="flex">
                    <UserIcon className="h-6 w-6 icon-btn" /> My Account
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*------------------------- main navber--------------- */}
      <Navbar
        variant="gradient"
        color="white"
        className="mx-auto from-white to-white px-4 py-3"
        placeholder={undefined}
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
          <div className="flex gap-5 justify-between">
            <Typography
              as="a"
              href="#"
              variant="h6"
              className="mr-4 ml-2 text-black cursor-pointer py-1.5"
              placeholder={undefined}
            >
              Company Logo
            </Typography>
            {/* <div className="md:ms-20">
              <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="top"
                allowHover={true}
              >
                <MenuHandler>
                  <Typography
                    as="div"
                    variant="small"
                    className="font-medium"
                    placeholder={undefined}
                  >
                    <ListItem
                      className="flex items-center gap-2 py-2 pr-4 font-medium text-black"
                      selected={isMenuOpen || isMobileMenuOpen}
                      onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                      placeholder={undefined}
                    >
                      Categories
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`hidden h-3 w-3 transition-transform lg:block ${
                          isMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`block h-3 w-3 transition-transform lg:hidden ${
                          isMobileMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </ListItem>
                  </Typography>
                </MenuHandler>
                <MenuList
                  className="hidden max-w-screen-xl rounded-xl lg:block"
                  placeholder={undefined}
                >
                  <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                    {renderItems}
                  </ul>
                </MenuList>
              </Menu>
              <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
              </div>
            </div> */}

            <div className="md:ms-20">
              {/* Navbar icon for small screens */}
              {isSmallScreen && (
                <div className="lg:hidden">
                  <div
                    className="flex items-center gap-2 py-2 pr-4 font-medium text-black"
                    onClick={handleNavbarIconClick}
                  >
                    <Bars3Icon className="h-10 w-10 icon-btn ms-[90%]" />
                  </div>
                </div>
              )}

              {/* Categories menu for medium and large screens */}
              {!isSmallScreen && (
                <Menu
                  open={isMenuOpen}
                  handler={setIsMenuOpen}
                  offset={{ mainAxis: 20 }}
                  placement="top"
                  allowHover={true}
                  className={`lg:block ${isMobileMenuOpen ? "hidden" : ""}`}
                >
                  <MenuHandler>
                    <Typography
                      as="div"
                      variant="small"
                      className="font-medium"
                      placeholder={undefined}
                    >
                      <ListItem
                        className="flex items-center gap-2 py-2 pr-4 font-medium text-black"
                        selected={isMenuOpen || isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        placeholder={undefined}
                      >
                        Categories
                        <ChevronDownIcon
                          strokeWidth={2.5}
                          className={`hidden h-3 w-3 transition-transform lg:block ${
                            isMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                        <ChevronDownIcon
                          strokeWidth={2.5}
                          className={`block h-3 w-3 transition-transform lg:hidden ${
                            isMobileMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                      </ListItem>
                    </Typography>
                  </MenuHandler>
                  <MenuList
                    className="hidden max-w-screen-xl rounded-xl lg:block"
                    placeholder={undefined}
                  >
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                      {renderItems}
                    </ul>
                  </MenuList>
                </Menu>
              )}

              {/* Mobile menu for small screens */}
              {isSmallScreen && (
                <div className="block lg:hidden">
                  <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
                </div>
              )}
            </div>
          </div>
          <div className="relative flex flex-col md:ms-7 md:flex-row w-full md:w-max gap-2">
            <Input
              type="search"
              color="black"
              label="Search For Products"
              className="pr-20 search-bar md:w-64"
              containerProps={{
                className: "w-full md:w-auto",
              }}
              crossOrigin={undefined}
            />
            <button className="absolute search-btn right-1 top-1 rounded">
              <MagnifyingGlassCircleIcon className="h-8 w-10 " />
            </button>
          </div>
          <div className="ml-auto flex  md:me-20 gap-3 md:mr-4">
            <IconButton variant="text" placeholder={undefined}>
              <ArrowPathRoundedSquareIcon className="h-6 w-6 icon-btn" />
            </IconButton>
            <IconButton variant="text" placeholder={undefined}>
              <HeartIcon className="h-6 w-6 icon-btn" />
            </IconButton>
            <IconButton variant="text" placeholder={undefined}>
              <UserIcon className="h-6 w-6 icon-btn" />
            </IconButton>
            <IconButton variant="text" placeholder={undefined}>
              <ShoppingBagIcon className="h-6 w-6 icon-btn" />
            </IconButton>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default NavbarPage;
