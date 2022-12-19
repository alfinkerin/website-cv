import Card from "../../components/Card";
import Layout from "../../components/Layout";
import pengalaman from "../../helper/experience.json";

function Resume() {
  return (
    <Layout>
      <div className="bg-[#e6dace] px-2 md:px-64 ">
        <div className="flex justify-center items-center py-20">
          <div className="w-5 h-5 rounded-sm mr-3 bg-blue-700" />
          <h1 className="text-sm md:text-4xl font-bold">RESUME</h1>
        </div>
        <div className="flex  py-10 justify-center items-center md:justify-between">
          <h1 className="my-2 md:my-0 text-xl md:text-3xl mr-4 font-bold">
            Experience
          </h1>
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1ofyj5um_9_XsMFazW4cvCnY0nVerkygb/edit?usp=share_link&ouid=111602137618701059908&rtpof=true&sd=true"
            rel="noopener noreferrer"
          >
            <button className="my-2 md:my-0 w-32  h-8 uppercase text-center font-medium text-sm  bg-blue-700 hover:bg-white  ring-offset-2 ring-2 ring-blue-700 hover:text-blue-700 text-white  rounded-full">
              Download CV
            </button>
          </a>
        </div>
        <div className="py-10">
          {pengalaman.map((x, i) => (
            <Card key={i}>
              <div className="block md:flex">
                <div className="w-full md:w-1/2">
                  <p className="text-blue-700 text-md font-bold">
                    {" "}
                    {x.tanggal}
                  </p>
                  <p className="font-semibold text-lg ">{x.posisi}</p>
                  <p className="uppercase">{x.perusahaan}</p>
                </div>
                <div className="w-full md:w-1/2">{x.deskripsi}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Resume;
