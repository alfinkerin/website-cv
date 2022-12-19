import React from "react";
import { BsFacebook, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className="w-full h-28 bg-white px-2 md:px-10 block md:flex items-center justify-between">
      <div className="text-center my-2">© by Alfin Kerin Saputra</div>
      <div className="block md:flex">
        <div className="mx-4">
          <h1 className="flex  justify-center">CALL</h1>
          <span className="font-light flex  justify-center">081392442246</span>
        </div>
        <div className="mx-4">
          <h1 className="flex  justify-center">EMAIL</h1>
          <span className="font-light flex  justify-center">
            Kerinalfin70@gmail.com
          </span>
        </div>
        <div className="mx-4">
          <h1 className="flex  justify-center">FOLLOW</h1>
          <div className="flex items-center justify-center">
            <a
              target="_blank"
              href="https://www.facebook.com/alvinkerin/"
              rel="noopener noreferrer"
            >
              <BsFacebook
                className="cursor-pointer my-1 mx-3"
                width={4}
                height={4}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alfin-kerin-saputra-b849b015a/"
              rel="noopener noreferrer"
            >
              <BsLinkedin
                className="cursor-pointer my-1 mx-3"
                width={4}
                height={4}
              />
            </a>
            <a
              target="_blank"
              href="https://github.com/alfinkerin"
              rel="noopener noreferrer"
            >
              <BsGithub
                className="cursor-pointer my-1 mx-3"
                width={4}
                height={4}
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/alfin_krn/"
              rel="noopener noreferrer"
            >
              <BsInstagram
                className="cursor-pointer m-1"
                width={4}
                height={4}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
