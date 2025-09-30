"use client"

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [mounted, setMounted] = useState(false);


  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full h-16 bg-background text-foreground flex items-center justify-between px-8 md:px-16 z-50">
        
        {/* Sidebar toggle */}
        <button onClick={() => setOpenSidebar(!openSidebar)}>
          {openSidebar ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Sidebar */}
        {openSidebar && (
          <div className="absolute top-20 left-10 w-48 bg-background border p-4">
            <ul className="flex flex-col gap-3">
              <li className="cursor-pointer hover:text-primary border-b">Experience</li>
              <li className="cursor-pointer hover:text-primary border-b">Projects</li>
              <li className="cursor-pointer hover:text-primary border-b">Skills</li>
            </ul>
          </div>
        )}
      </nav>


    </div>
  );
}
