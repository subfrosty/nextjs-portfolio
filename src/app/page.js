import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import deved from "../../public/dev-ed-wave.png";

export default function Home() {
  return (
    <main className="px-10 bg-white">
      <section className="min-h-screen">
        <nav className="py-10 flex justify-between">
          <h1 className=" text-xl">subfrosty.dev</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="text-2xl cursor-pointer" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md ml-8"
                href=""
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 font-medium">
            I am{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600">
              Frosty
            </span>
          </h2>
          <h3 className="text-2xl py-2">Developer & Designer.</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            Freelancer providing services for programming and design content
            needs.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 mx-auto overflow-hidden">
          <Image src={deved} alt="dev ed" layout="fill" objectFit="cover" />
        </div>
      </section>
    </main>
  );
}
