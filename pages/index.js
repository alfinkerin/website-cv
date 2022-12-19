/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Layout from "../components/Layout";
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

export default function Home() {
  return (
    <Layout>
      <div className="w-full relative  h-screen block md:flex">
        <div className="w-full h-3/5 md:h-full md:w-1/3 bg-[#e6dace]" />
        <div className="w-full h-3/4 md:h-full md:w-2/3 bg-white" />
        <div className="w-full h-screen absolute top-20 md:top-0  flex-col flex md:flex-row md:justify-center items-center">
          <div className="rounded w-3/5 mx-4 max-w-xs bg-[#f4ece6] shadow-xl">
            <div className=" flex justify-center py-10">
              <Image
                src="/profile.jpeg"
                className="rounded-full object-cover w-40 h-40"
                alt="Alfin Kerin Saputra"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-center font-extrabold text-sm md:text-lg">
              ALFIN KERIN SAPUTRA
            </h1>
            <div className="flex justify-center my-4">
              <div className="w-24 h-1 bg-blue-700 rounded-md" />
            </div>
            <h1 className="text-center mb-10 tracking-widest font-thin">
              WEB DEVELOPER
            </h1>
            <div className="flex bg-white py-4 items-center justify-center">
              <a
                target="_blank"
                href="https://www.facebook.com/alvinkerin/"
                rel="noopener noreferrer"
              >
                <BsFacebook className="cursor-pointer mx-3 w-5 h-5" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/alfin-kerin-saputra-b849b015a/"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="cursor-pointer mx-3 w-5 h-5" />
              </a>
              <a
                target="_blank"
                href="https://github.com/alfinkerin"
                rel="noopener noreferrer"
              >
                <BsGithub className="cursor-pointer mx-3 w-5 h-5" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/alfin_krn/"
                rel="noopener noreferrer"
              >
                <BsInstagram className="cursor-pointer mx-3 w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="px-4 md:mx-4 w-full mt-16 md:mt-0 md:w-2/5">
            <h1 className="font-bold text-6xl text-center md:text-left md:text-8xl">
              Hello!
            </h1>
            <h2 className="text-xl text-center md:text-left md:text-3xl my-4 font-semibold">
              Here's who I am & what I do
            </h2>
            <div className="flex justify-center items-center md:block">
              <button className="w-32 mr-8 h-8 uppercase text-center font-medium text-sm  bg-blue-700 hover:bg-white  ring-offset-2 ring-2 ring-blue-700 hover:text-blue-700 text-white  rounded-full">
                Resume
              </button>
              <button className="w-32 h-8 uppercase text-center font-medium text-sm  bg-white   ring-offset-2 ring-2 ring-black  text-black  rounded-full">
                project
              </button>
            </div>

            <div className="mt-10">
              <p className="font-light tracking-wide">
                Experienced Frontend Developer with a demonstrated history of
                working in the information technology . Have a good analytical
                skills which I apply to solve technical problems, provide
                support for other team members. Work effectively on a team as
                well as independently to accomplish projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
