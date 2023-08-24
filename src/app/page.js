"use client";

import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import { useState } from "react";

import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import code from "../../public/code.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="px-10 bg-white md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="font-burtons text-xl">subfrosty.dev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-cyan-600 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-gray-800 font-medium md:text-6xl">
              I am <span className="font-extrabold text-cyan-500">Frosty</span>
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              Freelancer providing services for programming and design content
              needs.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:w-96 md:h-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="deved" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 text-gray-800">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer, I&rsquo;ve done remote work for
              <span className="text-cyan-500"> agencies </span>
              consulted for <span className="text-cyan-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex lg:gap-10">
            <div className="text-center shadow-lg p-10 items-center rounded-xl my-10">
              <Image
                src={design}
                width={100}
                height={100}
                className="mx-auto"
                alt="design"
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-cyan-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 items-center rounded-xl my-10">
              <Image
                src={code}
                width={100}
                height={100}
                className="mx-auto"
                alt="code"
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let&rsquo;s
                make it a reality.
              </p>
              <h4 className="py-4 text-cyan-600">Frameworks I work with</h4>
              <p className="text-gray-800 py-1">NextJS</p>
              <p className="text-gray-800 py-1">Three.js</p>
              <p className="text-gray-800 py-1">Vue</p>
            </div>
            <div className="text-center shadow-lg p-10 items-center rounded-xl my-10">
              <Image
                src={consulting}
                width={100}
                height={100}
                className="mx-auto"
                alt="consulting"
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
