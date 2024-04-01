import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LL from "../public/CC_V.png";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup2() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [leetcode, setLeetcode] = useState("");
  const [codechef, setCodechef] = useState("");
  const [codeforces, setCodeforces] = useState("");
  const router = useRouter();
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !pass1 || !pass2 || !leetcode || !codechef || !codeforces) {
      toast.error("Plase enter all the details.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (!email.match(mailformat)) {
      toast.error("Invalid email address.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (pass1 != pass2) {
      toast.error("Passwords does not match!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      const userinfo = {
        username: name,
        email: email,
        password: pass1,
        profile: {
          leetcode_id: leetcode,
          hackerrank_id: codeforces,
          codechef_id: codechef,
        },
      };
      // const result = await fetch(`http://127.0.0.1:8000/userprofile/`, {
      //   method: "POST",
      //   mode: "cors",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userinfo),
      // });
      // const data = await result.json();
      // console.log(data);

      setTimeout(() => {
        router.push("/signin");
      }, 1500);
      toast.success("User created successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  return (
    <>
      <div className="flex flex-col w-full justify-start items-center h-screen">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="flex h-screen w-full justify-center items-center">
          <div className="flex justify-center items-center bg-[#141c28] shadow-all border-2 border-[#43c0f5] rounded-2xl w-3/4 h-3/4">
            <div className="flex items-center justify-center ">
              <div className="mr-16">
                <Image src={LL} height={450} width={350} />
              </div>
              <div class="vl">{""}</div>
              <div className="flex justify-center flex-col items-center">
                <p className="text-4xl font-medium mb-10 text-white">
                  Create an Account!
                </p>
                <div className="w-full max-w-lg">
                  <div className="flex mb-4">
                    <div className="w-full px-3 relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                        </svg>
                      </div>
                      <input
                        className="appearance-none focus:outline-none w-full bg-transparent text-white placeholder:text-[#909090] border-b border-white py-3 px-4 ml-3 leading-tight"
                        id="grid-first-name"
                        type="text"
                        placeholder="Your name"
                        defaultValue={""}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="w-full px-3 relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                      </div>
                      <input
                        className="appearance-none focus:outline-none w-full bg-transparent text-white placeholder:text-[#909090] border-b border-white py-3 px-4 ml-3 leading-tight"
                        id="grid-first-name"
                        type="email"
                        placeholder="Your email"
                        defaultValue={""}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex w-full justify-between">
                    {" "}
                    {/*Side by side input fields*/}
                    <div className="flex mb-4">
                      <div className="w-full px-3 relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-white"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          className="appearance-none focus:outline-none w-full bg-transparent text-white placeholder:text-[#909090] border-b border-white py-3 px-4 ml-3 leading-tight"
                          id="grid-first-name"
                          type="password"
                          defaultValue={""}
                          placeholder="Create password"
                          onChange={(e) => setPass1(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-full px-3 relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-white"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          className="appearance-none focus:outline-none w-full bg-transparent text-white placeholder:text-[#909090] border-b border-white py-3 px-4 ml-3 leading-tight"
                          id="grid-first-name"
                          type="password"
                          placeholder="Confirm password"
                          defaultValue={""}
                          onChange={(e) => setPass2(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="w-full px-3 relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        className="appearance-none focus:outline-none w-full bg-transparent text-white placeholder:text-[#909090] border-b border-white py-3 px-4 ml-3 leading-tight"
                        id="grid-first-name"
                        type="text"
                        placeholder="Leetcode ID"
                        defaultValue={""}
                        onChange={(e) => setLeetcode(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="w-full px-3 relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        className="appearance-none focus:outline-none w-full bg-transparent text-white placeholder:text-[#909090] border-b border-white py-3 px-4 ml-3 leading-tight"
                        id="grid-first-name"
                        type="text"
                        placeholder="Codechef ID"
                        defaultValue={""}
                        onChange={(e) => setCodechef(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="w-full px-3 relative">
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            fillRule="evenodd"
                            d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <input
                        className="appearance-none focus:outline-none w-full bg-transparent text-white placeholder:text-[#909090] border-b border-white py-3 px-4 ml-3 leading-tight"
                        id="grid-first-name"
                        type="text"
                        placeholder="Codeforces ID"
                        defaultValue={""}
                        onChange={(e) => setCodeforces(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full items-center mt-8 justify-center">
                    <button
                      class="bg-[#43c0f5] text-lg transition-all w-[95%] ml-6 mb-4 text-[#141c28] font-bold py-4 px-6 rounded-xl"
                      onClick={handleSubmit}
                    >
                      Sign up
                    </button>
                    <p className="text-md text-white">
                      Already have an account?{" "}
                      <Link
                        href={"/signin"}
                        className="text-[#43c0f5] underline"
                      >
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup2;

export async function getServerSideProps({ req, res }) {
  const proto =
    req.headers["x-forwarded-proto"] || req.connection.encrypted
      ? "https://"
      : "http://";
  return {
    props: {
      host: req.headers.host,
      proto,
    },
  };
}
