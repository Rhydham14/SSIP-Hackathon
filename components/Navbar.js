import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navitems from "./Navitems";
import logo from "../public/CC_H.png";
import { useRouter } from "next/router";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

function daisyNav() {
  const [tokeN, setToken] = useState({ value: null });
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken({ value: token });
    }
  }, [router.query]);
  function logout() {
    localStorage.removeItem("token");
    setToken({ value: null });
    router.push("/");
  }
  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="navbar fixed z-[100] top-0 bg-[#0e1524] backdrop-filter backdrop-blur-xl bg-opacity-60"
      >
        {/* <div className="fixed top-0 w-full h-[5rem] blur-lg border z-[50]"></div> */}
        <div className="navbar-start ml-10">
          <Link href="/">
            <Image height={0} width={125} src={logo} alt="LOGO" />
          </Link>
        </div>
        {/* 43c0f5 */}
        <div className="navbar-center flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link
                href={"/"}
                className="text-white hover:text-[#43c0f5] hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/explore"}
                className="text-white hover:text-[#43c0f5] hover:bg-transparent"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href={"/problems"}
                className="text-white hover:text-[#43c0f5] hover:bg-transparent"
              >
                All Problems
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="text-white hover:text-[#43c0f5] hover:bg-transparent"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-10">
          {/* bg-[#3b98c0] */}
          {/* {localStorage.getItem("token") ? (
            <Link
              href={"/signin"}
              className="transition-all duration-300 rounded-lg bg-[#43c0f5] py-2 px-4 text-[#141c28] hover:bg-[#378db1]"
            >
              Hey!
            </Link>
          ) : (
            <Link
              href={"/signin"}
              className="transition-all duration-300 rounded-lg bg-[#43c0f5] py-2 px-4 text-[#141c28] hover:bg-[#378db1]"
            >
              Sign in
            </Link>
          )} */}
          {tokeN.value && (
            <div className="" onClick={logout}>
              <Link
                href={"/signin"}
                className="transition-all duration-300 rounded-lg bg-[#43c0f5] py-2 px-4 text-[#141c28] hover:bg-[#378db1]"
              >
                Logout
              </Link>
            </div>
          )}
          {!tokeN.value && (
            <Link
              href={"/signin"}
              className="transition-all duration-300 rounded-lg bg-[#43c0f5] py-2 px-4 text-[#141c28] hover:bg-[#378db1]"
            >
              Sign in
            </Link>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default daisyNav;
// export default Navbar;
