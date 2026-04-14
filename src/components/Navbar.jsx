'use client';
import { ChartLine, House, Watch } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {

  const [activeTab, setActiveTab] = useState('home');

    return (
      <header className="py-4 px-10 lg:px-20 sticky top-0 z-10 flex justify-between items-center shadow">
        <div>
          <Link href={"/"}>
            <h3
              className="text-2xl font-extrabold cursor-pointer"
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
              className="text-base font-semibold px-4 py-3 rounded-md flex gap-1 items-center cursor-pointer shadow-md transition-shadow duration-300 hover:shadow-lg"
              style={
                activeTab === "home"
                  ? { backgroundColor: "#244D3F", color: "white" }
                  : { backgroundColor: "white", color: "#64748B" }
              }
            >
              <House />
              Home
            </button>
          </Link>

          <Link href={"/timeline"}>
            <button
              onClick={() => setActiveTab("timeline")}
              className="text-base font-semibold text-white px-4 py-3 rounded-md flex gap-1 items-center cursor-pointer shadow-md transition-shadow duration-300 hover:shadow-lg"
              style={
                activeTab === "timeline"
                  ? { backgroundColor: "#244D3F", color: "white" }
                  : { backgroundColor: "white", color: "#64748B" }
              }
            >
              <Watch />
              Timeline
            </button>
          </Link>

          <Link href={"/stats"}>
            <button
              onClick={() => setActiveTab("stats")}
              className="text-base font-semibold text-white px-4 py-3 rounded-md flex gap-1 items-center cursor-pointer shadow-md transition-shadow duration-300 hover:shadow-lg"
              style={
                activeTab === "stats"
                  ? { backgroundColor: "#244D3F", color: "white" }
                  : { backgroundColor: "white", color: "#64748B" }
              }
            >
              <ChartLine />
              Stats
            </button>
          </Link>
        </div>
      </header>
    );
};

export default Navbar;