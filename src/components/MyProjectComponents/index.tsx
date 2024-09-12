"use client";

import React from "react";

import { FaGithub } from "react-icons/fa";

const projectsDetails = [
  {
    heading: "NimeStream",
    subHeading: "Platform nonton via website",
    description:
      "Platform streaming dan download anime sederhana dengan lingkungan runtime bun",
    projectPreview: "/project/ss-nimestreams.png",
    isAvailableOnGithub: true,
    githubLink: "https://github.com/muhammadsaefulr/NimeStream",
  },
  {
    heading: "Gopotek",
    subHeading: "Platform website manajemen apotek",
    description:
      "Platform website manajemen apotek sederhana yang dibuat untuk memdahkan pengguna memantau stok dan penjualan produk",
    projectPreview: "/project/ss-gopotek.png",
    isAvailableOnGithub: true,
    githubLink: "https://github.com/muhammadsaefulr/ApotekNextJS",
  },
  {
    heading: "Saksiummat",
    subHeading: "Platform Website Manajemen Data",
    description:
      "Platform Website yang digunakan untuk melihat data saksi partai ummat",
    projectPreview: "/project/ss-saksiummat.png",
    isAvailableOnGithub: false,
    githubLink: "",
  },
];

export const MyProjectComponents = () => {
  return (
    <>
      <section id="project" className="pb-5 pt-12 dark:text-white">
        <div className="container px-12">
          <div id="about" className="text-blue">
            <p className="uppercase font-bold lg:text-5xl sm: text-3xl">
              My Projects
            </p>
            <p className="pt-6 lg:text-2xl sm: text-lg">
              Explore my latest projects and see what I&lsquo;ve been working on{" "}
            </p>
          </div>
          {projectsDetails.map((data, keyId) => (
            <div key={keyId} className="py-12">
              <a
                className={
                  data.isAvailableOnGithub === true ? "" : "pointer-events-none"
                }
                href={data.githubLink}
              >
                <div className="lg:flex sm:block justify-between py-6">
                  <div className="lg:w-2/3 sm: w-full">
                    <div className="mb-12">
                      <p className="font-bold text-2xl text-maincolor">
                        {data.heading}
                      </p>
                      <div className="">
                        <h1 className="font-bold text-3xl w-25 py-3">
                          {data.subHeading}
                        </h1>
                        <p className="text-md lg:w-3/4 sm: w-full">
                          {data.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className="lg:flex w-[80%] transition duration-200 ease-in border-4 hover:border-2 rounded-lg p-2 py-3 gap-x-3 sm: hidden"
                      style={
                        data.isAvailableOnGithub === true
                          ? { borderColor: "#0079f2" }
                          : { borderColor: "gray" }
                      }
                    >
                      <FaGithub className="px-3" size={100} />
                      <div className="block p-2 pt-5">
                        <p
                          className="font-bold text-md"
                          style={
                            data.isAvailableOnGithub === true
                              ? { color: "#00FCCE" }
                              : {}
                          }
                        >
                          {data.isAvailableOnGithub === true
                            ? "Available On Github !"
                            : "Not Available On Github"}
                        </p>
                        <p className="text-lg">
                          {data.isAvailableOnGithub === true
                            ? "This Project Is Available On Github"
                            : "This Project Is Not Available On Github"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-2/3 block rounded-lg dark:bg-slate-800 light: bg-gray-400 sm: w-full">
                    <div className="flex justify-start gap-x-3 p-2 py-3">
                      <div className="rounded-full p-2 hover:bg-red-300 dark:hover:bg-red-600 light:hover:bg-red-300 dark:bg-gray-400 light:bg-red-300 lg: bg-red-400 sm:bg-red-300" />
                      <div className="rounded-full p-2 hover:bg-yellow-300 dark:hover:bg-yellow-600 light:hover:bg-yellow-300 dark:bg-gray-400 light:bg-yellow-300 lg: bg-yellow-400 sm:bg-yellow-300" />
                      <div className="rounded-full p-2 hover:bg-green-300 dark:hover:bg-green-600 light:hover:bg-green-300 dark:bg-gray-400 light:bg-green-300 lg: bg-green-400 sm:bg-green-300" />
                    </div>
                    <div className="bg-white flex justify-center items-center w-full">
                      <img
                        className="w-full h-full object-cover object-top max-h-96"
                        src={data.projectPreview}
                        alt="Project Preview"
                      />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
