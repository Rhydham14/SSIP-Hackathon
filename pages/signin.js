import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import LL from "../public/CC_V.png";

function Login1({ data, res }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  useEffect(() => {
    // console.log(data[0].email)
    // console.log(data.length)
    console.log(res);
  }, []);
  function handleSubmit() {
    for (var i = 0; i < data.length; i++) {
      if (data[i].email == email) {
        console.log("user found");
        // check for pass
        // if no then break
        // else assign jwt
      }
    }
  }
  return (
    <>
      <div className="flex flex-col w-full justify-start items-center h-screen">
        {/* <Navbar /> */}
        <div className="flex h-screen w-full justify-center items-center">
          <div className="flex justify-center items-center bg-[#141c28] border-2 border-[#43c0f5] shadow-all rounded-2xl w-3/4 h-3/4">
            <div className="flex items-center justify-center ">
              <div className="mr-16">
                <Image src={LL} height={450} width={350} />
              </div>
              <div class="vl">{""}</div>
            </div>
            <div className="flex w-[40%] justify-start flex-col items-start">
              {/* <p className="text-4xl font-medium mb-10">Welcome Coder! 🕊</p> */}
              <div className="flex flex-col w-full items-start ">
                <p className="text-6xl text-white font-semibold mb-2">
                  Sign in
                </p>
                <p className="text-lg text-white font-[450] mb-10">
                  Welcome back!
                </p>
              </div>
              <div className="flex flex-col items-start ">
                <form>
                  <div className="space-y-2">
                    <div className="w-full px-3 relative ">
                      <div class="flex absolute text-white placeholder:text-[#909090] inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                      </div>
                      <input
                        className="appearance-none focus:outline-none w-[175%] bg-transparent text-white border-b border-[#909090] py-3 px-4 ml-3 leading-tight"
                        id="grid-first-name"
                        type="text"
                        placeholder="Your email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex mb-4 ">
                      <div className="w-full px-3 relative">
                        <div class="flex absolute text-white placeholder:text-[#909090] inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          className="appearance-none focus:outline-none w-[175%] bg-transparent text-white border-b border-[#909090] py-3 px-4 ml-3 leading-tight"
                          id="grid-first-name"
                          type="password"
                          placeholder="Password"
                          onChange={(e) => setPass(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[170%] items-center mt-8 justify-center ">
                    <button
                      class="bg-[#43c0f5] text-lg transition-all w-[95%] ml-6 mb-4 text-[#141c28] font-bold py-3 px-6 rounded-xl"
                      onClick={handleSubmit}
                    >
                      Sign in
                    </button>
                    <p className="text-md text-white">
                      New here?{" "}
                      <Link
                        href={"/signup"}
                        className="text-[#43c0f5] underline"
                      >
                        Create an account
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export async function getServerSideProps({ req, res }) {
//   const proto =
//     req.headers["x-forwarded-proto"] || req.connection.encrypted
//       ? "https://"
//       : "http://";
//   return {
//     props: {
//       host: req.headers.host,
//       proto,
//     },
//   };
// }

export default Login1;

// export async function getServerSideProps(req, res) {
//   const result = await fetch(`http://127.0.0.1:8000/userprofile/`, {
//     method: "GET",
//   });
//   const data = await result.json();
//   return {
//     props: {
//       data: data,
//     },
//   };
// }
