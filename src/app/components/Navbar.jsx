'use client'

import { usePathname } from "next/navigation";
import { FaGripLines } from "react-icons/fa";

const Navbar = () => {
    const pathName = usePathname();
    return (
        <div className="bg-white shadow sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex flex-col lg:flex-row justify-between items-center">
            
            {/* Responsive Navbar for small devices */}
            <div className="flex lg:hidden justify-around gap-5">
                <button 
                type="button"
                className="btn btn-success" popoverTarget="navbar-popover" style={{anchorName: "--nav-anchor"}}>
                    <FaGripLines/>
                </button>

                <ul 
                className="dropdown menu w-52 rounded-box bg-base-100 shadow-lg p-2"
                popover="auto"
                id="navbar-popover"
                style ={{
                    positionAnchor: "--nav-anchor",
                    top: "anchor(bottom)",
                    left: "anchor(left)",
                    marginTop:"8px",
                }}>

                </ul>

            </div>

            </div>
        </div>
    );
};

export default Navbar;