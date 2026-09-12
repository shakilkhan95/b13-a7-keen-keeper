'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGripLines } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
    const pathName = usePathname();
    return (
      <div className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex flex-col lg:flex-row justify-between items-center">
          {/* Responsive Navbar for small devices */}
          <div className="flex lg:hidden justify-between items-center w-full">
            <button
              type="button"
              className="btn btn-success"
              popoverTarget="navbar-popover"
              style={{ anchorName: "--nav-anchor" }}
            >
              <FaGripLines />
            </button>

            <ul
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-lg p-2"
              popover="auto"
              id="navbar-popover"
              style={{
                positionAnchor: "--nav-anchor",
                top: "anchor(bottom)",
                left: "anchor(left)",
                marginTop: "8px",
              }}
            >
              <li>
                <Link
                  href="/"
                  className={`btn flex items-center gap-2 ${pathName === "/" ? "bg-green-700 text-white" : "bg-gray-300 text-black"}`}
                >
                  <IoMdHome /> Home
                </Link>
              </li>

              <li>
                <Link
                  href="/timeline"
                  className={`btn flex items-center gap-2 ${pathName === "/timeline" ? "bg-green-700 text-white" : "bg-gray-300 text-black"}`}
                >
                  <IoTimeOutline /> Timeline
                </Link>
              </li>

              <li>
                <Link
                  href="/stats"
                  className={`btn flex items-center gap-2 ${pathName === "/stats" ? "bg-green-700 text-white" : "bg-gray-300 text-black"}`}
                >
                  <TfiStatsUp /> Stats
                </Link>
              </li>
            </ul>

            <h1 className="font-bold text-2xl">
              <Link href="/">
                Keen<span className="text-green-800">Keeper</span>
              </Link>
            </h1>
          </div>

          {/* Desktop Navbar Logo */}
          <h1 className="font-bold text-2xl">
            <Link href="/">
              Keen<span className="text-green-800">Keeper</span>
            </Link>
          </h1>

          {/* Desktop Navbar Links */}
          <div className="hidden lg:flex flex-col lg:flex-row gap-">
              <Link
                href="/"
                className={`btn flex items-center gap-2 ${pathName === "/" ? "bg-green-700 text-white" : "bg-gray-300 text-black"}`}
              >
                <IoMdHome /> Home
              </Link>

              <Link
                href="/timeline"
                className={`btn flex items-center gap-2 ${pathName === "/timeline" ? "bg-green-700 text-white" : "bg-gray-300 text-black"}`}
              >
                <IoTimeOutline /> Timeline
              </Link>

              <Link
                href="/stats"
                className={`btn flex items-center gap-2 ${pathName === "/stats" ? "bg-green-700 text-white" : "bg-gray-300 text-black"}`}
              >
                <TfiStatsUp /> Stats
              </Link>
          </div>
        </div>
      </div>
    );
};

export default Navbar;