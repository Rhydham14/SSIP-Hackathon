import React from "react";
import Navbar from "../components/Navbar"
function about() {
  return (
    <div className="flex flex-col w-full justify-start items-center h-screen">
      <Navbar />
      <div className="flex items-center justify-center fixed h-[90vh] bottom-0 w-full bg-transparent">
        <div className="h-[90vh] w-full">
          <div className="absolute left-[15%] top-[20%] text-9xl text-[#30353e] font-semibold blur-[5px]">
            {"{}"}
          </div>
          <div className="absolute left-[30%] top-[75%] text-9xl text-[#30353e] font-semibold blur-[5px]">
            {"</>"}
          </div>
          <div className="absolute left-[80%] top-[32%] text-9xl text-[#30353e] font-semibold blur-[5px]">
            {"</>"}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen w-full bg-[#141c28] text-white mont">
        <div className="text-6xl mb-20 font-semibold">What do we do?</div>
        <div className="text-2xl text-center font-normal w-3/4 px-10">
          A common problem faced by people who are interested in the field of
          competitive programming is that there is a large amount of websites
          that help with it that are available in the field, which creates
          confusion in tracking one’s progress and selecting the best websites
          to proceed with. This project
          <span className="font-bold"> {"Coding Companion"} </span>focuses on
          those individuals who use websites such as{" "}
          <span className="font-bold"> {"LeetCode, CodeChef, CodeForces"}</span>{" "}
          The project essentially is a website which groups the problem
          statement with respect to the topic and shows the result from all of
          these websites. One can also track their progress and get their
          respective statistics. In short, users can use our website as “all in
          one” source.
        </div>
      </div>
    </div>
  );
}

export default about;
