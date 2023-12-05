'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Header from './header';
import Projects from './projects';
import Resume from './resume';

import HeroVector from '../assets/heroVector.svg';
import Profile from '../assets/profile.svg';
import Email from '../assets/envelope-open-regular.svg';
import GitHub from '../assets/github.svg';
import Phone from '../assets/phone-solid.svg';
import Linkedin from '../assets/linkedin-in.svg';
import UpRightArrow from '../assets/uprightarrow.svg';
import Code from '../assets/code.svg';

export default function Area() {
  const buttonHover = {
    initial: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: 'tween' },
    },
    buttonHover: {
      scale: [1, 1.1, 1, 1.1, 1],
      transition: { duration: 1 },
    },
  };

  const titleAnimate = {
    initial: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const lgTextVarient = {
    initial: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: 'tween' },
    },
    lgTextHover: {
      x: 20,
      transition: { duration: 1 },
    },
  };

  return (
    <section className={`w-full`}>
      {/* header */}
      <Header />

      {/* Hero */}
      <section className="w-full flex flex-col md:flex-row justify-between md:items-center px-5 md:px-10 mb-10">
        <div className="w-full md:w-[50%] h-[50%] md:h-full flex flex-col justify-center order-2 md:order-1">
          <motion.h1
            variants={titleAnimate}
            initial="initial"
            animate="visible"
            transition={{ type: 'tween', duration: 0.2 }}
            className="text-6xl text-clrTitle font-light"
          >{`HEY I'M`}</motion.h1>
          <motion.h1
            variants={titleAnimate}
            initial="initial"
            animate="visible"
            transition={{ type: 'tween', delay: 0.3 }}
            className="text-3xl md:text-6xl text-clrTitle font-bold"
          >
            DUMINDU BANDARA
          </motion.h1>
          <motion.h4
            variants={titleAnimate}
            initial="initial"
            animate="visible"
            transition={{ type: 'tween', duration: 0.6 }}
            className="text-clrNormalTitle font-medium text-xl"
          >
            Frontend Developer | UI/UX Designer | Undergraduate
          </motion.h4>
          <motion.button
            variants={buttonHover}
            initial="initial"
            animate="visible"
            whileHover="buttonHover"
            className="text-clrTitle rounded-full border-2 border-clrTitle w-[223px] h-[65px] mt-5 py-2 font-medium mx-auto md:mx-0"
          >
            <Link href="#contact">GET IN TOUCH</Link>
          </motion.button>
        </div>
        <motion.div
          variants={titleAnimate}
          initial="initial"
          animate="visible"
          transition={{ type: 'tween', duration: 0.8 }}
          className="w-full h-[50%] md:w-[50%] md:h-full order-1 md:order-2"
        >
          <Image src={HeroVector} alt="HeroVector" width="1000" height="500" />
        </motion.div>
      </section>

      {/* Into */}
      <section className="w-full px-5 py-7 md:py-20 md:px-20 bg-clrTitle">
        <p className="font-normal text-3xl md:text-7xl text-[#ffffff] leading-10 tracking-wide text-justify">
          I use my knowledge of design and development to create online
          experiences that make people feel good and help them connect with
          others.
        </p>
      </section>

      {/* About */}
      <section className="w-full px-5 py-10 md:py-20 md:px-20" id="about">
        <h1 className="text-center mb-10 text-6xl text-clrTitle">ABOUT ME</h1>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <Image src={Profile} alt="Profile" width="1000" height="500" />
          </div>
          <div className="mt-4 md:mt-0 md:ml-10">
            <h1 className="text-3xl md:text-5xl font-medium text-clrContentTitle mb-3">
              A brief intro, who am I?
            </h1>
            <p className="text-xl text-clrParagraph leading-8 -tracking-wider mb-3">
              I am an independent frontend developer, UI/UX designer and creator
              based in Colombo Sri Lanka.
            </p>
            <p className="text-xl text-clrParagraph leading-8 -tracking-wider mb-3">
              I specialize in crafting elevated, intuitive, and minimalistic
              designs for startups and small businesses to help them stand out
              in the digital landscape with a powerful impact.
            </p>
            <p className="text-xl text-clrParagraph leading-8 -tracking-wider mb-3">
              {' '}
              😎When I am not developing or designing, I enjoy creating videos
              that talk about frontend development, productivity and design on
              LinkedIn
            </p>
          </div>
        </div>
      </section>

      {/* Resume */}
      <Resume />

      {/* Projects */}
      <Projects />

      {/* contact */}
      <section className="w-full px-5 py-10 md:py-20 md:px-20" id="contact">
        <h1 className="text-center mb-10 text-6xl text-clrTitle">CONTACT</h1>

        <div className="w-full flex flex-col md:flex-row md:justify-between md:gap-28 gap-10">
          <div className="w-full">
            <h1 className="text-3xl md:text-5xl font-medium text-clrContentTitle mb-3">
              Have an awesome idea? {`Let's`} bring it to life
            </h1>
            <p className="text-xl text-clrParagraph leading-8 -tracking-wider mb-3">
              I focus on all things design and web related. With each of my
              services, my goal is to deliver an impactful and elevating digital
              experience for everyone
            </p>
            <form className="w-full mb-5 mt-10">
              <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="w-full md:mr-5">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="outline-none border-b-2 p-3 mb-10 w-full border-clrParagraph placeholder-clrParagraph"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="outline-none border-b-2 p-3 border-clrParagraph mb-10 w-full placeholder-clrParagraph"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <textarea
                    placeholder="Your message"
                    className="outline-none border-b-2  p-3 w-full h-[150px] border-clrParagraph placeholder-clrParagraph"
                  ></textarea>
                </div>
              </div>
              <motion.button
                type="submit"
                variants={buttonHover}
                whileHover="buttonHover"
                className="text-clrContentTitle rounded-full border-2 border-clrContentTitle w-[223px] h-[65px] mt-5 py-2 font-medium mx-auto"
              >
                SEND MESSAGE
              </motion.button>
            </form>
          </div>
          <div className="w-full md:w-[40%]">
            <div className="mb-8">
              <h1 className="text-[32px] text-clrTitle font-medium">
                Contact Details
              </h1>
              <ul>
                <motion.li
                  variants={lgTextVarient}
                  initial="initial"
                  animate="visible"
                  whileHover="lgTextHover"
                  className="flex my-3"
                >
                  <Image src={Email} alt="#" className="mr-3" />
                  <Link
                    href="mailto:dumindubandara969@gmail.com"
                  >
                    dumindubandara969@gmail.com
                  </Link>
                </motion.li>
                <motion.li
                  variants={lgTextVarient}
                  whileHover="lgTextHover"
                  className="flex"
                >
                  <Image src={Phone} alt="#" className="mr-3" />
                  <span>{`+(94) 716816224`}</span>
                </motion.li>
              </ul>
            </div>

            <div className="mb-8">
              <h1 className="text-[32px] text-clrTitle font-medium">
                My Digital Spaces
              </h1>
              <ul>
                <motion.li
                  variants={lgTextVarient}
                  initial="initial"
                  animate="visible"
                  whileHover="lgTextHover"
                  className="flex my-3"
                >
                  <Image src={Linkedin} alt="#" className="mr-3" />
                  <Link href="https://www.linkedin.com/in/dumindulakshanbandara" target="_blank">
                    Linkedin
                  </Link>
                </motion.li>
                <motion.li
                  variants={lgTextVarient}
                  whileHover="lgTextHover"
                  className="flex"
                >
                  <Image src={GitHub} alt="#" className="mr-3" />
                  <Link href="https://github.com/DuminduBandara" target="_blank">
                    GitHub
                  </Link>
                </motion.li>
              </ul>
            </div>

            <div>
              <h1 className="text-[32px] text-clrTitle font-medium">
                Location
              </h1>
              <Link
                href="https://maps.app.goo.gl/jm362sFJYj7wmm7d8"
                target="_blank"
                className="my-3"
              >
                Malabe, Sri Lanka
              </Link>
              <div className='overflow-hidden rounded-xl mt-5'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31687.079365188318!2d79.94483254423363!3d6.9043628129019465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256d59601df81%3A0x31a1dd96e8d49ba!2sMalabe!5e0!3m2!1sen!2slk!4v1701706615258!5m2!1sen!2slk"
                  width="400"
                  height="300"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="w-full flex justify-between items-center px-5 py-10 md:py-20 md:px-20">
        <h4 className="text-lg">©Code By DUMINDU BANDARA 2023</h4>
        <motion.button
          type="submit"
          variants={lgTextVarient}
          whileHover="lgTextHover"
          className="text-clrTitle rounded-full border-2 border-clrTitle w-[223px] h-[65px] py-2 font-medium"
        >
          <Link href="#">BACK TO TOP</Link>
        </motion.button>
      </section>
    </section>
  );
}
