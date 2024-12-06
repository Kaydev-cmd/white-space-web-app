import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <>
      <section className="bg-[#043873]">
        <div className="container">
          <div className="flex py-12 justify-around items-center">
            <div className="flex flex-col gap-12 text-white items-center lg:gap-8">
              <h2 className="text-[68px] normal-case lg:text-[48px] md:text-[38px] sm:text-center">
                Get More Done with <br />
                Whitespace
              </h2>
              <p className="sm:text-center">
                Project management software that enables your team to
                collaborate, plan, <br />
                analyze and manage everyday tasks.
              </p>
              <div className="flex justify-start w-[100%] sm:justify-center">
                <button className="try-white-space-btn flex items-center gap-1 bg-[#4F9CF9] p-4 text-white rounded-md hover:opacity-[.9]">
                  Try Whitespace free
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
            <img
              src="/images/home/Illustration1.png"
              alt="man and woman working at the table"
              className="xl:w-[780px] lg:w-[500px] md:w-[420px] sm:hidden"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
