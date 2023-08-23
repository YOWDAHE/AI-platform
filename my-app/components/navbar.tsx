import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <div className="flex justify-between py-3 px-3">
      <div>
        <Button size="sm" variant='ghost' className="md:hidden">
          <Menu />
        </Button>
        Name
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Navbar;
