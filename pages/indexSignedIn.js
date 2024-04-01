import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import lc from "../public/LC_white.png";
import cf from "../public/CF_white.png";
import cc from "../public/CC_white.png";
import lcc from "../public/LC_color.png";
import cfc from "../public/CF_color.png";
import ccc from "../public/CC_color.png";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  function handleOverCC() {
    const ccc = document.querySelector("#ccc_id");
    ccc.style.transition = "all 0.25s ease-in-out";
    ccc.style.opacity = 1;
  }
  function handleLeaveCC() {
    const ccc = document.querySelector("#ccc_id");
    ccc.style.opacity = 0;
  }
  function handleOverLC() {
    const lcc = document.querySelector("#lcc_id");
    lcc.style.transition = "all 0.25s ease-in-out";
    lcc.style.opacity = 1;
  }
  function handleLeaveLC() {
    const lcc = document.querySelector("#lcc_id");
    lcc.style.opacity = 0;
  }
  function handleOverCF() {
    const cfc = document.querySelector("#cfc_id");
    cfc.style.transition = "all 0.25s ease-in-out";
    cfc.style.opacity = 1;
  }
  function handleLeaveCF() {
    const cfc = document.querySelector("#cfc_id");
    cfc.style.opacity = 0;
  }
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full justify-start items-center h-screen">
        <div className="flex items-center justify-center absolute h-screen bottom-0 w-full bg-transparent">
          <div className="h-[90vh] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1.1 }}
              className="absolute left-[15%] top-[20%] text-9xl text-[#30353e] font-semibold blur-[5px]"
            >
              {"{}"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1.1 }}
              className="absolute left-[30%] top-[75%] text-9xl text-[#30353e] font-semibold blur-[5px]"
            >
              {"</>"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1.1 }}
              className="absolute left-[80%] top-[32%] text-9xl text-[#30353e] font-semibold blur-[5px]"
            >
              {"</>"}
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-screen w-full bg-[#141c28] text-white">
          <div className="text-6xl font-black mb-6">
            Powerful For{" "}
            <span className="text-[#43c0f5]">{"{Developers}"}</span>
          </div>
          <div className="text-6xl font-black mb-10">Fast For Everyone</div>
          <button
            className="bg-[#43c0f5] z-10 text-lg transition-all w-[20%] text-[#141c28] font-semibold py-3 px-6 rounded-xl"
            onClick={() => {
              ref.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore More
          </button>
        </div>
      </div>
      <div
        className="flex flex-col w-full justify-start items-center h-fit bg-[#0e1524] pb-32"
        ref={ref}
      >
        <p className="text-6xl text-white text-center font-semibold mt-20 mb-8">
          Keep an eye on <br /> All of your progress
        </p>
        <p className="tracking-[1.75rem] uppercase text-2xl text-white text-ceter font-thin mb-28">
          At one place
        </p>
        <div className="grid grid-cols-2 gap-y-10 gap-x-96">
          <div
            className="bg-[#141c28] flex justify-center items-center rounded-2xl shadow-card hover:shadow-brightcard w-[27rem] text-white text-xl h-72 cursor-pointer mb-32"
            onMouseOver={handleOverLC}
            onMouseLeave={handleLeaveLC}
          >
            <Image
              src={lc}
              height={150}
              width={150}
              className="transition-all"
              id="lc_id"
            />
            <Image
              src={lcc}
              height={150}
              width={150}
              className="absolute transition-all opacity-0"
              id="lcc_id"
            />
          </div>
          <div
            className="flex flex-col justify-center w-[27rem] text-white font-normal text-xl h-72 cursor-pointer"
            style={{ transition: "all 0.5s ease-in-out" }}
            onMouseOver={handleOverLC}
            onMouseLeave={handleLeaveLC}
          >
            <div className="text-4xl font-black mb-8">LeetCode</div>
            Leetcode is worth not just for their problems or OJ, but for
            community and the button "Discuss". For some problems you might read
            up to 5 different approaches realized on a variety of languages with
            human explanation. Leetcode is a great platform to polish your
            programming skills.
          </div>
          <div
            className="flex flex-col justify-center w-[27rem] text-white font-normal text-xl h-72 cursor-pointer"
            onMouseOver={handleOverCC}
            onMouseLeave={handleLeaveCC}
          >
            <div className="text-4xl font-black mb-8">CodeChef</div>
            CodeChef is based on time and space optimizations when your real
            implementation. It is a useful tool for advanced software engineers
            looking to prepare for their technical interviews. Though they
            provide access to user solutions and other resources.
          </div>
          <div
            className="bg-[#141c28] flex justify-center items-center rounded-2xl shadow-card hover:shadow-brightcard w-[27rem] text-white text-xl h-72 cursor-pointer mb-32"
            onMouseOver={handleOverCC}
            onMouseLeave={handleLeaveCC}
          >
            <Image
              src={cc}
              height={150}
              width={150}
              className="transition-all"
            />
            <Image
              src={ccc}
              height={150}
              width={150}
              className="absolute transition-all opacity-0"
              id="ccc_id"
            />
          </div>
          <div
            className="bg-[#141c28] flex justify-center items-center rounded-2xl shadow-card hover:shadow-brightcard w-[27rem] text-white text-xl h-72 cursor-pointer"
            onMouseOver={handleOverCF}
            onMouseLeave={handleLeaveCF}
          >
            <Image
              src={cf}
              height={150}
              width={150}
              className="transition-all"
            />
            <Image
              src={cfc}
              height={150}
              width={150}
              className="absolute transition-all opacity-0"
              id="cfc_id"
            />
          </div>
          <div
            className="flex flex-col justify-center w-[27rem] text-white font-normal text-xl h-72 cursor-pointer"
            onMouseOver={handleOverCF}
            onMouseLeave={handleLeaveCF}
          >
            <div className="text-4xl font-black mb-8">CodeForces</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            nulla expedita fugit temporibus veniam? Nam omnis quaerat corporis
            culpa reiciendis quae facilis pariatur odio eaque.
          </div>
        </div>
      </div>
    </>
  );
}
