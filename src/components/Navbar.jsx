'use client';
import { ChartLine, House, Watch } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {

  const [activeTab, setActiveTab] = useState('home');

    return (
      <header className="py-4 px-7 md:px-10 lg:px-20 sticky top-0 z-10 flex justify-between items-center shadow bg-white">
        <div>
          <Link href={"/"}>
            <h3
              className="text-lg md:text-2xl font-extrabold cursor-pointer"
              style={{ color: "#1F2937" }}
            >
              Keen<span style={{ color: "#244D3F" }}>Keeper</span>
            </h3>
          </Link>
        </div>

        <div className="flex items-center gap-2.5">
          <Link href={"/"}>
            <button
              onClick={() => setActiveTab("home")}
              className="text-base font-semibold px-2 py-1 md:px-4 md:py-3 rounded-md flex gap-1 items-center cursor-pointer shadow-md transition-shadow duration-300 hover:shadow-lg"
              style={
                activeTab === "home"
                  ? { backgroundColor: "#244D3F", color: "white" }
                  : { backgroundColor: "white", color: "#64748B" }
              }
            >
              <House />
              <span className="hidden md:inline-block">Home</span>
            </button>
          </Link>

          <Link href={"/timeline"}>
            <button
              onClick={() => setActiveTab("timeline")}
              className="text-base font-semibold text-white px-2 py-1 md:px-4 md:py-3 rounded-md flex gap-1 items-center cursor-pointer shadow-md transition-shadow duration-300 hover:shadow-lg"
              style={
                activeTab === "timeline"
                  ? { backgroundColor: "#244D3F", color: "white" }
                  : { backgroundColor: "white", color: "#64748B" }
              }
            >
              <Watch />
              <span className="hidden md:inline-block">Timeline</span>
            </button>
          </Link>

          <Link href={"/stats"}>
            <button
              onClick={() => setActiveTab("stats")}
              className="text-base font-semibold text-white px-2 py-1 md:px-4 md:py-3 rounded-md flex gap-1 items-center cursor-pointer shadow-md transition-shadow duration-300 hover:shadow-lg"
              style={
                activeTab === "stats"
                  ? { backgroundColor: "#244D3F", color: "white" }
                  : { backgroundColor: "white", color: "#64748B" }
              }
            >
              <ChartLine />
              <span className="hidden md:inline-block">Stats</span>
            </button>
          </Link>
        </div>
      </header>
    );
};

export default Navbar;