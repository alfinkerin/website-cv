import Image from "next/image";
import React from "react";

function NotFound() {
  return (
    <div className="w-full flex justify-center items-center">
      <Image src="/404.jpg" width="550" height="100" alt="notfound" />
    </div>
  );
}

export default NotFound;
