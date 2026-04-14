import { ChartLine, House, Watch } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
      <header className="py-4 px-10 lg:px-20 sticky top-0 z-10 flex justify-between items-center shadow">
        <div>
          <h3 className="text-2xl font-extrabold" style={{ color: "#1F2937" }}>
            Keen<span style={{ color: "#244D3F" }}>Keeper</span>
          </h3>
        </div>

        <div className='flex items-center gap-2.5'>
          <button
            className="text-base font-semibold text-white px-4 py-3 rounded-md flex gap-1 items-center"
            style={{ backgroundColor: "#244D3F" }}
          >
            <House />
            Home
          </button>

          <button
            className="text-base font-semibold text-white px-4 py-3 rounded-md flex gap-1 items-center"
            style={{ backgroundColor: "#244D3F" }}
          >
            <Watch />
            Timeline
          </button>

          <button
            className="text-base font-semibold text-white px-4 py-3 rounded-md flex gap-1 items-center"
            style={{ backgroundColor: "#244D3F" }}
          >
            <ChartLine/>
            Stats
          </button>
        </div>
      </header>
    );
};

export default Navbar;