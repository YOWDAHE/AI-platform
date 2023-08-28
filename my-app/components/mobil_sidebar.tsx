import { Menu } from "lucide-react";
import { Button } from "./ui/button";

function Mobile_sidebar() {
  return (
    <Button size="sm" variant="ghost" className="md:hidden">
      <Menu />
    </Button>
  );
}

export default Mobile_sidebar;