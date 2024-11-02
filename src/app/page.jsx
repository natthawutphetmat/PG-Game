"use client";

import React from 'react';
import Link from 'next/link';

export default function Page() {

  const Signup = () => {
    window.location.href="https://web-ip.myadsdevs.shop";
  };

  return (
    <header className="header">
      <div className="main">
        <div className="box">
          <button className='btnhome' onClick={Signup}>
            <div className="item">
              <img src="/img/PG01.webp" className="itemimg" alt="Image 1" />
              <img src="/img/btn01.gif" className="itemimg" alt="Button 1" />
              <img src="/img/PG02.webp" className="itemimg" alt="Image 2" />
              <img src="/img/btn02.gif" className="itemimg" alt="Button 2" />
              <img src="/img/PG03.webp" className="itemimg" alt="Image 3" />
              <img src="/img/btn02.gif" className="itemimg" alt="Button 2" />
              <img src="/img/PG04.webp" className="itemimg" alt="Image 4" />
              <img src="/img/btn02.gif" className="itemimg" alt="Button 2" />
              {/* Add more images as needed */}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
