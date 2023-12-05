'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function SideMenu({ toggleShow, onClick }) {
  const [linkact, setlinkact] = useState(toggleShow);

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    onClick();
    // Optionally, you can also update linkact state if needed
    setlinkact(false);
  };

  const navLinks = [
    {
      id: 1,
      name: 'Home',
      path: 'home',
    },
    {
      id: 2,
      name: 'About',
      path: 'about',
    },
    {
      id: 3,
      name: 'Projects',
      path: 'projects',
    },
    {
      id: 4,
      name: 'Resume',
      path: 'resume',
    },
    {
      id: 5,
      name: 'Contact',
      path: 'contact',
    },
  ];
  return (
    <div className={`${toggleShow ? 'w-full h-full bg-clrTitle fixed shadow-xl z-50 block top-0' : 'hidden'}`} >
      <div className="w-full h-full flex flex-col justify-center items-center gap-10 fixed">
        {navLinks.map((navLink, i) => (
          <div key={i}>
            <Link
              href={`#${navLink.path}`}
              className="text-7xl font-medium text-clrSubTitle uppercase"
              onClick={handleLinkClick}
            >
              {navLink.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
