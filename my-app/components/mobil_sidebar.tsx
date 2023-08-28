"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";

function Mobile_sidebar() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;  
  }

  return (
    <Sheet>
      <SheetTrigger>
        <Button size="sm" variant="ghost" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={'left'} className="bg-gray-900">
        <Sidebar/>
      </SheetContent>
    </Sheet>
  );
}

export default Mobile_sidebar;
