"use client"
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { GithubIcon, Instagram, MoonStarIcon, SunIcon } from "lucide-react";

interface PageProps {
  isScrolled: boolean
  isDarkMode: boolean,
  setDarkmode: (isDarkMode: boolean) => void
}

const dataMenubar = [
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Project",
    link: "#project",
  },
  {
    title: "Experience",
    link: "#experience",
  },
];

export const NavbarMenu: React.FC<PageProps> = ({isScrolled, setDarkmode, isDarkMode}): JSX.Element => {
  
  return (
    <>
      <header className="relative z-10">
        <nav
          className={`py-4 px-8 fixed top-0 left-0 w-full p-4 transition duration-300 ${
            isScrolled ? "bg-opacity-75 backdrop-blur-lg" : "bg-transparent"
          }`}
        >
          <div className="flex justify-between">
            <div className="">
              <div className="flex space-x-2">
                <a href="/">
                  <div className="flex mx-2">
                    <img src={"/e-logo.png"} width={25} height={10} />
                    <p className="font-bold text-2xl text-maincolor">PUL</p>
                    <p className="font-bold text-black dark:text-white">DEV</p>
                  </div>
                </a>
                <ul className="lg:flex space-x-3 justify-between mx-3 mt-1 leading-tighter tracking-tighter text-white text-md sm: hidden">
                  {dataMenubar.map((data) => (
                    <a key={data.title} href={data.link}>
                      <li className="font-medium text-black dark:text-blue-400 hover:text-blue-200">
                        {data.title}
                      </li>
                    </a>
                  ))}
                </ul>
                <div className="lg:hidden sm:flex">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="p-3 space-x-3 justify-between mx-3 mt-1 leading-tighter tracking-tighter text-white text-md">
                            {dataMenubar.map((data) => (
                              <a key={data.title} href={data.link}>
                                <li className="font-medium text-black dark:text-blue-400 hover:text-blue-200">
                                  {data.title}
                                </li>
                              </a>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </div>
            </div>
            <div className="flex justify-around space-x-3">
              <div className="">
                <div
                  className="flex relative w-16 h-8 items-center dark:bg-gray-800 bg-teal-900 cursor-pointer transition duration-300 delay-100 ease-in rounded-full p-1"
                  onClick={() => setDarkmode(!isDarkMode)}
                >
                  <MoonStarIcon className="text-white" size={18} />
                  <div
                    className="absolute bg-white dark:bg-gray-700 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
                    style={isDarkMode ? { left: "2px" } : { right: "2px" }}
                  ></div>
                  <SunIcon className="ml-auto text-yellow-500" size={18} />
                </div>
              </div>
              <div className="lg:flex space-x-2 md: hidden">
                <div className="rounded-full cursor-pointer bg-gray-800 dark:bg-white p-2 w-8 h-8 duration-100 transition ease-in hover:bg-cyan-100 p-2 flex justify-center">
                  <a href="https://github.com/muhammadsaefulr/">
                    <GithubIcon
                      className="pb-1 text-white dark:text-black"
                      size={20}
                    />
                  </a>
                </div>
                <div className="rounded-full cursor-pointer bg-gray-800 dark:bg-white p-2 w-8 h-8 duration-100 transition ease-in hover:bg-cyan-100 p-2 flex justify-center">
                  <a href="https://www.instagram.com/msaepul07_/">
                    <Instagram
                      className="pb-1 text-white dark:text-black"
                      size={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
