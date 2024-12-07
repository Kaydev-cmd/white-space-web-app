import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#043873]">
        <div className="container">
          <div className="flex items-center justify-around py-12">
            <div className="flex flex-col items-center gap-12 text-white lg:gap-8">
              <h2 className="text-[68px] normal-case leading-tight lg:text-[48px] md:text-[38px] sm:text-center">
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

      {/* Project Management */}
      <section className="mt-16">
        <div className="flex items-center justify-around p-8 sm:flex-col">
          <div className="flex flex-col gap-8 sm:items-center sm:text-center">
            <h3 className="text-[68px] leading-tight md:text-[48px]">
              Project <br />
              <span className="text-[#043873]">Management</span>
            </h3>
            <p>
              Images, videos, PDFs and audio files are supported. Create math
              expressions and <br />
              diagrams directly from the app. Take photos with mobile app and
              save them <br />
              to a note.
            </p>
            <div>
              <button className="flex items-center gap-1 bg-[#4F9CF9] py-4 px-8 text-white rounded-md hover:opacity-[.9] sm:mb-24">
                Get Started
                <IoIosArrowRoundForward />
              </button>
            </div>
          </div>
          <img
            src="/images/home/Illustration2.png"
            alt="A picture of people at a construction site"
            className="sm:w-[50%]"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
