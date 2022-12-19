import React from "react";
import Card from "../../components/Card";
import project from "../../helper/project.json";
import Image from "next/image";
import Layout from "../../components/Layout";

function Project() {
  return (
    <Layout>
      {" "}
      <div className="bg-[#e6dace] px-2 md:px-64 ">
        <div className="flex justify-center items-center py-20">
          <div className="w-5 h-5 rounded-sm mr-3 bg-blue-700" />
          <h1 className="text-sm md:text-4xl font-bold">PROJECT</h1>
        </div>
        <p className="text-center text-xl uppercase font-semibold">
          contoh Project yang sudah di kerjakan
        </p>
        <div className="py-10">
          {project.map((x, i) => (
            <Card key={i}>
              <div className="block md:flex">
                <div className="w-full md:w-3/5">
                  <p className="text-blue-700 text-xl font-bold uppercase">
                    {" "}
                    {x.title}
                  </p>
                  <p className="font-semibold text-lg ">{x.role}</p>
                  <p className="text-base text-gray-500">{x.deskripsi}</p>
                </div>
                <div className="w-full ml-2 md:w-2/5">
                  <Image
                    src={x.gambar}
                    className=" object-cover w-full"
                    alt="Alfin Kerin Saputra"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Project;
