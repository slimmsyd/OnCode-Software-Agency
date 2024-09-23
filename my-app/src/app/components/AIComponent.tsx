"use client";
import Link from "next/link";
import Video from "./VideoComponent";
import { useEffect, useRef, useState } from "react";
import React, { RefObject } from "react";

interface Props {
  refSection3: RefObject<HTMLDivElement>;

}

export default function AIComponent({
  refSection3,

}: Props) {
  return (
    <section ref={refSection3} className="h-full site-wrapper bg-black">
      <div className="site-container h-full">
        <div className="col-start-2 my-[88px] px-[2rem]">
          <div className="video-container relative">
            {/* <div className="overlayDark absolute"></div> */}
            <Video
                src="https://www.blackw3b.io/AI_Laning_Video.mp4"
                type="video/mp4"
              width="100%"
              height="100vh"
              controls={true}
              autoPlay={false}
              loop={true}
              muted={false}
              className="relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const AsciiArt = () => {
  return (
    <div className="ascii-art-container">
      <pre>
        <code>
          {`
              ___
              |_|_|
              |_|_|              _____
              |_|_|     ____    |*_*_*|
         _______   _\\__\\___/ __ \\____|_|_   _______
        / ____  |=|      \\  <_+>  /      |=|  ____ \\
        ~|    |\\|=|======\\\\______//======|=|/|    |~
         |_   |    \\      |      |      /    |    |
          \\==-|     \\     |  2D  |     /     |----|~~/
          |   |      |    |      |    |      |____/~/
          |   |       \\____\\____/____/      /    / /
          |   |         {----------}       /____/ /
          |___|        /~~~~~~~~~~~~\\     |_/~|_|/
           \\_/        |/~~~~~||~~~~~\\|     /__|\\
           | |         |    ||||    |     (/|| \\)
           | |        /     |  |     \\       \\\\
           |_|        |     |  |     |
                      |_____|  |_____|
                      (_____)  (_____)
                      |     |  |     |
                      |     |  |     |
                      |/~~~\\|  |/~~~\\|
                      /|___|\\  /|___|\\
                     <_______><_______>
          `}
        </code>
      </pre>
    </div>
  );
};
