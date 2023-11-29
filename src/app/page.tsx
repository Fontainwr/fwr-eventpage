"use client";
import Image from "next/image";
import { assets } from "../app/utils/asset-utils";
import { type Framwork, frameworks } from "./utils/framework-utils";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentFramework, setCurrentFramework] = useState(frameworks[0])

  return (
    <main> 
      <Image 
        width={1200} 
        height={1200}
        role="presentation" 
        alt="gradient background" 
        className="fixed inset-0 w-screen h-screen object-cover" 
        src={assets.gradient} 
      />
      <div 
          className="fixed inset-0 opacity-30"
          style={{
            backgroundImage: `url(${assets.square})`,
            backgroundSize: "30px",
          }}
      />
  </main>
  );
}
