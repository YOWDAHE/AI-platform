// 'use client';
import { UserButton } from "@clerk/nextjs";
// import { usePathname } from "next/navigation";

import Mobile_sidebar from "./mobil_sidebar";

function Navbar() {
  // const path = usePathname().replace('/','');
  return (
    <div className="flex justify-between py-3 px-3">
      <div className="flex items-center">
        <Mobile_sidebar/>
        {/* {path.toUpperCase()} */}
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Navbar;
