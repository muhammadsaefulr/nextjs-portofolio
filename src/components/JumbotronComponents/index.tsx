"use client";
import React from "react";

import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { ArrowDown } from "lucide-react";

export const JumbotronComponents = () => {
  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center">
        {" "}
        <div className="relative container flex justify-around lg:mx-8 xl:mx-2">
          <div className="container px-4 md:px-6">
            <div className="space-y-3">
              <div
                data-aos="fade-right"
                className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
              >
                Hi Everyone, My Name
              </div>
              <h1
                data-aos="fade-right"
                className="text-4xl font-bold tracking-tighter sm:text-3xl text-gray-600 dark:text-white md:text-6xl/none"
              >
                Muhammad Saeful Rahmat
              </h1>
              <div data-aos="fade-right" className="lg:w-1/2 sm: w-full">
                <p className="text-gray-500 md:text-xl dark:text-gray-400 w-15">
                  Im want to be come{" "}
                  <a className="font-bold text-maincolor">
                    Fullstack Web Developer
                  </a>{" "} <br/>
                  I love creating simple and easy-to-use interfaces and I never
                  give up on learning.{" "}
                </p>
              </div>
              <div data-aos="fade-up" className="flex gap-x-2">
                <a href="#contact">
                  <button className="flex p-2 px-3 rounded-md bg-blue-500 transition duration-100 ease-in  hover:bg-gray-300">
                    Contact Me <ArrowDown className="mx-3 font-bold" size={24} />
                  </button>
                </a>
              </div>
              <div className="py-12">
                <p className="text-stone-500 pb-2 font-medium">
                  Currently using:{" "}
                </p>
                <div className="flex gap-x-4">
                  <SiTailwindcss
                    className="text-gray transition duration-100 ease hover:text-blue-400"
                    style={{ fontSize: "24px" }}
                  />
                  <FaReact
                    className="text-gray transition duration-100 ease hover:text-blue-600"
                    style={{ fontSize: "24px" }}
                  />
                  <TbBrandNextjs
                    className="text-gray-200 transition duration-100 ease hover:bg-white hover:text-gray-800 rounded-full"
                    style={{ fontSize: "24px" }}
                  />
                  <SiTypescript
                    className="text-gray transition duration-100 ease hover:text-blue-600"
                    style={{ fontSize: "24px" }}
                  />
                  <FaGolang
                    className="text-gray transition duration-100 ease hover:text-blue-400"
                    style={{ fontSize: "26px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 h-96 mr-4 lg:block sm: hidden">
            <img
              className="p-2 animate-wave-image mx-auto rounded-full border aspect-square object-cover object-center sm:w-full"
              src="/epul.jpeg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};
