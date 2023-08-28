import { UserButton } from "@clerk/nextjs";

import Mobile_sidebar from "./mobil_sidebar";

function Navbar() {
  return (
    <div className="flex justify-between py-3 px-3">
      <div>
        <Mobile_sidebar/>
        Name
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Navbar;
