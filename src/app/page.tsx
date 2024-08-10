"use client";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { NavbarMenu } from "@/components/NavbarMenu";
import { JumbotronComponents } from "@/components/JumbotronComponents";
import { AboutMe } from "@/components/AboutMeComponents";
import { FooterComponents } from "@/components/FooterComponents";
import { MyProjectComponents } from "@/components/MyProjectComponents";

function Home() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [darkMode, setDarkmode] = useState<boolean>(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Pastikan ini hanya berjalan di client side
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") setDarkmode(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      console.log(localStorage.getItem("theme"), darkMode);
    }
  }, [darkMode]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.pageYOffset > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const projectsDetails = [
    {
      heading: "NimeStream",
      subHeading: "Platform nonton via website",
      description:
        "Platform streaming dan download anime sederhana dengan lingkungan runtime bun",
      projectPreview: "/project/ss-nimestream.jpeg",
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

  return (
    <>
      <div className="flex flex-col ">
        <div
          className="bg-cube-strip bg-repeat absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
          style={{ maskImage: "linear-gradient(black, transparent)" }}
        />
        <NavbarMenu isDarkMode={darkMode} setDarkmode={setDarkmode} isScrolled={isScrolled} />
        <div className="lg:py-12 xl: py-1" />
        <main className="flex-1">
          <JumbotronComponents />
          <AboutMe />
          <MyProjectComponents/>
        </main>
      </div>
      <FooterComponents/>
    </>
  );
}
export default Home;
