import { useRouter } from "next/router";
import Link from "next/link";
import { elastic as Menu } from "react-burger-menu";

function Navbar() {
  const router = useRouter();

  return (
    <div className="w-full  h-24 md:h-28 bg-white px-10 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-4 h-4 rounded-sm mr-3 bg-blue-700" />
        <h1 className="text-sm md:text-2xl font-bold">ALFIN KERIN SAPUTRA</h1>
      </div>
      {/* mobile */}
      <div className="block md:hidden">
        <Menu right>
          <ul>
            <li
              key={1}
              className={router.pathname == "/" ? "text-blue-700" : ""}
            >
              <Link className="mx-2" href="/">
                ABOUT ME
              </Link>
            </li>
            <li
              key={2}
              className={router.pathname == "/resume" ? "text-blue-700" : ""}
            >
              <Link className="mx-2" href="/resume">
                RESUME
              </Link>
            </li>
            <li
              key={3}
              className={router.pathname == "/project" ? "text-blue-700" : ""}
            >
              {" "}
              <Link className="mx-2" href="/project">
                PROJECT
              </Link>
            </li>
          </ul>
        </Menu>
      </div>

      {/* dekstop */}
      <div className="hidden md:flex items-center">
        <ul className="flex">
          <li key={1} className={router.pathname == "/" ? "text-blue-700" : ""}>
            <Link className="mx-2" href="/">
              ABOUT ME
            </Link>
          </li>
          <li
            key={2}
            className={router.pathname == "/resume" ? "text-blue-700" : ""}
          >
            <Link className="mx-2" href="/resume">
              RESUME
            </Link>
          </li>
          <li
            key={3}
            className={router.pathname == "/project" ? "text-blue-700" : ""}
          >
            {" "}
            <Link className="mx-2" href="/project">
              PROJECT
            </Link>
          </li>
        </ul>
        <span className="mx-2 font-thin cursor-pointer hover:text-blue-700"></span>
      </div>
    </div>
  );
}

export default Navbar;
