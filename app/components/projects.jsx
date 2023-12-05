'use client';

import React, { useRef } from 'react';
import ProjectsData from '../assets/project/projectsData.json';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import GitHubWHT from '../assets/github-white.svg';
import ExpandWHT from '../assets/expand-solid.svg';
import Link from 'next/link';

export default function Projects() {
  const buttonHover = {
    buttonHover: {
      scale: 1.1,
      transition: { duration: 1 },
    },
  };

  const buttonAnimation = {
    hoverText: {
      scale: [1, 1.1, 1, 1.1, 1],
      transition: { duration: 1 },
    },
  };

  return (
    <section className="w-full px-5 py-10 md:py-20 md:px-20" id="projects">
      <h1 className="text-center mb-10 text-6xl text-clrTitle">PROJECTS</h1>

      <div>
        <section>
          {ProjectsData.map((project) => (
            <div className="w-full mb-10" key={project.id}>
              <div className="w-full h-full overflow-hidden rounded-lg">
                <motion.div
                  variants={buttonHover}
                  whileHover="buttonHover"
                  className="w-full h-full"
                >
                  <Image
                    src={project.pic}
                    alt={project.id}
                    width={1200}
                    height={500}
                  />
                </motion.div>
              </div>

              <div className="w-full my-6">
                <div className="w-full flex mb-5">
                  <span className="text-base md:text-lg font-normal border-2 py-2 px-4 text-clrTitle border-clrTitle rounded-full mr-5">
                    {project.year}
                  </span>
                  <span className="text-[0.8rem] md:text-lg font-normal border-2 py-2 px-4 text-clrTitle border-clrTitle rounded-full">
                    {project.tech}
                  </span>
                </div>
                <div>
                  <div className="w-full flex md:justify-between">
                    <div>
                      <h2 className="text-[24px] font-medium ">
                        {project.name}
                      </h2>
                      <h3 className="text-lg font-medium mb-2">
                        {project.type}
                      </h3>
                    </div>
                    <div className="hidden md:flex justify-end gap-5">
                      <motion.div
                        variants={buttonAnimation}
                        whileHover="hoverText"
                        className="w-[120px] h-[50px] bg-clrTitle text-[#fff] rounded-full"
                      >
                        <Link
                          href={project.live}
                          target="_blank"
                          className="w-full h-full gap-3 flex items-center justify-center"
                        >
                          Preview
                          <Image src={ExpandWHT} alt="#" />
                        </Link>
                      </motion.div>
                      <motion.div
                        variants={buttonAnimation}
                        whileHover="hoverText"
                        className="w-[120px] h-[50px] bg-clrTitle text-[#fff] rounded-full"
                      >
                        <Link
                          href={project.link}
                          target="_blank"
                          className="w-full h-full gap-3 flex items-center justify-center"
                        >
                          Get Code
                          <Image src={GitHubWHT} alt="#" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                  <p className="text-md text-clrParagraph leading-6 -tracking-wide">
                    {project.description}
                  </p>
                  <div className="flex md:hidden justify-start gap-5 mt-5">
                    <div className="w-[150px] h-[50px] bg-clrTitle text-[#fff] rounded-full">
                      <Link
                        href={project.live}
                        target="_blank"
                        className="w-full h-full gap-3 flex items-center justify-center"
                      >
                        Preview
                        <Image src={ExpandWHT} alt="#" />
                      </Link>
                    </div>
                    <div className="w-[150px] h-[50px] bg-clrTitle text-[#fff] rounded-full">
                      <Link
                        href={project.link}
                        target="_blank"
                        className="w-full h-full gap-3 flex items-center justify-center"
                      >
                        Get Code
                        <Image src={GitHubWHT} alt="#" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}
