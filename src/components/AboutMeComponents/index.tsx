"use client";

import React from "react";

const enjoyCreating = [
  {
    title: "Landing Page",
  },
  {
    title: "POS Website Platform",
  },
  {
    title: "And Other",
  },
];

export const AboutMe = () => {
  function calculateYears(startYear: number) {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }
  return (
    <>
      <section className="w-full min-h-full flex pb-12">
        <div className="container px-12">
          <div id="about" className="text-blue">
            <p className="uppercase font-bold text-gray-400 lg:text-5xl sm: text-3xl">
              ABOUT ME
            </p>
            <p className="pt-6 text-gray-400 dark:text-white lg:text-2xl sm: text-lg">
              Discover who I am, the languages I use, and my experience
            </p>
          </div>
          <div className="lg:flex pt-12 lg:space-x-20 sm:inline-block">
            <div className="lg:border-l lg:h-[195vh] sm:hidden"></div>
            <div className="lg:w-1/2 sm:w-full">
              <div className="text-gray-400 ">
                <div className="">
                  <h2 className="">
                    Hello, My name muhammad saeful rahmat im from Bekasi,
                    Indonesia, I&apos;ve been tried programming{" "}
                    <a className="font-bold">
                      {calculateYears(2022)} Years A Go
                    </a>{" "}
                    and have explored various languages such as JavaScript,
                    TypeScript, Go, and C++. And Other
                  </h2>
                  <h2 className="pt-4">
                    After experimenting with these technologies, I&lsquo;ve decided to
                    become a{" "}
                    <a className="font-bold">
                      career as a Fullstack Web Developer.
                    </a>
                  </h2>
                  <hr className="pt-6 mt-6" />
                  <h2 className="font-bold text-2xl">
                    Fullstack Web Developer
                  </h2>
                  <p className="pt-6">
                    I have a passion for creating a project that is minimalist,
                    simple, and user-friendly with my abilities, so it can be
                    useful to the general public.
                  </p>
                  <p className="pt-6">
                    I really enjoy creating websites like :
                  </p>
                  <div className="block">
                    {enjoyCreating.map((data, keyId) => (
                      <div key={keyId} className="flex text-xl pt-6">
                        <div className="border rounded-full mr-2 bg-white" />
                        <p className="font-bold text-gray-400 dark:text-white">
                          {data.title}
                        </p>
                      </div>
                    ))}

                    <p className="pt-6">
                      Saya tertarik untuk belajar hal baru tentang teknologi,
                      jadi saya memutuskan untuk mencoba apa yang saya tau
                    </p>
                    <hr className="pt-6 mt-6" />
                    <div id="experience" className="">
                      <h2 className="font-bold text-2xl">Pengalaman Kerja</h2>

                      <div className="pt-8">
                        <img
                          className="w-48 py-3"
                          src="https://loginusa.id/assets/logo/logo.png"
                        />
                        <h2 className="font-bold text-xl">
                          Front End Developer - CV Agriva Teknologi Nusantara
                          (Intern)
                        </h2>
                        <div className="pt-3 mx-3">
                          <li>Mempelajari Ekosistem ReactJS Dan REST API</li>
                          <li>Membuat Website Untuk Klien Dengan ReactJS</li>
                          <li>
                            Mempelajari pembuatan REST API Dengan Java
                            Springboot
                          </li>
                        </div>
                      </div>

                      <div className="pt-8">
                        <img
                          className="w-48 py-3"
                          src="https://www.webnesia.co.id/wp-content/uploads/2018/12/logo-webnesia-web-developer.png.webp"
                        />
                        <h2 className="font-bold text-xl">
                          Article Writter & Social media management - PT Ardev
                          digital indonesia (intern)
                        </h2>
                        <div className="pt-3 mx-3">
                          <li>Mempelajari seo dan copywriting</li>
                          <li>
                            Mempelajari pembuatan website dengan wordpress
                            elementor
                          </li>
                          <li>
                            Mempelajari cara mempromosikan produk dengan sosial
                            media
                          </li>
                          <li>Membuat artikel</li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-full pt-6" id="#skills">
              <p className="font-bold text-2xl text-gray-400">
                Beberapa Stack Yang Saya pakai dan yang saya pelajari
              </p>
              <div className="pt-6">
                <h2 className="font-bold text-2xl">Javascript</h2>{" "}
                <p className="text-gray-400 pt-4">
                  Saya Suka menggunakan Javascript karena bahasa nya mudah
                  dipelajari dan sederhana
                </p>
              </div>
              <div className="pt-8">
                <h2 className="font-bold text-2xl">ReactJS</h2>{" "}
                <p className="text-gray-400 pt-4">
                  Saya Memulai React JS Sebagai library Javascript yang pertama
                  kali saya coba, dan saya menyukainya :D
                </p>
              </div>
              <div className="pt-8">
                <h2 className="font-bold text-2xl">NextJS</h2>{" "}
                <p className="text-gray-400 pt-4">
                  Framework yang memudahkan saya membuat website fullstack dalam
                  satu waktu sehingga menghemat waktu development
                </p>
              </div>
              <div className="pt-8">
                <h2 className="font-bold text-2xl">TailwindCSS</h2>{" "}
                <p className="text-gray-400 pt-4">
                  Berkat TailwindCSS Membuat syntax css lebih sederhana dan
                  mudah digunakan.
                </p>
              </div>
              <div className="pt-8">
                <h2 className="font-bold text-2xl">Typescript</h2>{" "}
                <p className="text-gray-400 pt-4">
                  Typescript memudahkan pengembangan website saya karena dengan
                  typescript saya menjadi lebih mudah untuk mengidentifikasi bug
                  ketimbang dengan javascript.
                </p>
              </div>
              <div className="pt-8">
                <h2 className="font-bold text-2xl">Golang - GIN</h2>{" "}
                <p className="text-gray-400 pt-4">
                  Bahasa dan library yang biasa saya gunakan untuk mengembangkan
                  bagian backend :D
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
