"use client";

import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";

const monserat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Genteration",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-white",
  },
];

function Sidebar() {
    const Pathname = usePathname();
  return (
    <div className="text-white">
      <div>
        <Link
          href={"/dashboard"}
          className="flex items-center pl-3 mt-3 mb-14 gap-3"
        >
          <Image width={30} height={30} alt="logo" src={"/logo.png"} />
          <h1 className={cn("font-bold", monserat.className)}>Talk</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((el) => {
            return (
              <Link href={el.href} key={el.href}>
                <div
                  className={
                    cn("flex pl-3  p-3 transition-all",
                    Pathname == el.href ? "bg-white/10" : "hover:bg-white/10")
                  }
                >
                  <el.icon className={cn("h-5 w-5 mr-3", el.color)} />
                  {el.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
